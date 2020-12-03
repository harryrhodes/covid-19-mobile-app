import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../../Title";
import useStyles from "./style";

export default function CaseCounter({ count, currentDate }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Total Cases</Title>
      <Typography component="p" variant="h4">
        {count}
      </Typography>
      <Typography color="textSecondary" className={classes.dateContext}>
        {currentDate}
      </Typography>
      <div>
        <Link color="primary" href="/cases">
          View Cases
        </Link>
      </div>
    </React.Fragment>
  );
}
