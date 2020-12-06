import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Navigation from "../../Components/Common/Navigation";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../../Components/Copyright";
import UserService from "../../Services/UserService"
import CaseCounter from "../../Components/Dashboard/Counters/CaseCounter"
import CaseChart from "../../Components/Charts/CaseChart.js"

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 600,
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
  }))

  export default function CaseTrends() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [patientCount, setPatientCount] = useState(null);
    const renderPatientCounter = async () => {
        let res = await UserService.getAll();
        let count = 0;
        for(let i=0; i<res.data.length; i++){
            if(res.data[i].accountType == "patient"){
                count++;
            }else{

            }
        }
        setPatientCount(count);
      };
    
      useEffect(() => {
        if (!patientCount) {
            renderPatientCounter();
        }
    });
const today = new Date();
const currentDate =
    "On: " +
    today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear();
return (
        <React.Fragment>
          <Navigation />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={9} lg={9}>
                  <Paper className={fixedHeightPaper}>
                      <CaseChart count={patientCount} />
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <CaseCounter
                        count={patientCount}
                        currentDate={currentDate}
                        />
                    </Paper>
                </Grid>
            
            </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </React.Fragment>
  );
}