import React, { useState, useReducer, useCallback } from "react";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Employees from "./components/Employees";

import initialState from "./initialState";

//writing  a reducer function

const EMPLOYEE_ADD = "EMPLOYEE_ADD ";
const EMPLOYEE_DELETE = "EMPLOYEE_DELETE";

const reducer = (state, action) => {
  console.log({ action });
  if (action.type === EMPLOYEE_ADD) {
    return [action.payload, ...state];
  }

  if (action.type === EMPLOYEE_DELETE) {
    console.log(state);
    return state.filter((emp) => emp.employeeId !== action.payload.employeeId);
  }

  return state;
};

function App() {
  const [popup, setPopup] = useState(false);
  const [employees, dispatch] = useReducer(reducer, initialState);

  const togglePopup = useCallback(() => {
    return setPopup(!popup);
  },[popup]);

  const addEmployee = useCallback(
    ({ employeeId, name, department, emailId, doj }) => {
      dispatch({
        type: EMPLOYEE_ADD,
        payload: {
          employeeId,
          name,
          department,
          emailId,
          doj,
        },
      });
      togglePopup();
    },
    [dispatch, togglePopup]
  );

  const deleteEmployee = useCallback(
    (employeeId) => {
      dispatch({
        type: EMPLOYEE_DELETE,
        payload: {
          employeeId,
        },
      });
    },
    [dispatch]
  );

  return (
    <div className="Application">
      <header className="App-header">
        <button id="addEmp" onClick={togglePopup}>
          New Employee
        </button>
        <AddEmployee
          onSubmit={addEmployee}
          openDialog={popup}
          togglePopup={togglePopup}
        />
        <Employees employees={employees} deleteEmployee={deleteEmployee} />
      </header>
    </div>
  );
}

export default App;
