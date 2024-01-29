import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentCreate() {

    const navigate = useNavigate();

    // States to control loading, input errors and user data
    const [loading, setLoading] = useState(false)
    const [inputErrorList, setInputErrorList] = useState({})
    const [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        age: '',
        cellphone: ''
    })

    /*
        This function is called when there is a change in any input field. 
        It updates the user state with the new field values.
    */
    const handleInput = (e) => {
        // prevents the event from being released, allowing it to be accessed later.
        e.persist();

        setUser({ ...user, [e.target.name]: e.target.value });
    }

    // Function to save the user
    const saveUser = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            age: user.age,
            cellphone: user.cellphone,
        }
        // POST request to create a new user
        axios.post(`http://127.0.0.1:8000/api/users`, data)
            .then(res => {
                alert(res.data.message);
                navigate('/UsersList')
                setLoading(false);
            })
            .catch(function (error) {
                /* 
                    Error handling, including validation errors (status 422) 
                    and internal server errors (status 500)
                */
                if (error.response) {
                    if (error.response.status === 422) {
                        setInputErrorList(error.response.data.errors)
                        setLoading(false)
                    }
                    if (error.response.status === 500) {
                        alert(error.response.data)
                        setLoading(false)
                    }
                }
            });
    }

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

    // Component rendering
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Add User
                                <Link to="/UsersList" className="btn btn-danger float-end">Cancel</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveUser}>
                                <div className="mb-3">
                                    <label>Username</label>
                                    <input type="text" name="username" value={user.username} onChange={handleInput} className="form-control" />
                                    <span className="text-danger">{inputErrorList.username}</span>
                                </div>
                                <div className="mb-3">
                                    <label>First Name</label>
                                    <input type="text" name="first_name" value={user.first_name} onChange={handleInput} className="form-control" />
                                    <span className="text-danger">{inputErrorList.first_name}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Last Name</label>
                                    <input type="text" name="last_name" value={user.last_name} onChange={handleInput} className="form-control" />
                                    <span className="text-danger">{inputErrorList.last_name}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Age</label>
                                    <input type="number" name="age" value={user.age} onChange={handleInput} className="form-control" />
                                    <span className="text-danger">{inputErrorList.age}</span>
                                </div>
                                <div className="mb-3">
                                    <label>Cellphone</label>
                                    <input type="number" name="cellphone" value={user.cellphone} onChange={handleInput} className="form-control" />
                                    <span className="text-danger">{inputErrorList.cellphone}</span>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCreate;