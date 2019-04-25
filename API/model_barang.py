from app import db

class Barang(db.Model):
    __tablename__ ='barang'

    id_barang = db.Column(db.String(), primary_key=True)
    nama_barang = db.Column (db.String(), nullable=False)
    harga_beli =  db.Column (db.Integer, nullable=False)
    harga_jual = db.Column (db.Integer, nullable=False)
    jumlah_barang = db.Column (db.Integer, nullable=False)
    

    def __init__ (self, id_barang, nama_barang, harga_beli, harga_jual, jumlah_barang):
        self.id_barang = id_barang
        self.nama_barang = nama_barang
        self.harga_beli = harga_beli
        self.harga_jual = harga_jual
        self.jumlah_barang = jumlah_barang
    
    def __repr__(self):
        return '<id_barang ()>'.format(self.id_barang)
    
    def serialize(self):
        return{
            'id_barang' : self.id_barang,
            'nama_barang' : self.nama_barang,
            'harga_beli' : self.harga_beli,
            'harga_jual' : self.harga_jual,
            'jumlah_barang' : self.jumlah_barang
        }