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
function createData( id, dateConfirmed, fullName, diagnosis, connectedUsers) {
        return { id, dateConfirmed, fullName, diagnosis, connectedUsers };
    }

const rows = [
createData(0, "01/02/2020", "Elvis Presley", "Awaiting Results", "Eddie The Eagle, Chloe"),
createData(1, "01/02/2020", "Elvis Presley", "Awaiting Results", "Eddie The Eagle, Chloe"),
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
<FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-dateConfirmed-native-simple">
            Date Confirmed
          </InputLabel>
          <Select
            native
            value={state.nhsnumber}
            onChange={handleChange}
            label="Date Confirmed"
            inputProps={{
              name: "Date Confirmed",
              id: "outlined-dateConfirmed-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"12/03/2020"}>12/03/2020</option>
            <option value={"12/03/2020"}>12/03/2020</option>
            <option value={"12/03/2020"}>12/03/2020</option>
            <option value={"12/03/2020"}>12/03/2020</option>
            <option value={"02/11/2020"}>02/11/2020</option>
            <option value={"02/11/2020"}>02/11/2020</option>
            <option value={"02/11/2020"}>02/11/2020</option>
            <option value={"02/11/2020"}>02/11/2020</option>
          </Select>
        </FormControl>
</div>
<Table>
<TableHead>
<TableRow>
<TableCell>Date Confirmed</TableCell>
<TableCell>Full Name</TableCell>
<TableCell>Diagnosis</TableCell>
<TableCell>Connected Users</TableCell>
</TableRow>
</TableHead>
<TableBody>
{rows.map((row) => (
<TableRow key={row.id}>
<TableCell>{row.dateConfirmed}</TableCell>
<TableCell>{row.fullName}</TableCell>
<TableCell>{row.diagnosis}</TableCell>
<TableCell>{row.connectedUsers}</TableCell>
</TableRow>
))}
</TableBody>
</Table>
<div className={classes.seeMore}>
</div>
</React.Fragment>
);
}
