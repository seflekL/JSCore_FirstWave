//Javada 3 adet degisken turu bulunur
//let -  var - const olmak uzere
//const atandiktan sonra degistirelemez sabiti ifade eder orn pi sayisi

/*
Javascripte temelde 5 adet data to[o vardor
u data tipleri String Number Boolean Null ve Undefined 
Degeikste olusturuken data tipini belirtmeye gerekyoktur
*/

//String Data Tipi
let isim='Levent';
var soyisim='Sef';
console.log(isim+soyisim);

console.log('------')
//number data tipi
let yas=45;
var kilo=76.2;

console.log(yas+" "+kilo);
var sayi=4
console.log (sayi+kilo);
// var let tekrar tnaimla 

const pi=3;// pi=3.14; const olarak tanimlanirsa tekrar atama yapilamaz 
console.log(pi);

//Boolean data tipi
const isHappy=true; // true degistirimezsinb
let   isLearn=true; //ilerde degistire bilirsin
var   islazy=true; // var komutuuu degise bilri 

console.log(isHappy);


//Nulldata tipi
let  firstname='Levent'; 
var  lastname='Zeus';   
var  itsalary=null;
let yearofRetired=undefined;

console.log('Calisan Bilgileri \n\t'+'Firstname:'+firstname+'\n\tLastname'+lastname+'\n\titsalary'+itsalary+yearofRetired)

itsalary=9000;
console.log('Calisan Bilgileri \n\t'+'Firstname:'+firstname+'\n\tLastname'+lastname+'\n\titsalary'+itsalary+" "+'emeklilik'+'  '+yearofRetired)


console.log (typeof firstname);
let zanoran=100;
let zam=100;
console.log(9000+zam);
var zammiktari=String(zam);//Data casting islem ile number bir datayi string olraak tanimladik

console.log(typeof zam)//Number
console.lo(typeof zam)// string

