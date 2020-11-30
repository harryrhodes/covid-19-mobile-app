import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
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
function createData(id, 
                    date, 
                    name, 
                    nhsNumber, 
                    email, 
                    role,
                    diagnosis) {
  return { id, date, name, nhsNumber, email, role, diagnosis };
}

const rows = [
  createData(0, '16 Mar, 2020', 'Elvis Presley', '123856334', 'ABC@Gmail.com', 'Patient', 'Awaiting Results'),
  createData(1, '18 Feb, 2020', 'Paul McCartney', '980235766', 'ABC@Gmail.com', 'Patient', 'Awaiting Results'),
  createData(2, '21 Apr, 2019', 'Tom Scholz', '235907671', 'ABC@Gmail.com', 'Patient', 'Awaiting Results'),
  createData(3, '16 Jun, 2019', 'Michael Jackson', '234907282', 'ABC@Gmail.com', 'Patient', 'Positive'),
  createData(4, '15 Sep, 2019', 'Bruce Springsteen', '135097234', 'ABC@Gmail.com', 'Patient', 'Negative'),
  createData(5, '16 Aug, 2020', 'Elvis Presley', '135097692', 'ABC@Gmail.com', 'Patient', 'Awaiting Results'),
  createData(6, '16 Oct, 2020', 'Paul McCartney', '602346728', 'ABC@Gmail.com', 'Practitioner','N/A'),
  createData(7, '07 Nov, 2020', 'Tom Scholz', '460924672', 'ABC@Gmail.com', 'Admin','Not Tested'),
  createData(8, '18 Dec, 2020', 'Michael Jackson', '507969234', 'ABC@Gmail.com', 'Patient', 'Not Tested'),
  createData(9, '21 Sep, 2020', 'Bruce Springsteen', '694031238', 'ABC@Gmail.com','Patient','Positive'),
  createData(10, '16 Mar, 2020', 'Elvis Presley', '123856334', 'ABC@Gmail.com', 'Patient', 'Awaiting Results'),
  createData(11, '18 Feb, 2020', 'Paul McCartney', '980235766', 'ABC@Gmail.com', 'Patient', 'Awaiting Results'),
  createData(12, '21 Apr, 2019', 'Tom Scholz', '235907671', 'ABC@Gmail.com', 'Patient', 'Awaiting Results'),
  createData(13, '16 Jun, 2019', 'Michael Jackson', '234907282', 'ABC@Gmail.com', 'Patient', 'Positive'),
  createData(14, '15 Sep, 2019', 'Bruce Springsteen', '135097234', 'ABC@Gmail.com', 'Patient', 'Negative'),
  createData(15, '16 Aug, 2020', 'Elvis Presley', '135097692', 'ABC@Gmail.com', 'Patient', 'Awaiting Results'),
  createData(16, '16 Oct, 2020', 'Paul McCartney', '602346728', 'ABC@Gmail.com', 'Practitioner','N/A'),
  createData(17, '07 Nov, 2020', 'Tom Scholz', '460924672', 'ABC@Gmail.com', 'Admin','Not Tested'),
  createData(18, '18 Dec, 2020', 'Michael Jackson', '507969234', 'ABC@Gmail.com', 'Patient', 'Not Tested'),
  createData(19, '21 Sep, 2020', 'Bruce Springsteen', '694031238', 'ABC@Gmail.com','Patient','Positive'),
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

export default function PaitentsTable() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: '',
    age: '',
    NHS_Number: '',
    emailAddress: '',
    role: '', 
    diagnosis: '',
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
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Account Created</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>NHS Number</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align="right">Diagnosis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.nhsNumber}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell align="right">{row.diagnosis}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
      </div>
    </React.Fragment>
  );
}