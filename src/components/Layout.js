import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";

function Layout() {
  const [theme, setTheme] = useState("light");

  console.log(theme);
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  // use the localStorage API to store the data, if you want the theme to persist across page refreshes, you can.

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <nav className={`navbar flex ${theme}`}>
        <h2>Where in the World?</h2>
        <div className="mode_switcher flex">
          <FaRegMoon style={{ cursor: "pointer" }} onClick={toggleTheme} />{" "}
          <span>Dark mode</span>
        </div>
      </nav>
      <main
        style={{
          backgroundColor:
            theme === "light" ? "var(--light-mode-bg)" : "var(--dark-mode-bg)",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
