
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


//  import {
//   BrowserRouter as Router,
//  Switch,
//   Route,
// } from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

  const showAlert =(message,type) =>
  {
     setAlert(
       {
         msg : message,
         type : type
       })
       setTimeout(() => {
         setAlert(null);
       }, 1500);
  }
  
  const toggleMode= ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert("Dark mode enabled","success");
    }
    
  else
  {
    setMode('light');
    document.body.style.backgroundColor='white';
   showAlert("light mode enabled","success");
    }
  }
 
  return (

 <>
  {/* <Router>  */}
  <Navbar title="My App" mode ={mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/>  
  <div className="container my-3">
   {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/">
            
    
 
          </Route>
         
    </Switch>   */}
     <TextForm showAlert={showAlert} heading ="Enter your text here" mode={mode}/>
    </div>
     {/* </Router>  */}
    
    
       
      
  
 </> 
    

    
  );
}

export default App;
 