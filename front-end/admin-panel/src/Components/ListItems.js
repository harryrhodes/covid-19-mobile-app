import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ApartmentIcon from '@material-ui/icons/Apartment';
import CallSplitIcon from '@material-ui/icons/CallSplit';

export const primaryListItems = (
  <div>
    <ListItem button component="a" href='/'>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
  </div>
);

export const secondryListItems = (
  <div>
    <ListSubheader inset>System Data</ListSubheader>
    <ListItem button component="a" href="/users">
      <ListItemIcon>
      <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button component="a" href='/patients'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Patients" />
    </ListItem>
    <ListItem button component="a" href='/symptoms'>
      <ListItemIcon>
        <ApartmentIcon />
      </ListItemIcon>
      <ListItemText primary="Symptoms" />
    </ListItem>
    <ListItem button component="a" href='/cases'>
      <ListItemIcon>
        <CallSplitIcon/>
      </ListItemIcon>
      <ListItemText primary="Cases" />
    </ListItem>
  </div>
);


export const tertiaryListItems = (
  <div>
    <ListSubheader inset>Reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="User Trends" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Patient Trends" />
    </ListItem>
    <ListItem button component="a" href='/symptomtrends'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Symptom Trends" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Case Trends" />
    </ListItem>
  </div>
);
