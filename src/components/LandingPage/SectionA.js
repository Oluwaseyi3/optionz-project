import React from 'react'
import {Typography,  Grid, Button, Paper, makeStyles} from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import CustomizedSelects from "../utils/Select.js"
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import grey from '@material-ui/core/colors/grey';

import { Container } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
    headerSection: {
        marginTop :theme.spacing(15)
    },
    container:{
        backgroundColor: "black",
        color: "white",
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(7)
        
    },
    paraGraphSection:{
        marginTop :theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    btn:{
        padding: theme.spacing(3), 
        marginBottom:theme.spacing(5)
    },
    divSection:{
     marginTop: theme.spacing(10)
    },
    btnDivSection:{
        margin: theme.spacing(3),
        padding: theme.spacing(1)
    },
    btnText:{
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    text1: {
    marginLeft: theme.spacing(3)
    },
    select:{
        margin: theme.spacing(25)
    },
    paperText:{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1),
        backgroundColor: grey[900],
       

    }
  }));

const SectionA = (props) => {
    const classes = useStyles()

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };
   
    return (
        <div>
            <div className={classes.container}>
                <Container >
                 <Grid container direction="column" justifyContent="center" alignItems="center"  >
                    <Typography variant="h3" className={classes.headerSection}>
                        FIXED PRICE, UNLIMITED UPSIDE:
                    </Typography> 
                    <Typography variant="h3">
                       NON CUSTODIAL OPTIONS
                    </Typography> 

                    <div className={classes.paraGraphSection}>
                    <Typography variant="body1">
                       Team is the easiest and fastest way to share work
                    </Typography>
                    <Typography variant="body1">
                      Holding an option gives you a right to so many things
                    </Typography> 
                    </div>

                    <Button color="secondary"  className={classes.btn} variant="contained" >Get Contract</Button>
                 </Grid>


                 <div className={classes.divSection}>
                 <Grid container direction="column" justifyContent="center" alignItems="center">
                     <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                       <Button color="secondary" className={classes.btnDivSection} variant="contained" >
                            <div className={classes.btnText}>
                                Call <TrendingUpIcon style={ { verticalAlign: "middle"}} fontSize="small"/>
                            </div>
                       </Button>
                       <Button color="secondary" className={classes.btnDivSection} variant="outlined" >
                            <div className={classes.btnText}>
                                Put <TrendingDownIcon style={ { verticalAlign: "middle"}} fontSize="small"/>
                            </div>
                       </Button>
                     </Grid>
                    </Grid>
                </div>
                
                <Grid container justifyContent="center" alignItems="flex-start" spacing={0}>
                    <Grid item  md={6} xs={12} >
                      <CustomizedSelects  />
                    </Grid>
                    <Grid item  md={6} xs={12} >
                 
                    <Paper className={classes.paperText}><Typography color="primary"  variant="body1">Trade Cost (Premium)</Typography></Paper>
                    <Paper className={classes.paperText}><Typography color="primary" variant="body1">Trade Cost (Premium)</Typography></Paper>
                    <Paper className={classes.paperText}><Typography color="primary" variant="body1">Trade Cost (Premium)</Typography></Paper>
                    <Paper className={classes.paperText}><Typography color="primary" variant="body1">Trade Cost (Premium)</Typography></Paper>
                    </Grid>
                </Grid>
                </Container>
             
            </div>
        </div>
    )
}

export default SectionA
