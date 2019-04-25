from flask import Flask, json,jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime, requests
from flask_cors import CORS

db=SQLAlchemy()
app = Flask(__name__)
CORS(app)
app.config['JSON_SORT_KEYS']=False

POSTGRES = {
    'user' : 'postgres',
    'pw' : 'M0ku8un51n',
    'db' : 'e_accounting',
    'host' : 'localhost',
    'port' : '5432'
}

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\
%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES

db.init_app(app)
from model_barang import Barang
from model_penjualan import Penjualan

@app.route('/createBarang',methods=['POST'])
def createBarang():
    print("createBarang")
    body = request.json

    try:
        barang = Barang(
            id_barang=body['id_barang'],
            nama_barang = body['nama_barang'],
            harga_beli = body['harga_beli'],
            harga_jual = body['harga_jual'],
            jumlah_barang =  body['jumlah_barang']
        )
        db.session.add(barang)
        db.session.commit()
        return ("Berhasil menambahkan Barang"),200
    except Exception as e:
        return (str(e)),400


@app.route('/getAllBarang/', methods=["GET"])
def getAllBarang():
    try:
        barang = Barang.query.order_by(db.asc('id_barang'))
        print(barang)
        return jsonify([emstr.serialize()for emstr in barang]),200
    except Exception as e:
        return (str(e)),400

@app.route('/createPenjualan',methods=['POST'])
def createPenjualan():
    body = request.json
    barang = Barang.query.filter_by(id_barang = body['id_barang']).first()
    print (barang)
    try:
        penjualan = Penjualan(
            id_barang = body['id_barang'],
            jumlah_terjual = body['jumlah_terjual'],
            harga_total = int(body['jumlah_terjual'])*barang.harga_jual,
            tanggal_penjualan =  body['tanggal_penjualan']
        )
        db.session.add(penjualan)
        db.session.commit()
        updateStok(body['id_barang'],body['jumlah_terjual'])
        return ("Berhasil menambahkan penjualan"),200
    except Exception as e:
        return (str(e)),400

def updateStok(id_barang_, jumlah_terjual_):
    try:
        barang = Barang.query.filter_by(id_barang = id_barang_).first()
        barang.jumlah_barang = barang.jumlah_barang -  int(jumlah_terjual_)
        db.session.commit()
        return "Pengajuan cuti anda berhasil di update",200
    except Exception as e:
        return (str(e)),400

@app.route('/getAllPenjualan/', methods=["GET"])
def getAllPenjualan():
    try:
        penjualan = Penjualan.query.order_by(db.desc('tanggal_penjualan'))
        return jsonify([emstr.serialize()for emstr in penjualan]),200
    except Exception as e:
        return (str(e)),400
