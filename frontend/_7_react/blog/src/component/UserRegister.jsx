import React, { Component } from 'react';

//statefull: class component state kullanıyorsak 
//stateless: function component
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

    //ReadMe
    checkOnClickRead = event => {
        this.state.readed = event.target.checked;
        console.log(this.state.readed)
        this.setState({ readed: event.target.checked })
    }

    //input
    onChangeClick=event =>{
        //event.target.value;
        console.log(event.target.value);
        this.setState({ userName:event.target.value})
    }

    //submit button
    onClickUserSubmit = (event) => {
        //browserda tetiklenme olmadan burası çalışsın
        event.preventDefault();
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
                                <input name="userSurname" id="userSurname" type="text" className="form-control" placeholder="userSurname ..." />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="userPassword">Password</label>
                                <input name="userPassword" id="userPassword" type="text" className="form-control" placeholder="user Password ..." />
                            </div>

                            <div className="form-group mb-3">
                                <input type="checkbox" onChange={this.checkOnClickRead} />Read Me <br />
                                <button onClick={this.onClickUserSubmit} type="submit" className="btn btn-primary" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

