import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Grid, useMediaQuery, useTheme,} from '@material-ui/core';
import Button from '@material-ui/core/Button';


import { Container } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(5),
      flexGrow: 1
    },
    title: {
      marginRight: theme.spacing(3),
      marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2)
    
    },
    btn:{
        marginRight: theme.spacing(3),
      marginTop:theme.spacing(2),
      marginBottom:theme.spacing(2)
    
    },
    btnSmall:{
      marginRight: theme.spacing(5),
      marginBottom: theme.spacing(1)
  },
    expandIcon:{
      marginTop: "20rem",
      flexGrow: 1,
    },
    appBar:{
     backgroundColor: "black",
     color: "white"
    },
    logo:{
      width: "10rem",
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        width: "8rem",
           }
    }
  }));


export default function NavBar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
  console.log(isMatch);

  
    const classes = useStyles();
    return (
        <div>
         <Container>
         <AppBar className={classes.appBar} elevation={0}  position="fixed">
        <Toolbar>

        {isMatch ?
        <>
     
       <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
                <Button color="primary"  className={classes.btnSmall}  variant="contained" >Connect Wallet</Button>
        
          </Grid>
          </>
         :(
         <>
     

     <Grid container direction="row" justify="flex-start" alignItems="flex-start">
     <Typography variant="h6" className={classes.title}>
    Optionz
     </Typography>

     </Grid>
     <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">

     <Typography variant="body1" className={classes.title}>
     HOLDERS
     </Typography>

     <Typography variant="body1" className={classes.title}>
     LIQUIDITY PROVIDERS
     </Typography>
          
        <Typography variant="body1" className={classes.title}>
       MINING
     </Typography>
     <Button color="secondary"  className={classes.btn}  variant="contained" >Get Contract</Button>
     </Grid>
         </>
          ) }
     
           
        </Toolbar>
      </AppBar>
      </Container>  
        </div>
    )
}
