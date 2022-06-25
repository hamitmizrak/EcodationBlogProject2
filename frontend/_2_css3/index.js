import React, { Component } from 'react'

// console.log(React.Component);
//Unutma classta this demen gerekiyor
export default class HeaderClass extends Component {

    //eğer bind işlemi yapmak istersek;
    //constructurta props sakldıır ve  props almak için constructor kullanılır.
    constructor(props){
        super(props);
        this.denemeMethod=this.denemeMethod.bind(this);
    }

    denemeMethod(){
        console.log(this+" bind yapmadığım için undefined gelecektir");
        console.log(this.adi);
        console.log(this.props.adi); //bind için
        console.log("Butona tıklandı")
    }

    //onSubmit'te props gerek yok yani constructor yazmamaıza gerek yok
    onSubmitMethod(e){
        alert("on submit")
        e.preventDefault();
        // let item=e.target.elements.input_veri;
        let item=e.target.elements.input_veri.value;
        let item=e.target.elements.input_veri.value.trim;
        console.log(item)
    }
    render() {
        //objeceden geldiği için this diyoruz
        //console.log(this.props)
        return (
            <div>
                <form onSubmit={this.onSubmitMethod}>
                    <h1 className="text-center text-primary">Header</h1>
                    <p>{this.props.adi}</p>
                    <p>{this.props.soyadi}</p>
                    <p>{this.props.tarih}</p>
                    <input type="text" name="input_veri" />
                    <button onClick={this.denemeMethod}>On Click</button>
                </form>
            </div>
        )
    }
}
