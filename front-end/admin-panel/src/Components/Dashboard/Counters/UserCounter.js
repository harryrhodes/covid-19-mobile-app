import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../Title';
import useStyles from "./style";

export default function UserCounter({count, currentDate}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Users</Title>
      <Typography component="p" variant="h4">
        {count}
      </Typography>
      <Typography color="textSecondary" className={classes.dateContext}>
        {currentDate}
      </Typography>
      <div>
        <Link color="primary" href="/users">
          View Users
        </Link>
      </div>
    </React.Fragment>
  );
}