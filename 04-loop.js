/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

const number1 = 1;
const number2 = 100;

for (let i = number1; i <= number2; i++) {
    let rel = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
           rel++;
        }
    }

    if (i > 1 && rel == 0) {
        console.log(i);
    }
}



/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
// while (....) {}
let nomor = 2;

while(primeCounter < 50) {
    if (primeChecker(nomor) == true) {
    primeCounter += 1;
    console.log("primecounter " + primeCounter);
    }
    if (primeCounter < 50) {
       nomor += 1; 
    }
}
      
fiftiethPrime =nomor;
console.log(fiftiethPrime);

function primeChecker(nomor) {
    let prima = true;
    for(let i = 2; i < nomor; i++) {
        if (nomor % i == 0) {
            prima = false;
            break;
        }
    }
    return prima;
}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
// do { .... } while (....) 

let angka = 0;

do{
    if(!(angka % 2 == 0)) {
        oddCounter += 1;
    }
    if(oddCounter < 50) {
        angka += 1;
    }   
    else {
        fiftiethOdd = angka;
    }
}
while(oddCounter < 50)
console.log(fiftiethOdd)