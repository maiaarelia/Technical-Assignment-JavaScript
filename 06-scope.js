/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?  
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
      

/// WRITE YOUR ANALYSIS HERE
/// =>  Ada dua Variable Scope di JavaScript yaitu local scope dan global scope
/// =>  Variable local scope atau variable fungsi lokal adalah variabel yang dideklarasikan di dalam fungsi pada JavaScript. 
///     Variabel lokal hanya dapat diakses dari dalam fungsi tersebut. Oleh karena itu, tidak dapat menjangkau mereka dari fungsi lain di dokumen.
///     Global scope adalah ruang lingkup di luar ruang lingkup fungsi-fungsi dalam kode javascript yang kita buat. Variabel yang dideklarasikan 
///     dalam global scope biasa disebut variabel global.
/// => Local Scope

function lari(){
  let jalan = "cepat";
  return jalan;
}
console.log(lari());


/// => Global Scope
const myNama = "Maia";
function unik() {
  return myNama;
}
console.log(myNama);


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// => Mariah
/// => Karena pada variablenya menggunakan Global Scope sehingga dideklarasikan di luar ruang lingkup fungsi-fungsi kode javascript yang kita buat (bukan John Watson) dan 
/// pada console.log terdapat function printFirstName yang berarti output memunculkan nama depan dari Mariah Carey.

const name = "John Watson";

function printFirstName(name) {
return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));