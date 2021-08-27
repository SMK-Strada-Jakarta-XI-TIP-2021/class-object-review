// Tulis kode di bawah ini

let motor = {
    merk: "yamaha",
    warna: "putih biru",
    ban: 2,
    cc: 1500,
    knalpot: "akrapovic",
    harga: 100000000,
    syaratMengemudi:['helm', 'sim', 'stnk', 'platnomor', 'spion'],
    kondisiKendaraan: "Sangat Baik" || true,
    bunyiKnalpot: function () {
        return this.knalpot + ' berbunyi ' + ' kencang ' + 'ngenggg!!!';
    },
    start : function(kondisiKendaraan) {
        if (kondisiKendaraan !== true) {
            console.log('motor ini berjalan!' + 'berjalan dengan normal')
        }
    }
};

console.log(motor);
console.log(motor.merk);
console.log(motor.warna);
console.log(motor.ban);
console.log(motor.cc);
console.log(motor.knalpot);
console.log(motor.harga);
console.log(motor.bunyiKnalpot());

let motorBunyiKnalpot= motor.bunyiKnalpot();

console.log('ini ketika knalpot ' + motorBunyiKnalpot);
console.log('ini syarat berkendara' + motor.syaratMengemudi)
console.log('ini kondisi motor ' + motor.kondisiKendaraan)