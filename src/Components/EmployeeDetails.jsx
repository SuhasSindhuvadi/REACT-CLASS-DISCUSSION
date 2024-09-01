import React, { Component } from 'react'

export default class EmployeeDetails extends Component {
    constructor() {
        super()
        this.state = {
            empDetails: [
                { name: "Suhas", age: 22, place: "Shivamogga", dept: "DEV" }
                , { name: "sandesh", age: 25, place: "Bangalore", dept: "DEV" }
                , { name: "Abhishek", age: 24, place: "Hassan", dept: "TEST" }
                , { name: "Karthik", age: 30, place: "Mysore", dept: "TL" }
                , { name: "Pavan", age: 24, place: "Bangalore", dept: "DEV" }
                , { name: "Chandan", age: 25, place: "Tumkur", dept: "TRAINING" }
            ]
        }
    }
    render() {
        return (
            <div>
                <table border={1}>
                    <caption>Employee Details</caption>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Place</th>
                            <th>Dept</th>
                        </tr>
                    </thead>
                    {/* React Key-Map */}
                    {
                        this.state.empDetails.map((emp, index) =>
                        (
                            <tbody>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.age}</td>
                                    <td>{emp.place}</td>
                                    <td>{emp.dept}</td>
                                </tr>
                            </tbody>
                        )
                        )
                    }
                </table>
            </div>
        )
    }
}
