import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const [colour, setColour] = useState("white")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleBlueDark = () => {
    setColour("#151f59")
    setMode("dark")
    document.body.style.backgroundColor = "#151f59"
    showAlert("Dark mode is enabled!", "success")
    // document.title = "hello"
    // setInterval(() => {
    //   document.title = "hi"
    // }, 2000);
    // setInterval(() => {
    //   document.title = "hoooo"
    // }, 1500);
  }
  // setMode("light")
  // document.body.style.backgroundColor = "white"
  // showAlert("Light mode is enabled!", "success")
  const handleGreenDark = () => {
    setColour("#234b2c")
    setMode("dark")
    document.body.style.backgroundColor = "#234b2c"
    showAlert("Dark mode is enabled!", "success")
  }

  const handleNoDark = () => {
    setMode("light")
    setColour("white")
    document.body.style.backgroundColor = "white"
    showAlert("Light mode is enabled!", "success")
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} handleBlueDark={handleBlueDark} handleGreenDark={handleGreenDark} handleNoDark={handleNoDark} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} colour={colour} />} />
          <Route exact path="/" element={<Textform heading="Enter the text to analyse: " mode={mode} colour={colour} showAlert={showAlert} />} />
        </Routes>

      </div>

    </Router>

  );
}

export default App;
// const handleGreenDark = () => {
//   setColour("#234b2c")
//   if (mode === "light") {
//     setMode("dark")
//     document.body.style.backgroundColor = "#234b2c"
//     showAlert("Dark mode is enabled!", "success")
//   }
//   else {
//     setMode("light")
//     document.body.style.backgroundColor = "white"
//     showAlert("Light mode is enabled!", "success")
//   }
// }