// single-line comment
/* multi-line comment */

//çıktı
// window.alert("Pop-up");
// alert("Pop-up");
// console.log("Console yani software level");
// document.write("Html çıktısı");

// let tipo1={};
// console.log(typeof tipo1)

//instanceof
// let dizi4=["Java","Html","Css"];
// console.log(dizi4 instanceof Array)
// console.log(dizi4 instanceof Object)

//variable
//var deneme;
// deneme="JavaScript dersi";
// deneme=3>1;
//deneme=44;
//alert(deneme)

// whoisting
// deneme="JavaScript dersi";
// var deneme;
// alert(deneme);

//syntax: ister çift tırnak ister tek tırnak backtick
// " " ==> çift tırnak
// ' ' ==> tek tırnak
// ` ` ==> backtick

// var kelime="Javascript";
// var tamsayi=44;
// var virgulluSayi=44.52;
// var object={};
// var dizi=[];

//variable syntax(common rules)
// var kelime=44;
// var kelime12=44;
// var $55kelime12=44;
// var _55kelime12=44;
// var kelime_diger=44;
//var sayisalTeknoloji;//camel case

//hata
// var 55kelime12=44;
// var kelime-diger=44;
// var +55kelime12=44;
// var ~55kelime12=44;

// let isim="Hamit"; //string,number,boolean
// let dizi=[]; //dizi
// let object={}; //obje
/*
""
''
``
*/

///////////////////////////////////////////////////////////////////
//operatörler
//logic operators      => ||=> veya     &=ve
//mathematics operator => + - * / %=bölümünden kalan
//comparison operator  =>  >  >=  <  <=   ==  ===(type)
//increment x++  ++x
// var docum=( 6+3*5+3-6/6);
// document.write(docum)

//typeof: değişken türü nedir
// var variable=44;
// var variable=34.55;
// var variable="merhabalar";
// var obj={};
// var dizi=[];
// document.write(typeof obj)
//////////////////////////////////////////////////////////////////
//prompt: kullanıcıdan veri almak istediğimizde kullanıyoruz.
//prompt: dönüş değeri string'tir
// var sonuc=prompt("Lütfen adınızı giriniz");
// console.log(sonuc)

// var sayi1,sayi2,toplam=0;
// sayi1=Number(prompt("Lütfen 1.sayıyı giriniz")) ;
// sayi2=Number(prompt("Lütfen 2.sayıyı giriniz")) ;
// toplam=(sayi1+sayi2);
// console.log(toplam);

//string'i ==> sayıya çevirmek ==>  Number();
//sayıyı   ==> String çevirmek ==>  String();

//////////////////////////////////////////////////////////////////

// //undefined:tanımsız
//  var deneme;
// console.log( deneme)

// //NaN: Not a Number
// var result=4/"asd";
// console.log(result)

// //Infinity
// var infinite=9/0;
// console.log(infinite);

// // new
// // hafızada bir değer oluşturmak

// // null: olan hafızayı yok etmek
// var kelime=null;
// console.log(kelime)

// // this
// // nesneyi referans etmek

//////////////////////////////////////////////////////////////////
//escape character
// console.log("  \"  ")
// console.log('  \'  ')
// console.log("  '  ")
// console.log("  ``  ")
// console.log('  "  ')

/////////////////////////////////////////////////////////////////

//revize keyword : for, while,let,const,function değişkende kullanamazsınız
// var function=44;
// console.log(function)

/////////////////////////////////////////////////////////////////
//Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.max(5,1,5,2,9,12222));
// console.log(Math.min(5,1,-545,2,9,12222));
// console.log("karekök: "+Math.sqrt(16));
// console.log("mutlak: "+Math.abs(-16));
// console.log("üst: "+Math.pow(2,5))
// console.log(Math.floor(12.9));
// console.log(Math.ceil(12.1));
// console.log(Math.round(4.4));
// console.log(Math.round(4.5));

// //undefined
// var deneme;
// console.log(deneme)

// //NaN
// var deneme2=4/"asd";
// console.log(deneme2)

// //inifinity
// var deneme3=4/0;
// console.log(deneme3)
//escape \

///Random:rastgele
// console.log( Math.round(Math.random()*4+1));

//kullanıcıdan alınan iki sayıda (prompt,Number()) dört işlem yapacak
//iki sayı arasındaki en büyük sayının karekökü,mutlak değeri
//küçük sayı taban: büyük sayı üst olacak şekilde pow yapacağız

/////////////////////////////////////////////////////////////////
//SAYILAR
// var sayi1=44;
// var sayi1=44.56;
// var bilimselGosterim=412e+2;
// var bilimselGosterim=412e-2;
// console.log(bilimselGosterim)

// //başka tabanları => 10'a çevirmek
// //hexadecimal:16 tabanlı : 0123456789ABCDEF
// var hex=0xFF;
// console.log(hex)
// //output: 255

// //hexadecimal:16 tabanlı : 0123456789ABCDEF
// var bina=0b11;
// console.log(bina)
//output:3

// console.log("**************************************")
//10'luk tabandaki başka tabanlara çevirmek
// var decimal=44;
// console.log(decimal.toString(2));
// console.log(decimal.toString(8));
// console.log(decimal.toString(10));
// console.log(decimal.toString(16));

// var varible=44;
// console.log(Number(varible)+16) //sayıya çevir
// console.log(String(varible)+16) //String'e çevir

//NaN
// console.log(15/"asd")

//isNaN = bu sayı değil mi  ?
// var sayiMi=44;
// console.log(isNaN(sayiMi));

/////////////////////////////////////////////////////////////////
//KELİME

//kelime=" Enum collection Data structure primitive TYPe "

//Java ile JavaScript aynı method , function
// var kelime="http html5 CSS3 Js javase html5";
// kelime=String(kelime);

// console.log("karakter sayısı: "+kelime.length);
// console.log("Trim sayısı: "+kelime.trim().length);

// console.log("http ile mi başlıyor: "+kelime.startsWith("http"));
// console.log("javase ile mi bitiyor: "+kelime.endsWith("javase"));

// console.log("sona ekle "+kelime.concat(" -INC"));

// console.log(kelime.toUpperCase());
// console.log(kelime.toLowerCase());

// console.log("baştan arama "+kelime.indexOf("html5"));
// console.log("sondan "+kelime.lastIndexOf("html5"));

// console.log(kelime.charAt(0));

// console.log(kelime.replace(kelime,"frontend"));

// console.log(kelime.substring(1)); //sıfırdan başlar
// console.log(kelime.substring(1,6)); //sıfırdan başlar 1<=x<=5-1

// indexOf,lastIndexOf,search ==> arama için kullanıyoruz.
//  search daha ayrıntılı ve filtreleme yaparak arama işlemi yapar
//  var searchValue="Script script Script";
//  console.log(searchValue.indexOf("Script"))
//  console.log(searchValue.lastIndexOf("Script"))

//  console.log(searchValue.search("Script"));
//  console.log(searchValue.search("script"));
//  console.log(searchValue.search(/script/)); //case-sensitive
//  console.log(searchValue.search(/script/i)); //non-case-sensitive
//  console.log(searchValue.search("Java")); //olmayan değerlerde -1 döner

// slice,substring,substr
// charAt,charCodeAt

//stringify: objeyi String'e çevirmek
// var obje={"adi":"Hamit"};
// console.log(obje);

// var objeyistringeCevirdim=JSON.stringify(obje);
// console.log(objeyistringeCevirdim.substring(8,13));

// //parse: String'i Objeye çevirmek
// var stringObjeyeCevirdim=JSON.parse(objeyistringeCevirdim);
// console.log(stringObjeyeCevirdim);

///////////////////////////////////////////////////////////////////////////////
//Fonksion
//returnsuz parametresiz function
// function toplama1(){
//     var sayi1=10,sayi2=20,sonuc=0;
//     sonuc=sayi1+sayi2;
//     console.log(sonuc);
// }
// toplama1()

//returnsuz paramereli function
// function toplama2(sayi1,sayi2){
//     var sonuc=0;//toplama sıfır
//     sonuc=sayi1+sayi2;
//     console.log(sonuc);
// }
// toplama2(10,20);

// //returnlu parametresiz function
// function toplama3(){
//     var sayi1=10,sayi2=20,sonuc=0;
//     sonuc=sayi1+sayi2;
//    return sonuc;
// }
//  var toplamValue=  toplama3();
//  console.log(toplamValue)

//  //returnlu parametresiz function
// function toplama4(sayi1,sayi2){
//     sonuc=sayi1+sayi2;
//     var sonuc;
//    return sonuc;
// }
//  var toplamValue2=  toplama4(10,20);
//  console.log(toplamValue2)

//javascript senkron mu asenkron mu ?

///////////////////////////////////////////

//  //normal
//  function deneme1(){
//      console.log("normal function")
//  }
//  deneme1();
//
//  //anonymous function
//  var sonuc1= function (){
//     console.log("anonymous function")
// }
// sonuc1();
//
// //arrow function
// var sonuc2=  ()=>{
//     console.log("arrow function")
// }
// sonuc2();

//Immedia function
//()()
// (()=>{
//     //console.log("normal function")
// })();

///////////////////////////////////////////
//loop
//console.log(1+2+3+4+5+6+7+8+9+10+11+12+13+14+15)

//  //for
//  function donguFor (){
//     let sum=0;
//     //iterative for
//     for (let i = 1; i <= 10; i++) {
//         //sum=sum+i;
//         sum+=i;
//     }
//     console.log("toplam for: "+sum);
//  }
//  donguFor()

//   //while
//   function donguWhile (){
//     let sum=0;
//     let i = 1;
//     //iterative for
//     while ( i <= 10) {
//         //sum=sum+i;
//         sum+=i;
//        i++
//     }
//     console.log("toplam while: "+sum);
//  }
//  donguWhile()

//for while arasındaki farklar nelerdir ?

///////////////////////////////////////////
//conditional
// '44' ==> string
//  44  ==> number
// let number1 = () => {
//   const number = '44' //string
//   if (number == 44) {
//     console.log('aynı sayıdır')
//   } else {
//     console.log('farklı sayıdır')
//   }
// }
// number1()
// console.log("************************")

// let number2 = () => {
//   const number = '44' //string
//   if (number === 44) {
//     console.log('aynı sayıdır')
//   } else {
//     console.log('farklı sayıdır')
//   }
// }
// number2()
// console.log("************************")

// //ternary
// let number3 = () => {
//   const number = '44' //string
//   let result =number === 44 ? console.log('aynı sayıdır') : console.log('farklı sayıdır')
// }
// number3()

/////////////////////////////////////////////////////////
//1-50 arasındaki sayılar olsun (dahil)
//s1-) 1-50 sayıları toplayalım ?
//s2-) ancak sayılardan sadece 5 sayının eklemesin
//s3-) revize bu sayıları sadece 1-15 arasında olması gerekiyor
//s3-) bu sayılardan 5' bölünebilenleri çıkartın
//if , for, break, continue
//function
//1-2-3-4-5-6-7-8-9-10-11-12-13-14-15
// function isSum() {
//   let sum = 0//function scope
//   for (let i = 1; i <= 50; i++) {//for
//       if(i%5===0){//if  %
//           continue;//sadece o döngüde çalışmasın sonra devam etsin
//       }
//       if(i===16)
//       break;
//     sum += i
//   }
//   console.log(sum)
// }
// isSum()
// //console.log(1+2+3+4+5+6+7+8+9+10+11+12+13+14+15) //120
// console.log(1+2+3+4+6+7+8+9+11+12+13+14) //90

/////////////////////////////////////////////////////////
//"use strict"
//public,private,static,class,let,const,implements,extends izin verilmiyor

/////////////////////////////////////////////////////////
// let isNowDate=function(){
//     let tarih=new Date();
//     console.log("full tarih"+tarih)
//     tarih.setFullYear("1966")//set: yazmak değiştirmek
//     console.log("yıl: "+tarih.getFullYear())//get çağırmak
//     console.log("gün: "+tarih.getDay())//pazartesi=0 salı=1 çarşamba=2
//     console.log("saat: "+tarih.getHours())
//     console.log("dakika: "+tarih.getMinutes())
//     console.log("********************")
// }
// isNowDate()

//Function: date objesinden yılı eğer 2000 üstünde ise milenyum yılı yoksa milenyum değil yazdırsın
//keyword:if-else ,new Date()

// function dateMilenium(){
//     console.log((new Date().getFullYear()>=2000) ? "Milenyum(+)" : "Milenyum(-)")
// }
// dateMilenium()

///////////////////////////////////////////////////////////////////
//Örnek-1
//y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

// Çözüm:
// var x= Number(prompt("lütfen x değerinii giriniz"));
// var k= Number(prompt("lütfen k değerinii giriniz"));

// var result= birinciDerecedenDenklem(x,k);
// document.write(result);

// function birinciDerecedenDenklem(x,k){
//   return 3*x+4*k;
// }

//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.

// Çözüm:
//var derece= Number(prompt("lütfen derece değerini giriniz"));
//var result= derecedenFahranhayta(derece);
////document.write(result);
//function derecedenFahranhayta(x){
//return (x*9/5)+32
//}
// (derece*9/5)+32

//örnek-3 operatör
//4+3*2(3:3-1*6+9:1+(3:3)) hesaplayalım
//4+3*2*(3:3-1*6+9:1+(3:3))
//var value= 4+3*2*(3/3-1*6+9/1+(3/3));
//document.write(  value    );

//örnek-4 Math
// Soru: -5.9 sayısını aşağıdaki işlemleri yapalım
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın  6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
// 9-) çıkan sonucu üslü göstersin  4 ^ 4 = 4 * 4 * 4 *4

//Çözüm:
//var numberValue= Number( prompt("lütfen bir sayı giriniz")   );
// var numberValue,changeNumberValue1,changeNumberValue2,numberCompare;
// numberValue= -5.9;  //Number( prompt("lütfen bir sayı giriniz")   );
// allNumber(numberValue);
// function allNumber(changeNumberValue1){
//   changeNumberValue1= Math.round(Math.sqrt(Math.pow(Math.round(Math.abs(numberValue)) ,2)))    ;
//   document.write(changeNumberValue1);
//
//   changeNumberValue2=  Math.round(changeNumberValue1/5) ;
//   document.write(changeNumberValue2);
//
//   if(changeNumberValue1<changeNumberValue2){
//     numberCompare=changeNumberValue1;
//   }else{
//     numberCompare=changeNumberValue2;
//   }
//   document.write(" en küçüğü: "+numberCompare)
//
//   //çift sayı
//   if(numberCompare%2==0){
//     numberCompare=numberCompare+5;
//   }else{
//     numberCompare=numberCompare+3;
//   }
//
//   document.write(" tek çift: "+numberCompare)
//
//   document.write("sonuc: "+Math.pow(numberCompare,numberCompare))
// }

//Soru verilen bir sayının negatif mi pozitif mi algoritma

//Çözüm
// var value= -4;
// if(value<0){
//   document.write(value+" sayısı negatif");
// }else{
//   document.write(value+" sayısı pozitif");
// }

// Soru
// kullanıcının girdiğini sayıya kadar olan sayılardan; ==>> 1<=X<=kullanıcıgirdiğisayı
//kaçtane sayı var
//bu sayılardan kaç tane tek sayı var
//bu sayılardan kaç tane çift sayı var
//bu sayıların toplamı

//Çözüm
// var sayi=5;
// var sayiAdeti=0,ciftSayi=0,tekSayi=0,toplam=0,ortalama=0;
// // 1 2  3 4 5
// for(var i=1; i<=sayi; i++){
//   sayiAdeti++;
//   if(i%2==0){
//     ciftSayi++;
//   }else{
//      tekSayi++;
//   }
//   toplam+=i;
// }

// ortalama=toplam/sayiAdeti;

// document.write("kaçtane sayı: "+sayiAdeti+" kaç tane tek sayı: "+ tekSayi+" kaç tane çift sayı: "+ ciftSayi)
// document.write(" toplam: "+toplam+" ortalaması:"+ortalama)

//Soru: kullanıcı tarafından girilen iki değişkenin birbirine eşit olup olmadığını bulan algoritma

//Çözüm:
// function deneme(){
//     while (true) {
//     var password = prompt("lütfen şifre giriniz");
//     var rePassword = prompt("lütfen şifreyi tekrar giriniz");

//     if (password === rePassword) {
//       document.write("teşekkürler aynı şifre");
//       break;
//     } else {
//       document.write("farklı şifre tekrar giriniz");
//     }
//   }
// }

// deneme()

//Date objesinden haftanın hangi gün olduğunu bulan algoritma ?
//Not: Pazartesi:0 Pazar:6

//Çözüm
// var gun =new Date().getDay();
// //document.write(gun);

// switch (gun) {
//   case 0:
//     document.write("pazar");
//     break;
//   case 1:
//     document.write("pazartesi");
//     break;
//   case 2:
//     document.write("salı");
//     break;
//   case 3:
//     document.write("çarşamba");
//     break;
//   case 4:
//     document.write("perşembe");
//     break;
//   case 6:
//     document.write("cumartesi");
//     break;

//   case 5:
//     document.write("cuma");
//     break;
//   default:
//     document.write("farklı sayı girildi böyle bir gün yoktur");
//     break;
// }

// function result() {
//   var numberValue = 4

//   //ternary
//   let val = numberValue != 4 ? console.log('4 değil') : console.log('4')
//   console.log(val)

//   //
//   if (numberValue != 4) {
//     console.log('4 değil')
//   } else {
//     console.log('4 ')
//   }

//   //if elseif elseif else
//   var numberValue2 = 8
//   if (numberValue2 == 1) {
//     console.log('1')
//   } else if (numberValue2 == 2) {
//     console.log('2')
//   } else if (numberValue2 == 3) {
//     console.log('3')
//   } else if (numberValue2 == 4) {
//     console.log('4')
//   } else if (numberValue2 == 5) {
//     console.log('5')
//   } else if (numberValue2 == 6) {
//     console.log('6')
//   } else if (numberValue2 == 7) {
//     console.log('7')
//   } else {
//     console.log('8')
//   }

//   //switch case
//   switch (numberValue2) {
//     case 1:
//       console.log('1')
//       break

//     case 2:
//       console.log('2')
//       break

//     case 3:
//       console.log('3')
//       break

//     case 4:
//       console.log('4')
//       break

//     case 5:
//       console.log('5')
//       break

//     case 6:
//       console.log('6')
//       break

//     case 7:
//       console.log('7')
//       break

//     default:
//       console.log('8')
//       break
//   }
// }
// result()


// let isDebugging=()=>{
//     var sayi1=1;
//     var sayi2=2;
//     var sayi3=3;
//     var toplam=sayi1+sayi2+sayi3;
//     console.log(toplam)
// }
// isDebugging()

////////////////////////////////////////////////////////////

//// try{
//     let sayi=3/0;
// console.log(sayi)
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }

// console.log("diğer satır")

// try{
//     denmee
// }catch(err){
//     alert(err.name)
//     alert(err.message)
//     alert(err.stack)
// }finally{
//     console.log("database.close()")
// }

////////////////////////////////////////////////////////////
//debug: hata ayıklama
// function isDebugging(){
// let sayi1=5;
// let sayi2=10;
// let sayi3=15;
// let sum=sayi1+sayi2+sayi3;
// console.log(sum)
// }
// isDebugging()
////////////////////////////////////////////////////////////
//Dizi
// let dataArray=[4,5,6,12,"Hamit",true];
// //dizi son eleman
// console.log(dataArray[5])
// console.log(dataArray[dataArray.length-1])
// console.log("********************")
// console.log(dataArray)

// //dizinin ilk elemanın karekökü ?
// console.log(Math.sqrt(dataArray[0]))

// function arrayMethod(){
// let dataArray=[10,20,30,40,50];
// console.log(dataArray)
// let sum=0,averageData=0;
// for (let i = 0; i < dataArray.length; i++) {
//  //console.log(dataArray[i])
//  sum+=dataArray[i]
// }
// console.log(sum)
// console.log(sum/dataArray.length)
// }
// arrayMethod()

//dizi metotları
// let arr=[10,20,30];
// arr.push(40); //sona ekleme
// arr.unshift(5);//başa ekleme

// arr.pop(); //sondan 1 eleman çıkartır
// arr.shift(); //baştan 1 eleman çıkartır

/////
// //iterative for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// console.log("******************")
// //for in: sadece indisi verir
// for( temp in arr ){
// console.log(temp+". ci indis değeri: "+arr[temp])
// }
// console.log("******************")

// //for of
// for( temp of arr  ){
//     console.log(temp)
// }

///////
// let arr=[10,20,30];
// arr.push(50);
// //1.elemanda diziyi sil
// delete arr[1]
// for( temp of arr  ){
//     console.log(temp)
// }

//sort:küçükten büyüğe doğru sıralar
// let arr=[50,10,25,1,99];
// let sortedArray=arr.sort();
// for( temp of sortedArray  ){
//     console.log(temp)
// }

//reverse:büyükten küçüğe doğru sıralar
// let arr=[50,10,25,1,99];
// let sortedArray=arr.reverse();
// for( temp of sortedArray  ){
//     console.log(temp)
// }

// let arr=[1,2,3];
// let joinArray=arr.join("*");
// for( temp of joinArray  ){
//     console.log(temp)
// }

// let arr=[1,2,3];
// console.log(arr)

// let stringData=arr.toString();
// console.log(stringData)

//////////////////////////////////////////////////////////////////
// let dizi=["Html5","Css3","Responsive Design","Javascript"];
// dizi.push("jquery");
// dizi.unshift("Git");
// console.log(dizi);
// console.log(dizi[0]);
// console.log(dizi[dizi.length-1]);

// console.log("*************")
// //iterative for
// for (let i = 0; i < dizi.length; i++) {
//     //console.log(dizi[i]);
    
// }

// //for in : numara + data
// for(let temp in  dizi  ){
// //console.log(temp+". "+dizi[temp])
// }

// //for of : data
// for(let temp  of  dizi ){
// //console.log(temp)
// }

// let dizi=[0,1,2,3,4,5,6,7,8,9];
// //splice

// dizi.splice(3)
// //verdiğimiz indis numarasında itibaren siler
// //output: 0 1 2 

// dizi.splice(3,2);
// //dizideki eleman aralığı silmek
// //3: başlama indisi
// //2: silinecek eleman sayısı
// //output:0 1 2 5 6 7 8 9 

// dizi.splice(0,3,66);
// // //ekleme-güncelleme: 
// // //0:silinecek başlama indisi
// // //3:silinecek eleman sayısı
// // //66: silindikten sonra görülecek
// //output: 66 3 4 5 6 7 8 9 

// dizi.splice(0,0,66)
//başına ekler

// for (let i = 0; i < dizi.length; i++) {
//     console.log(dizi[i])
//     document.write(dizi[i])
//  }

//let dizi=["Html5","Css3","Responsive Design","Javascript"];

//join:dizideki her bir elemanın sonuna eklemek
//document.write(dizi.join("+"))

//concat: sadece son elemana + eklensin
//document.write(dizi.concat("+"));

//toString(): diziyi String'e çevirir
//document.write(dizi.toString())

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//normal
// function normal1(sayi1,sayi2){
//     return sayi1*sayi2;
// }

// function normal2(){
//     console.log(normal1(4,6));
// }
// normal2()

// //callbackfunction
// function call1(sayi1,sayi2,deneme){
//     let multiple=sayi1*sayi2;
//     deneme(multiple)
// }

// function call2(multiple){
//     console.log(multiple)
// }

// call1(4,6,call2)

///////////////////////////////////////////////////////////////
// let person={
//     "adi":"Hamit",
//     "soyadi":"Mızrak",
//     "isLogin":true,
//     "meslek":"Bilgisayar Müh",
//     "teknolojiler":["java","mysql","h2db"],
//     "fullSoftware":function(){
//     return this.database.toUpperCase().concat(" ")+this.frontend.toUpperCase();
//     },
//     "java":{
//         "db":"h2db",
//         "javaee":["servlet","JSP","JSF"]
//     }
// };
// console.log(person)

// const software={
//     "database":"Mysql",
//     "frontend":"Html",
//     "backend":["Python",'C#',"Java"],
//     "fullSoftware":function(){
//         //objede isem ve datalara erişmek istersem this kullanmalıyım
//         return this.database.toUpperCase().concat(" ")+this.frontend.toUpperCase();
//         },
//     version:{
//         "name":"adi1",
//         "date":"2022"
//     }    
// }
// console.log(software);
// console.log(software.database);
// console.log(software.fullSoftware());

// //object create attributes added
// software.mobillang="flutter";
// console.log(software);

// console.log("***************")
// //object delete attribues
// delete software["frontend"]
// console.log(software);

// console.log("***************")
// //nested object
// console.log(software.version.name)

// //array
// console.log(software.backend[1])

//Teacher

////////////////////////////////////////////////
// let student={};
// console.log(student)

//parametreli constructor
function Student(adi,soyadi,yas){
this.adi=adi;
this.soyadi=soyadi;
this.yas=yas;
console.log(this);
this.dogumTarihi=function(){
   return new Date().getFullYear()-yas;
}
}

let result55=new Student("Ahmet","Yerli",37);
//console.log(result55.dogumTarihi())

//event
function eventNowDate(){
    alert("Tıklandı")
}

//DOM
function  domEvent(){
    document.getElementById("dom_id").innerHTML="<b><mark>Ben Dom</mark>  </b>";
}
