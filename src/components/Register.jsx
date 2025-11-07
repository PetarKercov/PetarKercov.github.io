import React from "react";

function Register({ goToLogin, goToHome }) {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registered (demo)");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" required /><br /><br />
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit" className="registerButton">Register</button>
      </form>
      <p> Already have an account? <button onClick={goToLogin}>Login</button> </p>
        <p> Or go back to <button onClick={goToHome}>Home</button> </p>
    </div>
  );
}

export default Register;
