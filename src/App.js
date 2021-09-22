import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import Button from "@material-ui/core/Button"
//import SaveIcon from "@material-ui/icons/Save"
import Checkbox from "@material-ui/core/Checkbox"
import FormControllabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { orange,purple } from '@material-ui/core/colors';
import 'fontsource-roboto'; 
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

function CheckBoxExample() { 
  const[checked, setChecked] = React.useState(true)
  return (
    <FormControllabel
    control = { <Checkbox 
        checked = {checked}
        onChange ={(e)=>setChecked(e.target.checked)}
        inputProps={{
          'aria-label' : 'secondary checkbox'
        }}
      />}
      label = " Check here because I said so :) !"
    />

    
     
  )
}
const useStyles = makeStyles ({
  root: {
    background: 'linear-gradient( 45deg, #333, #999)',
    border: 0, 
    color: 'white',
    padding: '0 30px'
    
  }
})

const theme = createMuiTheme({
  typography: {
     h2: {
       fontsize: 36, 
       marginTop: 0,
       marginBottom: 100,
     },
     body1: {
       fontsize: 10, 
       marginbottom: 20, 
     }
  },
  
  palette: {
    primary: {
      main: orange[500], 
    },
    secondary: {
      main: purple[500]
    }
  }
})
function ButtonStyled() {
  const classes = useStyles(); 
  return <Button className = {classes.root}>Test Styled Button </Button>
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <Container>
    <div className="App">
      <header className="App-header">
        <Typography variant = "h2">
          Welcome to MUI
        </Typography>

        <Typography variant = "body1">
          this is body text 
        </Typography>
     
      <ButtonStyled/>

      <TextField 
          variant = "outlined"
          color = "primary"
          placeholder= "Name"
        />
        <TextField 
          variant = "outlined"
          color = "secondary"
          type = "date"
          placeholder = "Date of birth "
        />
        <TextField 
          variant = "outlined"
          color = "secondary"
          type = "time"
        />
        <CheckBoxExample />
        <ButtonGroup>
        <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant = "contained" color = "secondary"> 
          Press Here 
        </Button>

        <Button onClick= {()=>alert('Hello')} variant = "contained" color = "Primary"> 
          Press Here 
        </Button>
        
        </ButtonGroup>
      </header>
    </div>
    </Container>  
    </ThemeProvider>
  );
}

export default App;
