// Tulis kode di bawah ini
console.log ('================ Ulangan Object Literal ================')
let kendaraan = {
    nama: "Motor",
    model : "Mio GT",
    tipe : 2010,
    perlengkapanKendaraan : ['SIM','STNK','Helm','Spion','PlatNomor'],
    kondisiKendaraan : 'Baik' || true,
    suara : function () {
        return 'Bersuara ' + 'Brummm!!!!'
    }
}

let suaraKendaraan = kendaraan.suara();
console.log (`Ini ${kendaraan.nama} ${kendaraan.model} keluaran ===> ${kendaraan.tipe}`);
console.log (`Perlengkapan yang sudah tersedia ==> ${kendaraan.perlengkapanKendaraan}`);
console.log (`${kendaraan.nama} ${kendaraan.model} ini bersuara ${kendaraan.suara()}`);
console.log (`Kondisi motor ini ==> ${kendaraan.kondisiKendaraan}`)

console.log('========================================================')