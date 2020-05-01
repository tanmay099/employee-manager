import React from "react";

const Employee = React.memo(({ employee, deleteEmployee }) => {
  const deleteEmp = () => deleteEmployee(employee.employeeId);

  return (
    <tbody>
      <tr>
        <td>{employee.name}</td>
        <td>{employee.employeeId}</td>
        <td>{employee.department}</td>
        <td>{employee.emailId}</td>
        <td>{employee.doj}</td>
        <td>
          <label onClick={deleteEmp} className="deleteButton">
            X
          </label>
        </td>
      </tr>
    </tbody>
  );
});

export default Employee;
