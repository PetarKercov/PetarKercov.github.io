import React, { useState } from "react";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // home / register

  return (
    <div>
      {currentPage === "home" && (
        <Home goToRegister={() => setCurrentPage("register")} />
      )}
      {currentPage === "register" && (
        <Register goToHome={() => setCurrentPage("home")} />
      )}
    </div>
  );
}

export default App;
