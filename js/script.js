console.log('Campazzo');

// 1. chiedere all'utente i km da percorre

let km = prompt('Quanti km devi percorrere?');
console.log('km da percorrere', km);


// 2. chiedere all'utente la sua età

let age = prompt('Quanti anni hai?');
console.log('eta', age);

// 3. calcolare il prezzo del biglietto in base ai km da percorrere

let price = 0.21;
console.log('prezzo al km', price); 

// let ticketPrice = price * km;
// console.log(ticketPrice);

// 4. calcolare lo sconto, se previsto

let underageDiscount = (price * km) * 0.8;
console.log('il prezzo è', underageDiscount);

let overDiscount = (price * km) * 0.6;
console.log('il prezzo è', overDiscount);

let noDiscount = price * km;

let finalPrice

if (age < 18) {
    finalPrice = underageDiscount;
    console.log('minore', finalPrice)
} else if (age > 65) {
    finalPrice = overDiscount;
    console.log('over', finalPrice)
} else {
    finalPrice = noDiscount;
    console.log('niente sconto', noDiscount)
}

// 5. dare un forma umana

let youPay = finalPrice.toFixed(2);
console.log ('prezzo umano', youPay)

// 6. stampare il risultato