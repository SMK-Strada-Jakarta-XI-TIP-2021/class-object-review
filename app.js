// Tulis kode di bawah ini

const motor = {
    motorName: "Aerox",
    motorModel: 155,
    motorColor: "White",
    motorBerat: "125kg",
    motorKondisi: true,
    motorDetail: ['Merek','Kapasitas Bahan Bakar','Harga OTR','DiMensi'],

    kondisiMotor: function() {
    if(motorKondisi === true){
    return 'Motor Kondisi Baru'
    } else {
    return 'Motor Kondisi Rusak'
    }
    }
};

console.log(motor); //hasil