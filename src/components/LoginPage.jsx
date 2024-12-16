import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const registeredUser = {
        email:"ahmedabir@gmail.com",
        password:"abc123",
    }
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
      <p>
      {"Don't have an account?"} <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default LoginPage;
