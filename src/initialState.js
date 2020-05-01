import name from "random-name";

// This is some dummy data.
const initialState = [
  {
    employeeId: 102,
    name: name.first(),
    emailId: `${name.first()}@gmail.com`,
    department: "Technology",
    doj: '11/5/2020',
  },
  {
    employeeId: 532,
    name: name.first(),
    emailId: `${name.first()}@gmail.com`,
    department: "Sales",
    doj: '11/5/2020',
  },
  {
    employeeId: 396,
    name: name.first(),
    emailId: `${name.first()}@gmail.com`,
    department: "Adminstration",
    doj: '11/5/2020',
  },
];

export default initialState;
