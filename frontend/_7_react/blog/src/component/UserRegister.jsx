//     class                      dependency
import React, { Component } from 'react';
import axios from 'axios';

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
            readed: false
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

        //2.YOL (destructing)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    //submit button
    onClickUserSubmit = (event) => {
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

        axios.post(URL, BODY);
    }

    //render:gün yüzene çıkarmak 
    render() {
        return (
            <>
                <h1 className="text-center mt-4 mb-3 text-center text-warning text-display-3">Login Register</h1>
                <div className="container">
                    <div className="row">
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="userName">Adı</label>
                                <input onChange={this.onChangeClick} name="userName" id="userName" type="text" className="form-control" placeholder="userName ..." />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="userSurname">Soyadı</label>
                                <input onChange={this.onChangeClick} name="userSurname" id="userSurname" type="text" className="form-control" placeholder="userSurname ..." />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="userPassword">Password</label>
                                <input onChange={this.onChangeClick} name="userPassword" id="userPassword" type="text" className="form-control" placeholder="user Password ..." />
                            </div>

                            <div className="form-group mb-3">
                                <input type="checkbox" onChange={this.checkOnClickRead} />Read Me <br />
                                <button disabled={!this.state.readed} onClick={this.onClickUserSubmit} type="submit" className="btn btn-primary" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

