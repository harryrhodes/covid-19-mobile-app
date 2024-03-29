import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Title from "../../Title";
import useStyles from "./style";

export default function SymptomCounter({ count, currentDate }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Symptoms</Title>
      <Typography component="p" variant="h4">
        {count}
      </Typography>
      <Typography color="textSecondary" className={classes.dateContext}>
        {currentDate}
      </Typography>
      <div>
        <Link color="primary" href="/symptoms">
          View Symptoms
        </Link>
      </div>
    </React.Fragment>
  );
}
