function getAllBarang(){
    
    $.ajax({
        url: 'http://127.0.0.1:5000/getAllBarang',
        method: "GET",
       
        success: function (barang) {
            $('#get_profil').empty()
            for (var i = 0; i < barang.length; i++) {
                var barangInfo =
                    `
                    <li class="list-group-item align-items-center"  style="width:1010px; justify-content: space-between; margin: 20px;">
                        <h4 class="panel-title">
                            <h5>ID Barang : ${barang[i].id_barang}</h5>
                            <a data-toggle="collapse" href="#collapse-${i}" style="text-decoration:none; color: gray;">Detail</a>
                        </h4>
                    </li>
                    <div class="panel-collapse collapse" id="collapse-${i}">
                        <form class="shadow-lg p-3 m-3 bg-white rounded">
                            <form class="form-horizontal" action="/examples/actions/confirmation.php" method="post">
                                <div class="form-group" style="display:flex; margin-top: 30px; justify-content: space-between;">
                                    <label class="control-label col-xs-2" style="margin:13px; margin-left:50px;">Nama Barang</label>
                                    <li class="list-group-item d-flex flex-row align-items-center"  style="width:700px;">${barang[i].nama_barang}</li>
                                </div>
                                <div class="form-group" style="display:flex; justify-content: space-between;">
                                    <label class="control-label col-xs-2" style="margin:13px; margin-left:50px;">Jumlah Barang ID</label>
                                    <li class="list-group-item d-flex flex-row align-items-center"  style="width:700px;">${barang[i].jumlah_barang}</li>
                                </div>
                                <div class="form-group" style="display:flex; justify-content: space-between;">
                                    <label class="control-label col-xs-2" style="margin:13px; margin-left:50px;">Harga Beli</label>
                                    <li class="list-group-item d-flex flex-row align-items-center"  style="width:700px;">${barang[i].harga_beli}</li>
                                </div>
                                <div class="form-group" style="display:flex; justify-content: space-between;">
                                    <label class="control-label col-xs-2" style="margin:13px; margin-left:50px;">Harga Jual</label>
                                    <li class="list-group-item d-flex flex-row align-items-center"  style="width:700px;">${barang[i].harga_jual}</li>
                                </div>
                                
                            </form>
                        </form>
                    </div>
                    `
                
            
                $('#get_profil').append(barangInfo)
            }
            
        },
        error: function (error) {
            //error handling

        },
        complete: function () {

        }
    })
}

function getAllPenjualan(){
    
    $.ajax({
        url: 'http://127.0.0.1:5000/getAllPenjualan',
        method: "GET",
       
        success: function (penjualan) {
            $('#get_profil').empty()
            for (var i = 0; i < penjualan.length; i++) {
                var penjualanInfo =
                    `
                    <li class="list-group-item align-items-center"  style="width:1010px; justify-content: space-between; margin: 20px;">
                        <h4 class="panel-title">
                            <h5>ID Penjualan      : ${penjualan[i].id_penjualan}</h5>
                            <h5>Tanggal Penjualan : ${penjualan[i].tanggal_penjualan}</h5>
                            <h5>Jumlah Penjualan  : ${penjualan[i].jumlah_terjual}</h5>
                            <h5>Harga Total       : ${penjualan[i].harga_total}</h5>
                        </h4>
                    </li>
                    `
                
            
                $('#get_profil').append(penjualanInfo)
            }
            
        },
        error: function (error) {
            //error handling

        },
        complete: function () {

        }
    })
}
function createBarang(){
    $('#get_profil').empty()
    var createBarangInfo =
        `
        <div class="container">
            <form class="shadow-lg p-3 m-3 bg-white rounded">
                <div class="form-group" style="display:flex; justify-content: space-between;">
                    <label class="control-label col-xs-2" style="margin: 0px 50px;">ID Barang</label>
                    <input type="text" class="form-control" id="id_barang">
                </div>
                <div class="form-group" style="display:flex; justify-content: space-between;">
                    <label class="control-label col-xs-2" style="margin: 0px 50px;">Nama Barang</label>
                    <input type="text" class="form-control" id="nama_barang">
                </div>
                <div class="form-group" style="display:flex; justify-content: space-between;">
                    <label class="control-label col-xs-2" style="margin: 0px 50px;">Jumlah</label>
                    <input type="number" class="form-control" id="jumlah">
                </div>
                <div class="form-group" style="display:flex; justify-content: space-between;">
                    <label class="control-label col-xs-2" style="margin: 0px 50px;">Harga Beli</label>
                    <input type="number" class="form-control" id="harga_beli">
                </div>
                <div class="form-group" style="display:flex; justify-content: space-between;">
                    <label class="control-label col-xs-2" style="margin: 0px 50px;">Harga Jual</label>
                    <input type="number" class="form-control" id="harga_jual">
                </div>
               
                <a class="btn btn-success" onclick="submit_create_barang()">Submit</a>        
            </form>
        </div>   
        `         
    $('#get_profil').append(createBarangInfo)
}
function submit_create_barang(){
    console.log("Masuk submit")
    var id_barang = $('input#id_barang').val()
    var nama_barang = $('input#nama_barang').val()
    var jumlah = $('input#jumlah').val()
    var harga_beli = $('input#harga_beli').val()
    var harga_jual = $('input#harga_jual').val()
    console.log(id_barang)
    console.log(nama_barang)
    console.log(jumlah)
    console.log(harga_beli)
    console.log(harga_jual)
    // if (id_barang == null) {
    //     console.log("id_barang is empty")
    // } else if (nama_barang == null) {
    //     console.log("nama_barang is empty")
    // } else if (jumlah == null) {
    //     console.log("jumlah is empty")
    // } else if (harga_beli == null) {
    //     console.log("harga_beli is empty")
    // } else if (harga_jual == null) {
    //     console.log("harga_jual is empty")
    // } else{
    $.ajax({
        url: 'http://127.0.0.1:5000/createBarang',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            id_barang : id_barang,
            nama_barang : nama_barang,
            harga_beli : harga_beli,
            harga_jual : harga_jual,
            jumlah_barang : jumlah
        }),

        success: function (response) {
            alert("Berhasil Menambahkan barang") //400
        },
        error: function (error) {},
        complete: function () {}
    })
    // }
    
}

function createPenjualan(){
    getNamaBarang()
    $('#get_profil').empty()
    var createPenjualanInfo =
        `
        <div class="container">
            <form class="shadow-lg p-3 m-3 bg-white rounded">
                <div class="form-group" style="display:flex; justify-content: space-between;">
                    <label for="sel1" class="control-label col-xs-2" style="margin: 0px 50px;">Nama Barang</label>
                    <select class="form-control" id="nama_barang_options">
        
                     </select>
                </div>
                <div class="form-group" style="display:flex; justify-content: space-between;">
                    <label class="control-label col-xs-2" style="margin: 0px 50px;">Jumlah Terjual</label>
                    <input type="text" class="form-control" id="jumlah_terjual">
                </div>
                <div class="form-group" style="display:flex; justify-content: space-between;">
                            <label class="control-label col-xs-2" style="margin: 0px 50px;">Start Date</label>
                            <input class="form-control" type="date" name="tanggal_penjualan_name" id="tanggal_penjualan">
                </div>
               
                <a class="btn btn-success" onclick="submit_create_penjualan()">Submit</a>        
            </form>
        </div>   
        `         
            $('#get_profil').append(createPenjualanInfo)
}

function submit_create_penjualan(){
    console.log("Masuk submit")
    var id_barang = document.getElementById("nama_barang_options")
    var id_barang_selected = id_barang.options[id_barang.selectedIndex].value;
    var jumlah_terjual = $('input#jumlah_terjual').val()
    var tanggal_penjualan = document.getElementById("tanggal_penjualan").value
    var get_tanggal_penjualan = new Date(tanggal_penjualan)
    
    console.log(jumlah_terjual)
    console.log(get_tanggal_penjualan)
    console.log(id_barang_selected)
    // if (id_barang == null) {
    //     console.log("id_barang is empty")
    // } else if (nama_barang == null) {
    //     console.log("nama_barang is empty")
    // } else if (jumlah == null) {
    //     console.log("jumlah is empty")
    // } else if (harga_beli == null) {
    //     console.log("harga_beli is empty")
    // } else if (harga_jual == null) {
    //     console.log("harga_jual is empty")
    // } else{
    $.ajax({
        url: 'http://127.0.0.1:5000/createPenjualan',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            id_barang : id_barang_selected,
            jumlah_terjual : jumlah_terjual,
            tanggal_penjualan : get_tanggal_penjualan
        }),

        success: function (response) {
            alert("Berhasil Menambahkan barang") //400
        },
        error: function (error) {},
        complete: function () {}
    })
    // }
    
}

function getNamaBarang(){
    $.ajax({
        url: 'http://127.0.0.1:5000/getAllBarang',
        method: "GET",
            
        success: function (barang) {
            console.table(barang)
            $('#nama_barang_options').empty()
            for (var i = 0; i < barang.length; i++) {
                var allNamaBarang =
                    `
                    <option id=nama_barang_options_${i} value="${barang[i].id_barang}">${barang[i].nama_barang}</option>
                    `
                $('#nama_barang_options').append(allNamaBarang)
                
            }
        },
        error: function (error) {},
        complete: function () {}
    })
}