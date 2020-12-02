import React, { useState, useEffect } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  InputLabel,
  FormControl,
  Select,
  TextField,
  Button,
} from "@material-ui/core";
import UserService from "../Services/UserService"

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function UsersTable() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    username: "",
    firstName: "",
    lastName: "",
    //age: "",
    //NHS_Number: "",
    emailAddress: "",
    accountType: "",
    //diagnosis: "",
    symptoms: "",
    patientDetails: "",
    role: "",
  });
const [rows, setRows] = useState();
const [value, setValue] = useState(false);
const [values, setValues] = useState({});


  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const renderRows = async() => {
    let res = await UserService.getAll();
    let users = res.data;
    let rows = [];
    for (let i=0; i < users.length; i++){
      rows.push(
        <TableRow key={users[i]._id}>
  {/* <TableCell>{users[i].dateAccountCreated}</TableCell>         */}
  <TableCell>{users[i].username}</TableCell>
  <TableCell>{users[i].firstName}</TableCell>
  <TableCell>{users[i].lastName}</TableCell>
  {/* <TableCell>{users[i].age}</TableCell> */}
  {/* <TableCell>{users[i].NHS_Number}</TableCell> */}
  {/* <TableCell>{users[i].diagnosis}</TableCell> */}
  <TableCell>{users[i].emailAddress}</TableCell>
  <TableCell>{users[i].accountType}</TableCell>
  <TableCell>{users[i].symptoms}</TableCell>
  <TableCell>{users[i].patientDetails}</TableCell>
  <TableCell>{users[i].role}</TableCell>
        </TableRow>
      )
    } 
    setRows(rows); 
  }
  useEffect(() => {
    if (!rows){
      renderRows();
    }
  });

  return (
    <React.Fragment>
      <div>
      <FormControl>
<TextField
id="search"
type="text"
variant="outlined"
placeholder="Search"
/>
</FormControl>
<FormControl>
<Button variant="contained" color="primary">
Search Users
</Button>
</FormControl>
</div>
      <Table>
        <TableHead>
          <TableRow>
            {/* <TableCell>Date Account Created</TableCell> */}
            <TableCell>Username</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            {/* <TableCell>Age</TableCell> */}
            {/* <TableCell>NHS Number</TableCell> */}
            {/* <TableCell>Diagnosis</TableCell> */}
            <TableCell>Email Address</TableCell>
            <TableCell>Account Type</TableCell>
            <TableCell>Symptoms</TableCell>
            <TableCell>Patient Details</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
      </div>
    </React.Fragment>
  );
}
