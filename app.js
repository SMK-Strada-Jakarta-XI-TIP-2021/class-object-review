// Tulis kode di bawah ini

// Mampu membuat `object` dan `object literal`

var hewan = {
    nama: 'kelinci',
    warna: 'coklat',
    warnaMata: 'biru',
    umur: '5 tahun',
    jenis: 'cylindrical',
    tipeTubuh: 'silindris',   
    kesehatanKelinci: true,
    
    kesehatanKelinci : function() {
        if (this.kesehatanKelinci === true) {
            return 'kondisi kelinci sehat'
        } else {
            return 'kondisi kelinci kurang sehat'
        }
        
    }
};

console.log(hewan);





//  Mampu membuat `object instance` dari `class`

