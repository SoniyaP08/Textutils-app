//import logo from './logo.svg';
import Navbar from './Components/Navbar';
import './App.css';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//  Routes,
//   Route,
//   Link
// } from 'react-router-dom';
function App() {
  const [mode,setMode]=useState('light');
  const [text,setText]=useState('Enable');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>
    {
         setAlert(
          {
            msg:message,
            type:type
          }
         );
        setTimeout(()=>
        {
          setAlert(null);
        },1500);
    }
  const toggleMode=()=>
    {
       if(mode==='light')
        {
          setText('Disable');
          setMode('dark');
          document.body.style.backgroundColor ='#042743';
          showAlert("Dark Mode has been enabled","success");
          document.title='TextUtils-Dark Mode'
      //    document.body.style.color ='white';
        }
       else 
       {
        setText('Enable');
        setMode('light');
       document.body.style.backgroundColor ='white';
       showAlert("Light Mode has been enabled","success");
       document.title='TextUtils-Light Mode'
      // document.body.style.color ='black';
       }
    }
  return (
  <>
  {/* <Router> */}
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} Text={text}/>
<Alert alert={alert}/>
<div className="container my-3">

{/*
<Routes>
 <Route path="/about" element={<About title="About Us"/>}/>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
    </Routes> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
 {/* <About title="About Us"/> */}
</div>
{/* </Router> */}
  </>
  );
}

export default App;
