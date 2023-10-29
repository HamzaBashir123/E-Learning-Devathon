import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/SignIn/SignIn";
import SignUP from "./Components/Signup/SignUP";
import MainPage from "./Components/MainPage/MainPage";


function App() {
  return (
    <div className="App">
      <div className="container">
      <Routes>
      <Route path="/" element={<Dashboard />} />
       <Route path="/login" element={<Login />} />
      <Route path="/signUP" element={<SignUP />} />
      <Route path="/mainPage" element={<MainPage />} /> 
    </Routes>
        
      </div>
    </div>
  );
}

export default App;
