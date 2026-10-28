Member
//const result = calculateCheckout(50000, 5, true);
//console.log(result);
Hasil output = { subtotal: 250000, discount: 25000, ongkir: 15000, total: 240000 }

Non-member
// const result = calculateCheckout(50000, 5, false);
// console.log(result);
Hasil Output = { subtotal: 250000, discount: 0, ongkir: 0, total: 250000 }

Dibawah 250000
// const result = calculateCheckout(50000, 2, true);
// console.log(result);
Hasil Output = { subtotal: 100000, discount: 10000, ongkir: 15000, total: 105000 }

Tepat 250000
// const result = calculateCheckout(50000, 5, false);
// console.log(result);
Hasil Output = { subtotal: 250000, discount: 0, ongkir: 0, total: 250000 }

Diatas 250000
// const result = calculateCheckout(50000, 6, true);
// console.log(result);
Hasil Output = { subtotal: 300000, discount: 30000, ongkir: 0, total: 270000 }

Jumlah 0 
// const result = calculateCheckout(50000, 0, true);
// console.log(result);
Hasil Output = Error: Input tidak valid

Jumlah pecahan
// const result = calculateCheckout(50000, 1/2, true);
// console.log(result);
Hasil Output = { subtotal: 25000, discount: 2500, ongkir: 15000, total: 37500 }

Harga tidak valid
// const result = calculateCheckout(-2, 5, true);
// console.log(result);
Hasil Output = Error: Input tidak valid