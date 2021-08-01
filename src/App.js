import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider} from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import blue from '@material-ui/core/colors/blue';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: cyan[500],
      },
      secondary: {
        main: blue[500],
      },
    },
  });
  return (

    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <NavBar/>
     <Switch>
             <Route exact path='/' component={Home} />
             <Redirect to="/"/> 
     </Switch>
     </ThemeProvider>
   </BrowserRouter>
  
  );
}

export default App;
