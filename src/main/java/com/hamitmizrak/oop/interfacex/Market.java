package com.hamitmizrak.oop.interfacex;

public class Market implements IDeneme{

    @Override
    public void urunSec() {
        System.out.println(degisken);
    }

    @Override
    public int urunOde(int sayi, int sayi2) {
        govdeliMethod();
        return 0;
    }

    @Override
    public String urunAl() {
        return null;
    }

    public static void main(String[] args) {
        Market market=new Market();
        market.urunSec();
    }
}
