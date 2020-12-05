import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import SymptomService from "../../Services/SymptomService";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SymptomsTable() {
  const classes = useStyles();
  const [rows, setRows] = useState();

  const renderRows = async () => {
    let res = await SymptomService.getAll();
    let symptoms = res.data;
    let rows = [];
    for (let i = 0; i < symptoms.length; i++) {
      rows.push(
        <TableRow key={symptoms[i]._id} component={Link} to={"/symptom/"+symptoms[i]._id}>
          <TableCell>{symptoms[i].name}</TableCell>
          <TableCell align="right">{symptoms[i].severity}</TableCell>
        </TableRow>
      );
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
            <TableCell>Symptom Name</TableCell>
            <TableCell align="right">Severity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
      <div className={classes.seeMore}></div>
    </React.Fragment>
  );
}
