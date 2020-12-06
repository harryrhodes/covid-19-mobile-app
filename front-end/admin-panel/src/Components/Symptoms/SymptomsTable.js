import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Button,
} from "@material-ui/core";
import SymptomService from "../../Services/SymptomService";
import useSelections from "../../Hooks/useSelections";

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
  const [symptoms, setSymptoms] = useState(null);
  const [edit, setEdit] = useState(false);
  const { selections, handleChange } = useSelections();

  const handleClickOpen = () => {
    setEdit(true);
  };

  const handleClickClose = () => {
    setEdit(false);
  };

  useEffect(() => {
    if (!symptoms) {
      getSymptoms();
    }
  });

  const getSymptoms = async () => {
    let res = await SymptomService.getAll();
    let symptoms = res.data;
    setSymptoms(res.data);
  };

  const deleteSelections = async () => {
    for (let name in selections) {
      if (selections.hasOwnProperty(name)) {
        let value = selections[name];
        if (value == true) {
          SymptomService.delete(name);
        } else {
        }
      }
    }
    setEdit(false);
  };
  return (
    <React.Fragment>
      <div>
      {edit == false ? (
        <Button color="primary" onClick={handleClickOpen}>Edit</Button>
      ) : (
        <React.Fragment>
          <Button color="primary" onClick={handleClickClose}>Done</Button>
          <Button color="secondary" onClick={deleteSelections}>Delete</Button>
        </React.Fragment>
      )}
      </div>
      
      <Table>
        <TableHead>
          <TableRow>
            {edit && <TableCell>Selected?</TableCell>}
            <TableCell>Symptom Name</TableCell>
            <TableCell align="right">Severity</TableCell>
          </TableRow>
        </TableHead>
        {!symptoms ? (
          <TableBody>
            <TableCell>No Symptoms</TableCell>
            <TableCell>No Symptoms</TableCell>
            <TableCell>No Symptoms</TableCell>
            <TableCell>No Symptoms</TableCell>
            <TableCell>No Symptoms</TableCell>
          </TableBody>
        ) : (
          <TableBody>
            {symptoms.map((symptom) => (
              <TableRow key={symptom._id}>
                {edit && (
                  <TableCell>
                    <Checkbox
                      color="primary"
                      onChange={handleChange}
                      name={symptom.name}
                    />
                  </TableCell>
                )}
                <TableCell>{symptom.name}</TableCell>
                <TableCell align="right">{symptom.severity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <div className={classes.seeMore}></div>
    </React.Fragment>
  );
}
