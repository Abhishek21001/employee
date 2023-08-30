import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';

function Home() {
  const [adminCount, setAdminCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [salary, setSalary] = useState(0);
  const [adminNames, setAdminNames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/adminCount')
      .then(res => {
        setAdminCount(res.data[0].admin);
      })
      .catch(error => {
        console.log('Error fetching admin count:', error);
      });

    axios.get('http://localhost:8081/employeeCount')
      .then(res => {
        setEmployeeCount(res.data[0].employee);
      })
      .catch(error => {
        console.log('Error fetching employee count:', error);
      });

    axios.get('http://localhost:8081/salary')
      .then(res => {
        setSalary(res.data[0].sumOfSalary); 
      })
      .catch(error => {
        console.log('Error fetching salary count:', error);
      });

    axios.get('http://localhost:8081/adminName')
      .then(res => {
        setAdminNames(res.data); 
      })
      .catch(error => {
        console.log('Error fetching admin names:', error);
      });

  }, []);

  return (
    <div>   
      <div>   
      <div className='p-3 d-flex justify-content-around mt-3'>
      <div className='px-3 pt-2 pb-3 border shadow-sm w-25 red'>
        <div className='text-center pb-1'>
        <h4>Admin</h4>
        </div>
        <div className=''>
        <hr/>
        <h5>Total: {adminCount}</h5>
        </div>
      </div>
      <div className='px-3 pt-2 pb-3 border shadow-sm w-25 blue'>
        <div className='text-center pb-1'>
        <h4>Employee</h4>
        </div>
        <div className=''>
        <hr/>
        <h5>Total: {employeeCount}</h5>
        </div>
      </div>
      <div className='px-3 pt-2 pb-3 border shadow-sm w-25 green'>
        <div className='text-center pb-1'>
        <h4>Salary</h4>
        </div>
        <div className=''>
        <hr/>
        <h5>Total: {salary}</h5>
        </div>
      </div>
     </div>
      </div>
      
      {/* List of admin */}
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adminNames.map((admin, index) => (
              <tr key={index}>
                <td>{admin.adminName}</td>
                <td>Admin</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
