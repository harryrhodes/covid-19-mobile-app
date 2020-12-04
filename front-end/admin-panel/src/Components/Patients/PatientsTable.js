import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import UserService from "../../Services/UserService";
import { Link } from "react-router-dom";

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

export default function PaitentsTable() {
  const classes = useStyles();
  const [rows, setRows] = useState();

  const renderRows = async () => {
    let res = await UserService.getAll();
    let users = res.data;
    let rows = [];
    console.log(res.data);
    for (let i = 0; i < users.length; i++) {
      if (users[i].accountType === "patient") {
        rows.push(
          <TableRow key={users[i]._id} component={Link} to={"/patient/"+users[i].username}>
            <TableCell>{users[i].username}</TableCell>
            <TableCell>{users[i].firstName}</TableCell>
            <TableCell>{users[i].lastName}</TableCell>
            <TableCell>{users[i].email}</TableCell>
            <TableCell align="right">
              {users[i].patientDetails.status}
            </TableCell>
          </TableRow>    
        );
      } else {
      }
    }
    setRows(rows);
  };
  useEffect(() => {
    if (!rows) {
      renderRows();
    }
  });

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
      <div className={classes.seeMore}></div>
    </React.Fragment>
  );
}
