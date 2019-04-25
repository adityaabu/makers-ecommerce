import datetime
from app import db

class Penjualan(db.Model):
    __tablename__ ='penjualan'

    id_penjualan = db.Column(db.Integer, primary_key=True)
    id_barang = db.Column (db.String(), nullable=False)
    jumlah_terjual =  db.Column (db.Integer, nullable=False)
    harga_total = db.Column (db.Integer, nullable=False)   
    tanggal_penjualan = db.Column(db.DateTime , nullable=True)

    def __init__ (self, id_barang, jumlah_terjual, harga_total, tanggal_penjualan):
        self.id_barang = id_barang
        self.jumlah_terjual = jumlah_terjual
        self.harga_total = harga_total
        self.tanggal_penjualan = tanggal_penjualan
    
    def __repr__(self):
        return '<id_penjualan ()>'.format(self.id_penjualan)
    
    def serialize(self):
        return{
            'id_penjualan' : self.id_penjualan,
            'id_barang' : self.id_barang,
            'jumlah_terjual' : self.jumlah_terjual,
            'harga_total' : self.harga_total,
            'tanggal_penjualan' : self.tanggal_penjualan
        }