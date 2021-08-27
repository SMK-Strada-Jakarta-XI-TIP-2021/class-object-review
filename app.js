// Tulis kode di bawah ini
// bikin objek
const motor = {
    tipe: "beat",
    merek: 'yamaha',
    platNomor : true,
    kondisi : true,
    roda : 2,
    stock : 100,
    harga : 15000000,
    kecepatan: 23,
    cekPlatNomor : function () {
        if (this.platNomor == true) {
            return `motor ini legal`;
        } else {
            return `motor ini ilegal atau barang black market`
        }
    },
    cekKondisi : function () {
        if (this.kondisi == true) {
            return `motor ini masih baru`;
        } else {
            return `motor ini bekas`;
        }
    },
    cekStok : function () {
        if (this.stock !== 0) {
            return `stok masih ada`;
        } else {
            return `stok habis`;
        }
    },
    cekKecepatan : function () {
        if (this.kecepatan < 23) {
            return `motor ini melambat karena kecepatannya ${this.kecepatan} KM/Jam.`
        } else if(this.kecepatan == 23){
            return `motor ini kecepatannya tidak melebihi batas.`
        } else {
            return `motor ini terlalu cepat. harap dikurangi kecepatannya`
        }
    },
    transaksiPembelian : function (stokBeli,nama) {
        let jumlahStok = stokBeli * this.harga;
        return `${nama} sedang membeli motor sebanyak ${stokBeli} unit dengan harga ${jumlahStok}.`
    }
}

// memanggil objek 
console.log(`   pemanggilan biasa   `);
console.log('                       ');
console.log(motor);
console.log('                       ');

// memanggil objek dengan 
console.log('pemanggilan chaining');
console.log('                       ');
console.log("tipe : " + motor.tipe);
console.log("merek : " + motor.merek);
console.log("Plat Nomor : " + motor.platNomor);
console.log('Kondisi : ' + motor.kondisi);
console.log('jumlah roda : ' + motor.roda);
console.log('jumlah stok : ' + motor.stock);
console.log('harga per unit : ' + motor.harga);
console.log('berkecepatan : ' + motor.kecepatan);
console.log(motor.cekPlatNomor());
console.log(motor.cekKondisi());
console.log(motor.cekStok());
console.log(motor.cekKecepatan());
console.log(motor.transaksiPembelian(5, 'max'));
console.log('                                 ');

// memanggil objek dengan looping
console.log('pemanggilan dengan looping');
console.log('                       ')
for (let x in motor) {
    console.log(`${x} : ${motor[x]}`);
    if (motor[x] === motor.kecepatan) {
        break;
    }
}
console.log(motor.cekPlatNomor());
console.log(motor.cekKondisi());
console.log(motor.cekStok());
console.log(motor.cekKecepatan());
console.log(motor.transaksiPembelian(2, 'sulthan'));
console.log('                          ');

// bikin class
class Kendaraan {
    constructor(jenis, tipe, merek, platNomor, kondisi, roda, stock, harga, kecepatan) {
        this.jenis = jenis;
        this.tipe = tipe;
        this.merek = merek;
        this.platNomor = platNomor;
        this.kondisi = kondisi;
        this.roda = roda;
        this.stock = stock;
        this.harga = harga;
        this.kecepatan = kecepatan;
    }
    cekPlatNomor () {
        if (this.platNomor == true) {
            return `${this.jenis} ini legal`;
        } else {
            return `${this.jenis} ini ilegal atau barang black market`
        }
    }
    cekKondisi () {
        if (this.kondisi == true) {
            return `${this.jenis} ini masih baru`;
        } else {
            return `${this.jenis} ini bekas`;
        }
    }
    cekStok () {
        if (this.stock !== 0) {
            return `stok masih ada`;
        } else {
            return `stok habis`;
        }
    }
    cekKecepatan (x) {
        if (this.kecepatan < x) {
            return `${this.jenis} ini melambat karena kecepatannya ${this.kecepatan} KM/Jam.`
        } else if(this.kecepatan == x){
            return `${this.jenis} ini kecepatannya tidak melebihi batas.`
        } else {
            return `${this.jenis} ini terlalu cepat. harap dikurangi kecepatannya`
        }
    }
    transaksiPembelian (stokBeli,nama) {
        let jumlahStok = stokBeli * this.harga;
        return `${nama} sedang membeli ${this.jenis} sebanyak ${stokBeli} unit dengan harga ${jumlahStok}.`
    }
}

// memanggil class
// membuat object instance
let mobil = new Kendaraan('mobil', 'avanza', 'chevrolet', true, false, 4, 200, 200000000, 150);
let motorbike = new Kendaraan('motor', 'vespa', 'suzuki', false, true, 2, 10, 20000000, 20);
let sepeda = new Kendaraan('sepeda', 'BMX', 'atlantis', false, false, 3, 50, 1500000, 5);
console.log('                          ');

// memanggil class biasa
console.log('pemanggilan biasa')
console.log('                          ');
console.log(mobil);
console.log(motorbike);
console.log(sepeda);
console.log('                          ');

// memanggil class dengan chaining
console.log('pemanggilan chaining');
console.log('                          ');
console.log('mobil');
console.log(`Jenis Kendaraan : ${mobil.jenis}`);
console.log(`tipe : ${mobil.tipe}`);
console.log(`merek : ${mobil.merek}`);
console.log(`plat nomor : ${mobil.platNomor}`);
console.log(`kondisi : ${mobil.kondisi}`);
console.log(`roda : ${mobil.roda}`);
console.log(`stock : ${mobil.stock}`);
console.log(`harga : ${mobil.harga}`);
console.log(mobil.cekPlatNomor());
console.log(mobil.cekKondisi());
console.log(mobil.cekStok());
console.log(mobil.cekKecepatan(150));
console.log(mobil.transaksiPembelian(1, "adri"));
console.log('                          ');
console.log('motor');
console.log(`Jenis Kendaraan : ${motorbike.jenis}`);
console.log(`tipe : ${motorbike.tipe}`);
console.log(`merek : ${motorbike.merek}`);
console.log(`plat nomor : ${motorbike.platNomor}`);
console.log(`kondisi : ${motorbike.kondisi}`);
console.log(`roda : ${motorbike.roda}`);
console.log(`stock : ${motorbike.stock}`);
console.log(`harga : ${motorbike.harga}`);
console.log(motorbike.cekPlatNomor());
console.log(motorbike.cekKondisi());
console.log(motorbike.cekStok());
console.log(motorbike.cekKecepatan(20));
console.log(motorbike.transaksiPembelian(3, "joaquin"));
console.log('                          ');
console.log('sepeda');
console.log(`Jenis Kendaraan : ${sepeda.jenis}`);
console.log(`tipe : ${sepeda.tipe}`);
console.log(`merek : ${sepeda.merek}`);
console.log(`plat nomor : ${sepeda.platNomor}`);
console.log(`kondisi : ${sepeda.kondisi}`);
console.log(`roda : ${sepeda.roda}`);
console.log(`stock : ${sepeda.stock}`);
console.log(`harga : ${sepeda.harga}`);
console.log(sepeda.cekPlatNomor());
console.log(sepeda.cekKondisi());
console.log(sepeda.cekStok());
console.log(sepeda.cekKecepatan(5));
console.log(sepeda.transaksiPembelian(3, "noele"));
console.log('                          ');