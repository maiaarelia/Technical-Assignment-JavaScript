/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error : 
/// - Reference Error : 
/// - Range Error : 
/// - Syntax Error : 
/// 
/// WRITE YOUR ANALYSIS HERE
/// TypeError adalah exception yang terjadi saat dilakukan eksekusi terhadap suatu operasi atau fungsi dengan tipe objek yang tidak sesuai.
/// ReferenceError dilempar jika Anda menggunakan (rekomendasi) disesuaikan yang namun dideklarasikan
/// RangeError dilemparkan jika Anda menggunakan angka yang berada di luar rentang nilai legal. Misalnya: Anda tidak dapat mengatur jumlah digit signifikan sebuah angka menjadi 500
/// SyntaxError muncul jika Anda mencoba mengevaluasi kode dengan kesalahan sintaks


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi? 
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut? 
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi? 

/// WRITE YOUR ANALYSIS HERE
/// - Yang terjadi adalah error
/// - Type Error
/// - Karena seharusnya penempatan variable didahulukan setelah itu baru console.log

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
