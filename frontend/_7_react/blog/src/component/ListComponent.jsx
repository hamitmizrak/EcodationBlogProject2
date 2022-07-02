import React, { Component } from 'react'
import EmployeeServices from '../services/EmployeeServices';

export default class ListComponent extends Component {

    // constructor
    constructor(props) {
        super(props)//super ==> ust atadaki veriler için

        //state ==> durum
        this.state = {
            employees: [] //javadan gelen api verisini almak için
        }

        //bind
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);

    }

    //FUNCTION
    //add
    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    //edit
    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    //view 
    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`)
    }

    //delete
    deleteEmployee(id){
        EmployeeServices.deleteEmployee(id).then(
            response=>{
                this.setState({ employees:this.state.employees.filter(employee=>employee.id!==id)});
            }
        );
    }

    //DID MOUND: servisteki veriler almak için
    //cdm ==> TAB
    componentDidMount() { 
        EmployeeServices.getEmployees().then(
            (response)=>{
                this.setState({
                    employees:response.data
                })
            }
            );
     }


    render() {
        {/* TASARIM */ }
        return (
            <>
                <h1 className="text-center text-uppercase">List</h1>
                <div className="row">
                    <div className="mx-auto">
                        <button onClick={this.addEmployee} className="btn btn-primary mb-3">EKLEME </button>
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
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.employeeName}</td>
                                            <td>{employee.employeeEmail}</td>
                                <td>
                                                <button onClick={() => this.editEmployee(employee.id)}><i className="fa-solid fa-wrench text-primary"></i></button>
                                </td>
                                <td>
                                                <button onClick={() => this.viewEmployee(employee.id)} ><i className="fa-solid fa-street-view text-warning"></i></button>
                                </td>
                                <td>
                                                <button onClick={() => this.deleteEmployee(employee.id)}><i className="fa-solid fa-trash-can text-danger"></i></button>
                                </td>
                            </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
