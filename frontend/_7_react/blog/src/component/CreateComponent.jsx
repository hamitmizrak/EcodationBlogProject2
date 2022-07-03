import React, { Component } from 'react'

// private Long employeeId;
// private String employeeName;
// private String employeeEmail;
export default class CreateComponent extends Component {
    constructor(props) {//constructor
        super(props)

        //state
        this.state = {//son durum
            employeeName: "",
            employeeEmail: ""
        }

        //bind
    }



    // tasarım
    render() {
        return (
            <>
                <h1 className="display-3 text-center mt-5 ">Müşteri Ekle</h1>
                <div className="container">
                    <div className="row">
                        <div className="form-group">
                            <label >Adı</label>
                            <input type="text" className="form-control" placeholder='Müşteri Adı' />
                        </div>

                        <div className="form-group mt-3 mb-3">
                            <label >Email</label>
                            <input type="text" className="form-control" placeholder='Müşteri Email' />
                        </div>
                        <div className="mt-3 mb-3 d-inline">
                            <button type="reset" className=" btn btn-danger me-3" placeholder='Müşteri Email'> Temizle </button>
                            <button type="submit" className=" btn btn-primary" placeholder='Müşteri Email'> Gönder </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
