import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/*<NavBar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <About /> */}
  {/* <Router> */}
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
         {/* <Switch> */}
          {/* /users--->---> Component 1
          /users/home--->---> Component 2 */}
           {/* <Route exact path="/about">
              <About />
        </Route> */}

       {/* <Route exact path="/">  */}
              <TextForm
                showAlert={showAlert}
                heading="Enter The Text To analyze"
                mode={mode}
              />
          {/*  </Route> */}
         {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
