import React from "react";
import "./app.css";
import Header from "./components/Header/Header";
import NavFeed from "./components/NavFeed/NavFeed";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavFeed />
      <Outlet />
    </div>
  );
}

export default App;
