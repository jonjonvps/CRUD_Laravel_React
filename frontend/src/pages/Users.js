import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Users() 
{
    // States to control loading and user data
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    // HTTP GET request to obtain the list of API users
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/users`).then(res => {
            console.log(res)
            // Updating the status with the user data obtained
            setUsers(res.data.users)
            setLoading(false)
        })
    }, [])

    // If it is still loading, it displays a loading indicator
    if (loading) {
        return (
            <div className="container mt-3">
                <div class="spinner-grow" role="status">
                    <span class="sr-only"></span>
                </div> <span>Loading...</span>
            </div>
        )
    }

    // Mapping the details of each user to create the table rows
    let userDetails = ""
    userDetails = users.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.username}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.age}</td>
                <td>{item.cellphone}</td>
                <td>
                    <Link to="/" className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    })
    // Returns the user details rendered in a table
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Users List
                                <Link to="/UsersList/create" className="btn btn-primary float-end">Add User</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Age</th>
                                        <th>Cellphone</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;