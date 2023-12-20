import React from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"

import Header from "./components/header/Header";
import Form from "./components/post/Form";
import Dialog from "./components/dialog/Dialog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="App">
          <Header />
          <div >
            <Routes>
              <Route path="/Dialog" Component={Dialog} />
              <Route path="/Form" Component={Form} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
