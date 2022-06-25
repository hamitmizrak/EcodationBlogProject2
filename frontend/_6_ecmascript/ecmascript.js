/* ES5: bütün browserda çalıssın */
// "use strict" private public static T.S.

//function(ES5)
//+++++++++++++
var es5Function = function () {
    console.log("es5 anonymous function");
}
es5Function();

//Class (ES5)
//++++++++++++++
var temp = function Student(adi, soyadi) {
    this.adi = adi;
    this.soyadi = soyadi;
    console.log(this);
}
var result = new temp("Ayşe", "Var");

//Diziler ==> map,filter
var product = [
    {
        productName: "Msi1",
        productPrice: 1000,
    },
    {
        productName: "Msi2",
        productPrice: 2000,
    },
    {
        productName: "Msi3",
        productPrice: 3000,
    }
];

//map-5
var es5Map = product.map(function (temp) {
    return temp.productName.toUpperCase();
})
console.log(es5Map)

//filter-5
var es5Filter = product.filter(function (temp) {
    return temp.productPrice >= 2000;
})
console.log(es5Filter)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//ES6; let,const,literal template,arrow function,destructing,promise
//function(ES6)
//+++++++++++++
let es6Function = () => {
    console.log("es6 anonymous function");
}
es6Function();


//Class (ES6)
//++++++++++++++
class Es6Class {
    //constructor
    constructor(adi, soyadi) {
        this.adi = adi;
        this.soyadi = soyadi;
    }

    //metot
    message(data) {
        return `mesajım: ${data} : ${this.adi}`
    }
}

let result2 = new Es6Class("Erdem", "Yıl");
console.log(result2)
console.log(result2.message("Nasılsın"))


class Kopyaci extends Es6Class {

}
let result3 = new Kopyaci("İsa", "Kaya");
console.log(result3)


//+++Diziler
//map-6
let es6Map = product.map(temp => {
    return temp.productName.toUpperCase();
})
console.log(es6Map)

//filter-6
let es6Filter = product.filter((temp) => temp.productPrice % 2 == 0)
console.log(es6Filter)

//destructuring
let x, y;
[x, y] = [5, 9];
console.log(x + y)
//
// x=5;
// y=9;
// console.log(x+y)
const serverInformation = ["localhost", "3000", "8080"];
const [deneme1, deneme2, deneme3] = serverInformation;
console.log(deneme1)