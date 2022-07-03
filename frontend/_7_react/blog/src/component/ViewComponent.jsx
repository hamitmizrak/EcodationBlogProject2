import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class ViewComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeId: this.props.match.params.employeeId,
            employee: {}
        };
    }

    //DID MOUNT
    componentDidMount() {
        EmployeeServices.getEmployeeById(this.state.employeeId).then(
            response => {
                this.setState({
                    employee: response.data
                })
            }
        );
    }


    //render
    render() {
        return (
            <>
                <div className="card text-center">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" style={{ maxWidth: "75%", height: "auto" }} />
                    </div>
                    <div className="card-header">Employee Details Page</div>
                    <div className="card-body">
                        <h5 className="card-title"><i className="fa-solid fa-sliders"></i>: {this.state.employee.employeeId}</h5>
                        <p className="card-text"><i className="fa-regular fa-circle-user"></i> {this.state.employee.employeeName}</p>
                        <p className="card-text"><i className="fa-solid fa-envelope-open-text"></i> {this.state.employee.employeeEmail}</p>
                        <a href="#" className="btn btn-primary">Button</a>
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                </div>
            </>
        );
    }
}

export default ViewComponent;