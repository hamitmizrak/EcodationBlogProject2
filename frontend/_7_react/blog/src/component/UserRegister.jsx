//     class                      dependency
import React, { Component } from 'react';
import axios from 'axios';
import DataInput from './DataInput';

//statefull: class component state kullanıyorsak 
//stateless: function component
// npm i bootstrap
// npm i node-sass
// npm i axios
export default class UserRegister extends Component {
    //bu class oluşturulduğunda ilk çalışacak data
    constructor(props) {
        super(props);

        //state default veriler ve bu veriler son halini tutan objedir
        this.state = {
            userName: null,
            userSurname: null,
            userPassword: null,
            userRePassword: null,
            readed: false,
            passiveButtonSubmit: false,
            apiError: {}
        }
    }

    //ReadMe checkbox
    checkOnClickRead = event => {
        this.state.readed = event.target.checked;
        console.log(this.state.readed)
        this.setState({ readed: event.target.checked })
    }

    //input gelen verileri almak ve setState set etmek
    onChangeClick = event => {
        //1.YOL
        //const name=event.target.name;
        //const value=event.target.value;

        //undefined: tanımsız demektir.

        //2.YOL (destructing)
        const { name, value } = event.target;
        const cloneObject = this.state.apiError;
        cloneObject[name] = undefined;

        //PASSWORD -REPASSWORD
        if (name === "userPassword" || name === "userRePassword") {
            if (name === "userPassword" && value !== this.state.userRePassword) {
                cloneObject.userRePassword = "Şifreler birbirine uymuyor"
            } else if (name === "userRePassword" && value !== this.state.userPassword) {
                cloneObject.userRePassword = "Şifreler birbirine uymuyor"
            } else {
                cloneObject.userRePassword = undefined;
            }
        }

        this.setState({
            [name]: value,
            cloneObject
        })
    }

    //javascript single thread yani senkron çalışır ancak biz asenkron(aynı anda birden iş)
    //submit button: promise function 
    //async await
    onClickUserSubmit = async (event) => {
        //browserda tetiklenme olmadan burası çalışsın
        event.preventDefault();

        //axios.post(URL,body);
        const URL = "/api/v1/users";

        //1.YOL
        // const BODY={
        //     userName:this.state.userName,
        //     userSurname:this.state.userSurname,
        //     userPassword:this.state.userPassword,
        // }

        //2.YOL
        const { userName, userSurname, userPassword } = this.state
        // const BODY = {
        //     userName: userName,
        //     userSurname: userSurname,
        //     userPassword: userPassword,
        // }

        //3.YOL
        const BODY = {
            userName,
            userSurname,
            userPassword,
        }
        // normal sürekli aynı anda submit butona kayıt edebiliyor ama doğru bir davranış değil
        //axios.post(URL, BODY)

        //aynı anda butona birden fazla basılmasına izin verilmesin
        //then ==> eğer post başarılıysa
        this.setState({
            passiveButtonSubmit: true
        })
        // axios.post(URL, BODY).then(response => {
        //         this.setState({
        //             passiveButtonSubmit: false
        //         })
        //     }).catch(error=>{
        //         this.setState({
        //             passiveButtonSubmit: false
        //         })
        //     });

        try {
            const response = await axios.post(URL, BODY);
        } catch (error) {
            console.log(error)
            if (error.response.data.validationData) {
                this.setState({
                    apiError: error.response.data.validationData
                })
            }
        }
        this.setState({
            passiveButtonSubmit: false
        })
    }

    //render:gün yüzene çıkarmak 
    render() {
        //
        const { apiError, passiveButtonSubmit } = this.state;
        const { userName, userSurname, userPassword, userRePassword } = apiError;
        return (
            <>
                <h1 className="text-center mt-4 mb-3 text-center text-warning text-display-3">Login Register</h1>
                <div className="container">
                    <div className="row">
                        <form>
                            {/* <div className="form-group mb-3">
                                <label htmlFor="userName">Adı</label>
                                <input onChange={this.onChangeClick} name="userName" autoFocus={true} id="userName" type="text" className="form-control  is-invalid" placeholder="kullanıcı adı " />
                                <div className="invalid-feedback">
                                    {userName}
                                </div>
                            </div> */}

                            <DataInput title="Adı" name="userName" type="text" onChangeClick={this.onChangeClick} error={userName} placeHolder="kullanıcı adı giriniz" />

                            <DataInput title="Soyadı" name="userSurname" type="text" onChangeClick={this.onChangeClick} error={userSurname} placeHolder="kullanıcı soyadını giriniz" />

                            <DataInput title="Password" name="userPassword" type="password" onChangeClick={this.onChangeClick} error={userPassword} placeHolder="kullanıcı şifresini giriniz" />

                            <DataInput title="Şifre Tekrarı" name="userRePassword" type="password" onChangeClick={this.onChangeClick} error={userRePassword} placeHolder="şifre tekrarını giriniz" />


                            <div className="form-group mb-3">
                                {/*
                                readme için
                                <input type="checkbox" onChange={this.checkOnClickRead} />Read Me <br />
                                 <button disabled={!this.state.readed} onClick={this.onClickUserSubmit} type="submit" className="btn btn-primary" >Submit</button>
                                 */}

                                {/* <button disabled={this.state.passiveButtonSubmit} onClick={this.onClickUserSubmit} type="submit" className="btn btn-primary" >Submit</button> */}

                                {/* spinner */}
                                <button disabled={passiveButtonSubmit || userRePassword !== undefined} onClick={this.onClickUserSubmit} type="submit" className="btn btn-primary" >
                                    {/* conditional render */}
                                    {/* 1.YOL: SPINNER:LOADING: ternary
                                    {this.state.passiveButtonSubmit ? <span class="spinner-border spinner-border-sm me-3"></span>:' '} */}
                                    {/* 2.YOL:SPINNER:LOADING */}
                                    {passiveButtonSubmit && <span className="spinner-border spinner-border-sm me-3"></span>}
                                    Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

