import React from "react";
import Employee from "./Employee";
import  './employee.css'

const Employees = ({ employees = [], deleteEmployee }) => {
  return (
    <section className="Employees">
      <h2>New Hiring Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>employeeId</th>
            <th>Department</th>
            <th>Email Id</th>
            <th>DOJ</th>
            <th>Action</th>
          </tr>
        </thead>
        {employees.map((employee) => (
          <Employee
            key={employee.employeeId}
            deleteEmployee={deleteEmployee}
            employee={employee}
          />
        ))}
      </table>
    </section>
  );
};

export default Employees;
