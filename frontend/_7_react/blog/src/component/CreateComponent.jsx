import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices';

//JAVA==>  private Long employeeId;
// private String employeeName;
// private String employeeEmail;
export default class CreateComponent extends Component {
    constructor(props) {//constructor
        super(props)
        //state
        this.state = {//son durum
            employeeId: this.props.match.params.employeeId,
            employeeName: "",
            employeeEmail: ""
        }

        //bind
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this); //input müşteri adı
        this.changeEmailHandler = this.changeEmailHandler.bind(this); //input müşteri email
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);//kaydetme veya ekleme button
        this.homepage = this.homepage.bind(this); //Anasayfaya gitmesini
    }

    //FUNCTION
    //input employeeName
    changeFirstNameHandler = (event) => {
        this.setState(
            {
                employeeName: event.target.value
            }
        );
    }

    //input employeeEmail
    changeEmailHandler = (event) => {
        this.setState(
            {
                employeeEmail: event.target.value
            }
        );
    }

    ////////////////////////////////////////////////
    //cancel
    cancel() {
        this.props.history.push('/employees')
    }

    //ana sayfa
    homepage() {
        this.props.history.push('/');
    }

    //Ekleme veya Güncelleme sayfası olacağını belirtir.
    titleDynamicsSaveOrUpdate() {
        if (this.state.employeeId === "_add")
            return <h1 className="display-3 text-center mt-5 ">Müşteri Ekle</h1>
        else
            return <h1 className="display-3 text-center mt-5 ">Müşteri Güncelle</h1>

    }

    ////////////////////////////////////////////////

    //Kaydetme ve Güncelleme button 
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            employeeName: this.state.employeeName,
            employeeEmail: this.state.employeeEmail
        };

        //EKLEME
        if (this.state.employeeId === "_add") {
            EmployeeServices.createEmployees(employee).then(
                response => {
                    this.props.history.push('/employees')
                }
            );
            //GUNCELLEME
        } else {
            EmployeeServices.updateEmployee(this.state.employeeId, employee).then(
                response => {
                    this.props.history.push('/employees')
                }
            )
        }
    }

    //CDM: Component Did Mount
    componentDidMount() {
        if (this.state.employeeId === "_add") {//EKLEME
            return
        } else {
            EmployeeServices.getEmployeeById(this.state.employeeId).then(
                (response) => {
                    let employee = response.data;
                    console.log(employee)
                    this.setState({
                        employeeName: employee.employeeName,
                        employeeEmail: employee.employeeEmail
                    })
                }
            );
        }
    }


    // tasarım
    render() {
        return (
            <>
                {this.titleDynamicsSaveOrUpdate()}
                <div className="mx-auto">
                    <button onClick={this.homepage} className="btn btn-primary mb-3">Liste</button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="card-body">
                            <div className="form-group">
                                <label >Adı</label>
                                <input type="text" className="form-control" placeholder='Müşteri Adı'
                                    name="employeeName" value={this.state.employeeName} onChange={this.changeFirstNameHandler} />
                            </div>

                            <div className="form-group mt-3 mb-3">
                                <label >Email</label>
                                <input type="text" className="form-control" placeholder='Müşteri Email'
                                    name="employeeEmail" value={this.state.employeeEmail} onChange={this.changeEmailHandler}
                                />
                            </div>
                            <div className="mt-3 mb-3 d-inline">
                                <button onClick={this.cancel.bind(this)} className=" btn btn-danger me-3" placeholder='Müşteri Email'> Temizle </button>

                                <button onClick={this.saveOrUpdateEmployee} type="submit" className=" btn btn-primary" placeholder='Müşteri Email'> Gönder </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
