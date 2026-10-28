// Simple checkout calculation module
// Requirements:
// 1. price (harga) and quantity (jumlah) must be positive numbers (> 0).
// 2. member status is a boolean (true = member, false = non‑member).
// 3. subtotal = harga * jumlah.
// 4. members receive a 10% discount on the subtotal.
// 5. If the subtotal after discount is >= 250 000, shipping (ongkir) is free; otherwise 15 000.
// 6. total payment = subtotal - discount + ongkir.
// 7. The function returns an object containing subtotal, discount, ongkir, and total.

/**
 * Calculate checkout details.
 * @param {number} harga - Unit price, must be > 0.
 * @param {number} jumlah - Quantity, must be > 0.
 * @param {boolean} isMember - true if the buyer is a member.
 * @returns {{subtotal:number, discount:number, ongkir:number, total:number}}
 */
function calculateCheckout(harga, jumlah, isMember) {
  // Validate inputs
  if (typeof harga !== 'number' || harga <= 0) {
    throw new Error('Input tidak valid');
  }
  if (typeof jumlah !== 'number' || jumlah <= 0) {
    throw new Error('Input tidak valid');
  }
  if (typeof isMember !== 'boolean') {
    throw new Error('Input tidak valid');
  }

  const subtotal = harga * jumlah;
  const discount = isMember ? subtotal * 0.10 : 0;
  const afterDiscount = subtotal - discount;
  const ongkir = afterDiscount >= 250000 ? 0 : 15000;
  const total = afterDiscount + ongkir;

  return {
    subtotal,
    discount,
    ongkir,
    total,
  };
}

//Member
// const result = calculateCheckout(50000, 5, true);
// console.log(result);

// Non-member
// const result = calculateCheckout(50000, 5, false);
// console.log(result);

//Dibawah 250000
// const result = calculateCheckout(50000, 2, true);
// console.log(result);

// Tepat 250000
// const result = calculateCheckout(50000, 5, false);
// console.log(result);

// Diatas 250000
// const result = calculateCheckout(50000, 6, true);
// console.log(result);

//Jumlah 0 
// const result = calculateCheckout(50000, 0, true);
// console.log(result);

//jumlah pecahan
// const result = calculateCheckout(50000, 1/2, true);
// console.log(result);

//Harga tidak valid
// const result = calculateCheckout(-2, 5, true);
// console.log(result);





