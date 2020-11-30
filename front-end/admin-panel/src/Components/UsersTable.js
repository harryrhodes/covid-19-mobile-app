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
function createData(
  id,
  date,
  name,
  accountType,
  organisation,
  department,
  role
) {
  return { id, date, name, accountType, organisation, department, role };
}

const rows = [
  createData(0, "16 Mar, 2020", "Elvis Presley", "Admin", "N/A", "N/A", "N/A"),
  createData(
    0,
    "16 Mar, 2020",
    "John Doe",
    "Practioner",
    "NHS",
    "Epidemiology",
    "Epidemiologist"
  ),
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
}));

export default function Orders() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "",
    age: "",
    NHS_Number: "",
    emailAddress: "",
    role: "",
    diagnosis: "",
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
        {/* Age Dropdown */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">
            Account Type
          </InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            label="Account Type"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"1-10"}>1-10</option>
            <option value={"11-20"}>11-20</option>
            <option value={"21-30"}>21-30</option>
            <option value={"31-40"}>31-40</option>
            <option value={"41-50"}>41-50</option>
            <option value={"51-60"}>51-60</option>
            <option value={"61-70"}>61-70</option>
            <option value={"70<"}>70 Plus</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-NHSNumber-native-simple">
            Organisation
          </InputLabel>
          <Select
            native
            value={state.nhsnumber}
            onChange={handleChange}
            label="NHS Number"
            inputProps={{
              name: "NHS Number",
              id: "outlined-NHSNumber-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"123856334"}>123856334</option>
            <option value={"123856334"}>123856334</option>
            <option value={"123856334"}>123856334</option>
            <option value={"123856334"}>123856334</option>
            <option value={"123856334"}>123856334</option>
            <option value={"123856334"}>123856334</option>
            <option value={"123856334"}>123856334</option>
            <option value={"123856334"}>123856334</option>
          </Select>
        </FormControl>
        {/* Email Address Dropdown */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-Email-native-simple">
            Department
          </InputLabel>
          <Select
            native
            value={state.emailAddress}
            onChange={handleChange}
            label="Department"
            inputProps={{
              name: "Email Address",
              id: "outlined-Email-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-Email-native-simple">Role</InputLabel>
          <Select
            native
            value={state.emailAddress}
            onChange={handleChange}
            label="Role"
            inputProps={{
              name: "Email Address",
              id: "outlined-Email-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
            <option value={"ABC@Gmail.com"}>ABC@Gmail.com</option>
          </Select>
        </FormControl>
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
            Search
          </Button>
        </FormControl>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date Account Created</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Account Type</TableCell>
            <TableCell>Organisation</TableCell>
            <TableCell>Department</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.accountType}</TableCell>
              <TableCell>{row.organisation}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See All Patients
        </Link>
      </div>
    </React.Fragment>
  );
}
