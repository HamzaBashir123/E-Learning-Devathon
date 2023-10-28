import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/SignIn/SignIn";
// import Profile from "./pages/profile/Profile.jsx";
// import Register from "./pages/register/Register.jsx";


function App() {
  return (
    <div className="App">
      <div className="container">
      <Routes>
      <Route path="/" element={<Dashboard />} />
       <Route path="/login" element={<Login />} />
      {/* <Route path="/profile/:username" element={<Profile />} /> */}
      {/* <Route path="/register" element={<Register />} />  */}
    </Routes>
        
      </div>
    </div>
  );
}

export default App;
