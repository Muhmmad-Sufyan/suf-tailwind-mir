import { Footer, NavMenu, Navbar } from "./components";
import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.auth);
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
  }, [login]);

  return (
    <>
      <Navbar />
      <hr />
      <NavMenu />
      <div className="w-full h-full mb-[100px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
