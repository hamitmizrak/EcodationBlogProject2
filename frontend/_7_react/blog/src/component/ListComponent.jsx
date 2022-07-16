import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices';
import Loading from './Loading'


export default class ListComponent extends Component {
    // constructor
    constructor(props) {
        super(props)//super ==> ust atadaki veriler için

        //state ==> durum
        this.state = {
            employees: [], //javadan gelen api verisini almak için
            loading: false,
        }
        //bind
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);

    }

    //FUNCTION
    //add
    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    //edit
    editEmployee(employeeId) {
        this.props.history.push(`/add-employee/${employeeId}`);
    }

    //view 
    viewEmployee(employeeId) {
        this.props.history.push(`/view-employee/${employeeId}`)
    }

    //delete
    deleteEmployee(employeeId) {
        EmployeeServices.deleteEmployee(employeeId).then(
            response => {
                this.setState({ employees: this.state.employees.filter(employee => employee.employeeId !== employeeId) });
            }
        );
    }

    //DID MOUND: servisteki veriler almak için
    //cdm ==> TAB
    componentDidMount() {

        this.setState({ loading: true }) //sayfa yüklenene kadar çalışsın
        setTimeout(() => {
            EmployeeServices.getEmployees().then(
                (response) => {
                    this.setState({
                        employees: response.data,
                        loading: false
                    })
                }
            );
        }, 1000)

    }

    render() {
        if (this.props.loading) {
            console.log(this.props.loading)
            return <Loading />
        } else {
            return (
                <>
                    <h1 className="text-center text-uppercase mt-5">List</h1>
                    <div className="row">
                        <div className="mx-auto">
                            <button onClick={this.addEmployee} className="btn btn-primary mb-3">EKLEME</button>
                        </div>
                        <table className="table table-hover table-striped table-dark">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAİL</th>
                                    <th>Update</th>
                                    <th>View</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                            <tr key={employee.employeeId}>
                                                <td>{employee.employeeId}</td>
                                                <td>{employee.employeeName}</td>
                                                <td>{employee.employeeEmail}</td>
                                                <td>
                                                    <button className="fa-solid fa-wrench text-primary bg-dark"
                                                        onClick={() => this.editEmployee(employee.employeeId)}></button>
                                                </td>
                                                <td>
                                                    <button className="fa-solid fa-street-view text-warning bg-dark"
                                                        onClick={() => this.viewEmployee(employee.employeeId)}></button>
                                                </td>
                                                <td>
                                                    <button className="fa-solid fa-trash-can text-danger bg-dark"
                                                        onClick={() => {
                                                            if (window.confirm("Silmek İstiyor musunuz?")) {
                                                                this.deleteEmployee(employee.employeeId)
                                                            }
                                                        }}><i className=""></i></button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    {/*row end*/}
                </> //React.Fragment
            ) //return end
        }
    }//render end
} // ListComponent end
