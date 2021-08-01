import React from 'react'
import {Typography,  Grid, Button, Paper, makeStyles, Box, Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container:{
        marginTop: theme.spacing(15),
        backgroundColor: "black"
    }
  }));

const SectionB = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.container}>
                <Container>
                    
                </Container>
            </div>
        </div>
    )
}

export default SectionB
