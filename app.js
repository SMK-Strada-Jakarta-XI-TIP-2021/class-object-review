// Tulis kode di bawah ini
// Membuat object literal
let hewan = {
    nama: "Kucing",
    warna: "putih",
    mata: 2,
    kaki: 4,
    tipe: "persia",
    bagus: true,
};

console.log(hewan);
console.log(hewan.warna);
console.log(hewan.nama);

// Constructor
class Kucing {
    constructor(tipeKucing, modelKucing) {
        this.tipeKucing = tipeKucing;
        this.modelKucing = modelKucing;
    }
}