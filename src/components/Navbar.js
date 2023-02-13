import React from "react";
import { Outlet } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";

function Navbar() {
  return (
    <div className="app">
      <navbar className="navbar flex">
        <h2>Where in the World?</h2>
        <div className="mode_switcher flex">
          <FaRegMoon /> <span>Dark mode</span>
        </div>
      </navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
