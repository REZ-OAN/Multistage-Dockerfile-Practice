import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+\.com$/;
    return regex.test(email);
  }
  const handleRegister = () => {
    if (password.length > 6 && isValidEmail(email)) {
        alert("Registration Successful!");
        navigate("/");
    }
    alert("Email or Password not valid!!!")
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default RegistrationPage;
