// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Demo from './components/Demo';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, SetMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor = '#191e42'
      document.body.style.color = 'white';
      showAlert('Dark Mode has benn enabled', 'success');
    } else {
      SetMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#181616';
      showAlert('Light Mode has benn enabled', 'success');

    }
  }



  return (
    <>
      <Router>
        <Navbar title="TextFormat" about="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>

            </Route>
            <Route exact path="/" element={<TextForm show={showAlert} heading="Enter the Text to Analyze" mode={mode} />}>


            </Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
