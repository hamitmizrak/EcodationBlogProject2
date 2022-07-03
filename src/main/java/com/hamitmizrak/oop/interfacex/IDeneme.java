package com.hamitmizrak.oop.interfacex;

// interface:
// arayüz anlamına gelir
// Bize çoklu kalıtım gibi davranmak için yardımcı olur
// keyword ==> implements  (birden fazla kullanabiliriz.)
// birden fazla kullanabiliriz.
// Gövdeli ve gövedesiz metot oluşturabiliriz.
// Gövdeli metot için başına default yazmalıyız.
// Sözleşmedir sonrasında sözleşmeyi yerine getiririz.

// private protected veremeyiz.
// sabit değişken verebiliriz.(Const)
// public final static int degisken=99;


public interface IDeneme {
    public final static int degisken=99;

    //gövdesiz metot deriz
    public void urunSec();
    public int urunOde(int sayi,int sayi2);
    public String urunAl();

    //gövdeli metot için
    default String govdeliMethod(){
        return "gövdeli metotudum";
    }
}
