import React, { useState } from "react";
import "./App.css";

import Context from "./Context";
import Router from "./Router/Router";

function App() {
  const initalState = {use:false,repos:false};

  const [state, setstate] = useState(initalState);

  return (
    <Context.Provider value={{state, setstate}}>
      <div className="App">
        <div className="container">
          <Router/>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
