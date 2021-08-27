// Tulis kode di bawah ini
// bikin objek
const motor = {
    platNomor = true,
    kondisi = true,
    roda = 2,
    stock = 100,
    harga = 15000000,
    kecepatan = 23,
    cekPlatNomor = function () {
        if (this.platNomor == true) {
            return `motor ini legal`;
        } else {
            return `motor ini ilegal atau barang black market`
        }
    },
    cekKondisi = function () {
        if (this.kondisi == true) {
            return `motor ini masih baru`;
        } else {
            return `motor ini bekas`;
        }
    },
    cekStok = function () {
        if (this.stock !== 0) {
            return `stok masih ada`;
        } else {
        return `stok habis`;
        }
    },
    cekKecepatan = function () {
        if (this.kecepatan < 23) {
            return `motor ini melambat karena kecepatannya ${this.kecepatan} KM/Jam.`
        } else {
            return `motor ini melambat karena kecepatannya ${this.kecepatan} KM/Jam.`
        }
    },
    transaksiPembelian = function (stokBeli,nama) {
        let jumlahStok = stokBeli * this.harga;
        return `${nama} sedang membeli motor sebanyak ${stokBeli} dengan harga ${jumlahStok}.`
    }
}

// memanggil objek
console.log(motor);
console.log(motor.tipe);
console.log(motor.platNomor);
console.log(motor.kondisi);
console.log(motor.roda);
console.log(motor.stok);
console.log(motor.harga);
console.log(motor.kecepatan);
console.log(motor.cekPlatNomor());
console.log(motor.cekStok());
console.log(motor.cekKecepatan(50));
console.log(motor.transaksiPembelian(5, 'max'));


// bikin class

// memanggil class
