import React , { useState } from "react";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import { ProfileMenu } from "./context/ProfileMenu";

function App() {
  const [email, emailupdate] = useState('');
  const [password, passwordupdate] = useState('');
  const [checkRole, checkRoledupdate] = useState(false);
  const [checkLogin, checkLogindupdate] = useState(false);
  return (
    <div>
      <BrowserRouter>
      <ProfileMenu.Provider value={{emailupdate, passwordupdate, email, password, checkRole, checkRoledupdate, checkLogin, checkLogindupdate}}>    
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        </ProfileMenu.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
