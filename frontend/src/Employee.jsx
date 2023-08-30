import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Employee() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/getEmployee')
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log(res.data.Result);
                    setData(res.data.Result);
                } else {
                    alert('Error')
                }
            })
            .catch(err => console.log(err))
    }, [])

    
    return (
        <div className='px-5 py-3 '>
            <div className='d-flex justify-content-center'>
                <h3>Employee List</h3>
            </div>

            <Link to='/create' className='btn btn-success'>Add Employee</Link>
            <div className='mt-3'>
                <table className='table'>
                    <thead>
                        <th>Name</th>
                        <th>Image</th>
                        <th>email</th>
                        <th>Address</th>
                        <th>salary</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {data.map((employee, index) => {
                            return <tr key={index}>
                                <td>{employee.name}</td>
                                <td>{
                                    <img src={`http://localhost:8081/images/` + employee.image} alt="" className='employee_image' />

                                }</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <td>
                                        <Link to={`/employeeEdit/${employee.id}`} className='btn btn-sm btn-primary btn-sm me-2'>Edit</Link>
                                        
                                    </td> 

                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee