import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Container, Button, Grid} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    backgroundColor: "white",
    // marginLeft: theme.spacing(3.5)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  // top:{
  //   marginTop: theme.spacing(1),
  //   backgroundColor: "grey"
  // },
  text:{
    backgroundColor: "white",
    marginTop: theme.spacing(0)
  },
  text1:{
    marginTop: theme.spacing(2)
  },
  btn:{
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(14),
    paddingRight: theme.spacing(14),
  }
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
     <Container >
     
     <Typography className={classes.text1} variant="h5">Token & Strike</Typography>
     <FormControl variant="outlined" className={classes.formControl}>
    
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <TextField className={classes.text} value={age}  variant="outlined"/>

      <Typography variant="h5" className={classes.text1}>Expiration and Position Size</Typography>

      <FormControl variant="outlined" className={classes.formControl}>
    
    <Select
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      value={age}
      onChange={handleChange}
      label="Age"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>

  <TextField className={classes.text} value={age}  variant="outlined"/>

  <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
   <Button color="secondary" variant="contained" className={classes.btn}> Get Contract</Button>
   </Grid>
      </Container>
    </div>
  );
}