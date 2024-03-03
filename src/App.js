// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import React, {useState} from 'react';
import Alert  from './components/Alert';


// import {
//   BrowserRouter as Router,
//   RouterProvider,
//   Route,
//   Routes,
//   Link,

// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode  is enable or not
  const [alert, setAlert] = useState('null');
  // const [alert, setAlert] = useState(null);
  //  NOTE : useState will not takes argument as a null charactor so than you explore it from google


  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const  removeBodyClass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode("dark")
      // document.body.style.backgroundColor = "#212529";
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is Enable","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enable","success")
    }
      
  }


  return (
    <>
      {/* <Router> */}

       <Navbar title="TextUtils"  aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
       
       <Alert alert={alert} />
       <TextForm exact showAlert={showAlert} heading="Try TextUtils - Word Counter, Charcator Counter, Remove extra Spaces" mode={mode} />
       {/* <About mode={mode}/> */}
       
       {/* <div  className="container my-3">


            <Routes>

                  <Route exact path="/about">
                      <About/>
                  </Route>
              
                  <Route path="/">
                      <TextForm exact showAlert={showAlert} heading="Enter The text to analyze" mode={mode} />
                  </Route>

            </Routes>
           
       </div> */}
      {/* </Router> */}
   
    </>
  );
}

export default App;

// exact keyword use for exact maching