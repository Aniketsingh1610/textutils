
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
 
  const [alert,setalert] = useState(null);
  const showalert = (message, type) =>{
    setalert({msg:message,
    type:type})
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
 
 
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(36 74 112)';
      showalert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success")
    }
  }

  return (
  <>

      <Navbar title="textutiles" about="about textutiles" mode={mode} togglemode={togglemode}></Navbar>
      <Alert alert={alert} />
      <Textform showalert={showalert} textarea="Enter your words below:" mode={mode} content="Enter your words below:"></Textform>


</>

  )

}

      export default App;
