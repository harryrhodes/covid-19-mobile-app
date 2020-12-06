import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import Navigation from "../Components/Common/Navigation";
import Copyright from "../Components/Copyright";
import Title from "../Components/Title";
import UsersTable from "../Components/Users/UsersTable";
import AddUser from "../Components/Users/AddUser";
import { UserContext } from "../Hooks/UserContext";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function Users() {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Title>Users</Title>
                {user.data.accountType != "admin" ? (
                  "No Permissions"
                ) : (
                  <UsersTable />
                )}
              </Paper>
            </Grid>
            {user.data.accountType == "admin" && <AddUser />}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </React.Fragment>
  );
}
