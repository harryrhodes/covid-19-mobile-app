import React from "react";
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

// Generate Order Data
function createData( id, symptomName) {
        return { id, symptomName };
    }

const rows = [
createData(0, "Fever"),
createData(1, "Consistent Dry Cough"),
];
function preventDefault(event) {
event.preventDefault();
}

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
}
));

export default function Orders() {
const classes = useStyles();
const [state, setState] = React.useState({
name: "",
});
const handleChange = (event) => {
const name = event.target.name;
setState({
    ...state,
    [name]: event.target.value,
});
};
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
Search Symptoms
</Button>
</FormControl>
</div>
<Table>
<TableHead>
<TableRow>
<TableCell>Symptom Name</TableCell>
</TableRow>
</TableHead>
<TableBody>
{rows.map((row) => (
<TableRow key={row.id}>
<TableCell>{row.symptomName}</TableCell>
</TableRow>
))}
</TableBody>
</Table>
<div className={classes.seeMore}>
</div>
</React.Fragment>
);
}
