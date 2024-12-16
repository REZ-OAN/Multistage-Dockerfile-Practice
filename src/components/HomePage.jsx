import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  const [ip, setIp] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIp(data.ip);
      } catch (error) {
        console.error("Failed to fetch IP address:", error);
      }
    };

    fetchIp();
  }, []);

  return (
    <div className="home">
      <h1>Home Page</h1>
      <p>Your IP address is: {ip}</p>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default HomePage;
