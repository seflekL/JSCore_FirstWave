//operatorler
let x= 235
let y=13;

console.log (x+y);
console.log (x-y);
console.log (x/y);
console.log (x*y);
console.log (x%y); 

console.log('-------------------------');
console.log(x==y);// false
console.log(x!=y);//t   
console.log(x>y);//t
console.log(x<y);//f
console.log(x<=y);//f
console.log(x>=y);//t

let sayi1=100;
let sayi2=String (100);

console.log(sayi1==sayi2); // sadece edegere bakar bu yuzden turu ilgenezmez true gelir 
console.log(sayi1===sayi2);// false gelicek 3 esittir de turlerde eist olmasi lazim


let a=10;
console.log(a); //sonuc a
a+=4;
console.log(a);//14
a-=5;
console.log(a);
a*=3;
console.log(a);//9
a/=-3;
console.log(a);
a%=6;
console.log(a);