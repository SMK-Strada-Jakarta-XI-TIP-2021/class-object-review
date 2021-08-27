// Tulis kode di bawah ini

let motor = {
    merk: "yamaha",
    warna: "putih biru",
    ban: 2,
    cc: 1500,
    knalpot: "akrapovic",
    harga: 100000000,
    
    bunyiKnalpot: function () {
        return this.knalpot + ' berbunyi ' + ' kencang ' + 'ngenggg!!!';
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

var motorBunyiKnalpot= motor.bunyiKnalpot();

console.log('ini ketika knalpot ' + motorBunyiKnalpot);