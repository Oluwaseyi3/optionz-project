import React from 'react'
import {Typography,  Grid, Button, Paper, makeStyles, Box, Container} from '@material-ui/core';
import dashboard from "../images/dashboard.png"
import Thirddashboard from "../images/Thirddashboard.png"
import Icon from "../images/Icon.png"
import Security from "../images/Security.png"
import Customer from "../images/Customer.png"

const useStyles = makeStyles((theme) => ({
    container:{
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(30)
    
    },
    dashboardImage:{
        width: "90%"
    },

    secondDashBoardImage:{
        width: "75%" 
    },
    textSpacing:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    btn:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        paddingLeft: theme.spacing(15),
        paddingRight: theme.spacing(15),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    iconsImages:{
        width: "5rem" ,
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(3)
    }
  }));

const SectionB = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.container}>
                <Container>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Typography variant="h4">How We Go About It</Typography>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={0}>
                    <Grid item md={6} xs={12}>
                        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                        <Typography className={classes.textSpacing}  variant="h4">Create Options Market</Typography>
                        <Typography className={classes.textSpacing} variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cuius similcire litteras.</Typography>
                        <Typography className={classes.textSpacing} variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography>
                         <Button variant="contained" color="secondary" className={classes.btn}>Get Contract</Button>
                        </Grid>
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <img src={dashboard} className={classes.dashboardImage} alt="first"/>
                    </Grid>
                </Grid>
            
                </Container>

                <Container>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <Grid item md={6} xs={12}>
                    <img src={Thirddashboard}  className={classes.secondDashBoardImage} alt="first" />
                </Grid>

                <Grid item md={6} xs={12}>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                        <Typography className={classes.textSpacing}  variant="h4">Create Options Market</Typography>
                        <Typography className={classes.textSpacing} variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cuius similcire litteras.</Typography>
                        <Typography className={classes.textSpacing} variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography>
                         <Button variant="contained" color="secondary" className={classes.btn}>Get Contract</Button>
                        </Grid>
                </Grid>
                </Grid>
                </Container>

                <Container>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>

                <Grid item md={4} xs={12}>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                    <img src={Customer}  className={classes.iconsImages} alt="first" />
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur </Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit</Typography>
                    </Grid>
                </Grid>

                <Grid item md={4} xs={12}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                <img src={Icon}  className={classes.iconsImages} alt="first" />
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing .</Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur </Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit</Typography>
                    </Grid>
                </Grid>

                <Grid item md={4} xs={12}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                <img src={Security}  className={classes.iconsImages} alt="first" />
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing .</Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur </Typography>
                    <Typography variant="body2">Lorem ipsum dolor sit</Typography>
                    </Grid>
                </Grid>

                </Grid>
                </Container>
            </div>
        </div>
    )
}

export default SectionB
