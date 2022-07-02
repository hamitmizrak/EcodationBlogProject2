import React, { Component } from 'react'

// public Long employeeId;
// public String employeeName;
// public String employeeEmail;

export default class ListComponent extends Component {
    render() {
        return (
            <>

            {/* TASARIM */}
                <h1 className="text-center text-uppercase">List</h1>
                <div className="row">
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><i className="fa-solid fa-wrench text-primary"></i></td>
                                <td><i className="fa-solid fa-street-view text-warning"></i></td>
                                <td><i className="fa-solid fa-trash-can text-danger"></i></td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </>
        )
    }
}
