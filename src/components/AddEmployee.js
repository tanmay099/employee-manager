import React, { useState } from "react";
import "./AddEmployee.css";

const AddEmployee = React.memo(({ openDialog, onSubmit, togglePopup }) => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");
  const [emailId, setEmailId] = useState("");
  const [doj, setDoj] = useState("");
  const [error, setError] = useState(false);

  const validateForm = () => {
   
    let errors = {};
    let formIsValid = true;
    if (emailId === "") {
      formIsValid = false;
      errors["email"] = "This is a required Field";
    }

    if (typeof emailId !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /(?=^.{5,30}$)(([a-zA-Z\d*]).{5,30})+(\.?)([a-zA-Z\d*])*@{1}([a-zA-z\d*])+(\.){1}([a-zA-Z\d*]){2,}/
      );
      if (!pattern.test(emailId)) {
        formIsValid = false;
        errors["emailId"] = "*Please enter valid email-ID.";
      }
    }

    if (name === "") {
      formIsValid = false;
      errors["name"] = "This is a required Field";
    }
     
      if (department === "") {
      formIsValid = false;
      errors["department"] = "This is a required Field";
      }
      if (employeeId === "") {
      formIsValid = false;
      errors["employeeId"] = "This is a required Field";
      }
      if (doj=== "" ) {
      formIsValid = false;
      errors["doj"] = "This is a required Field";
    }


    setError(errors);
    return formIsValid;
  };
  const handleChange = (event) => {
      event.preventDefault();
      console.log(validateForm());
      if (validateForm()) {
        onSubmit({ emailId, employeeId, department, doj, name });
      }
    
  };

  console.log("add employee");

  return (
    <dialog className="addEmployeeDialog" open={openDialog}>
      <label className="close" onClick={togglePopup}>
        X
      </label>
      <form className="addEmployee" onSubmit={handleChange}>
        <input
          placeholder="Employee ID"
          type="text"
          value={employeeId}
          onChange={(event) => setEmployeeId(event.target.value)}
        />
        <div className="errorMsg">{error.employeeId}</div>
        <input
          placeholder="Employee Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div className="errorMsg">{error.name}</div>
        <input
          placeholder="Email"
          type="email"
          value={emailId}
          onChange={(event) => setEmailId(event.target.value)}
        />
        <div className="errorMsg">{error.emailId}</div>
        <input
          placeholder="Date of Joining"
          type="date"
          value={doj}
          onChange={(event) => setDoj(event.target.value)}
        />
        <div className="errorMsg">{error.doj}</div>
        <input
          placeholder="Department"
          type="text"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        />
        <div className="errorMsg">{error.department}</div>

        <input className="button" type="submit" />
      </form>
    </dialog>
  );
});

export default AddEmployee;
