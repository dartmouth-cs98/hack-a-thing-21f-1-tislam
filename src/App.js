import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonGroup } from '@material-ui/core';
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import Checkbox from "@material-ui/core/Checkbox"
import FormControllabel from '@material-ui/core/FormControlLabel'

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
      label = " Testing Checkbox"
    />

    
     
  )
}
function App() {
  return (


    <div className="App">
      <header className="App-header">
        <CheckBoxExample />
        <ButtonGroup>
        <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant = "contained" color = "secondary"> 
          startIcon = {<SaveIcon />}
          Press Here 
        </Button>

        <Button onClick= {()=>alert('Hello')} variant = "contained" color = "Primary"> 
          Press Here 
        </Button>
        
        <img src={logo} className="App-logo" alt="logo" />
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
