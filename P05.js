//Array icersinde data barindiran bir dizidir.
let meyveler =['avacado','Mango','Ananas','Kayisi','Kavun'];
console.log(meyveler);
console.log(meyveler[1]);

//push  methodu array sonuna yeni elaman ekliyor

meyveler.push('Acai')
console.log(meyveler);

//popmethodu dizinin sonundaki ogeyi kaldirip kaldirdigi ogeyi yazdiririr

meyveler.pop();
console.log(meyveler);

//shift (): dizinin basindaki index deki elamani siler console icine yazilirsa kaldirdigi elamani yazdirir


meyveler.shift();
console.log(meyveler);

// unshift () : dizinin  basina yeni elaman eklemek icin 

meyveler.unshift('Yaprak Sarma');
console.log(meyveler);

meyveler.splice(0,1,'Kiwi','Kiraz');
console.log(meyveler)

var arabalar=['Renault','Tofas','Opel']
console.log(meyveler+arabalar)
