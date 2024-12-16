import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RegistrationPage from "./components/RegistrationPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/register" element={<RegistrationPage/>}/>
    </Routes>
  );
};

export default App;
