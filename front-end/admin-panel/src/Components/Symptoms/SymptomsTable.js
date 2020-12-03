import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";
import SymptomService from "../../Services/SymptomService";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  filter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "31ch",
  },
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

export default function SymptomsTable() {
  const classes = useStyles();
  const [rows, setRows] = useState();

  const renderRows = async () => {
    let res = await SymptomService.getAll();
    let symptoms = res.data;
    let rows = [];
    for (let i = 0; i < symptoms.length; i++) {
      rows.push(
        <TableRow key={symptoms[i]._id}>
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
      <form className={classes.root}>
        <div className={classes.filter}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <TextField
              id="search"
              type="text"
              variant="outlined"
              placeholder="Search"
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <Button variant="contained" color="primary" size="large">
              Search Symptoms
            </Button>
          </FormControl>
        </div>
      </form>

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
