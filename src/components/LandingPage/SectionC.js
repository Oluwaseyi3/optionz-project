import React from 'react'
import {Typography,  Grid, Button, Paper, makeStyles, Box, Container} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      paddingBottom: theme.spacing(10),
      paddingTop: theme.spacing(5)
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    accord:{
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        backgroundColor: blue[500],
        color: "white"
    },
    paper:{
      backgroundColor: blue[500],
      color: "white"
    }
  }));

const SectionC = () => {
    const classes = useStyles();
    return (
        <div>
          <Paper className={classes.paper}>
          <Container>
          <Grid container direction="row" justifyContent="center" alignItems="center">
              <Typography variant="h4" style={{margin: "30px"}}>FREQUENTLY ASKED QUESTIONS</Typography>
            </Grid>

            <div className={classes.root}>
            <Accordion className={classes.accord}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
       
      <Accordion className={classes.accord}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
       
      <Accordion className={classes.accord}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
       

      <Accordion className={classes.accord}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
       
          </div>
          </Container>
          </Paper>
        </div>
    )
}

export default SectionC
