// Tulis kode di bawah ini

var namagrub= {
    nama: 'Bangtan Sonyeondan',
    warnalogo: 'hitam putih',
    warnaMata: 'hitam',
    umurgrub: '8 tahun',
    jenisgendre: 'Kpop',
    tipeTubuh: 'bagus dan normal',   
    kesehatangrub: true,

    ketenarangrub : function() {
        if (this.ketenaranangrub === true) {
            return 'kondisi grub populer'
        } else {
            return 'kondisi grub kurang populer'
        }

    }
};

console.log(namagrub);
