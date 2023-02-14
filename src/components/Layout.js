import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { ThemeContext } from "../theme-context";

function Layout() {
  const { theme, dark, toggle } = useContext(ThemeContext);
  return (
    <div className="app">
      <nav
        className="navbar flex "
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <h2>Where in the World?</h2>
        <div className="mode_switcher flex">
          <FaRegMoon style={{ cursor: "pointer" }} onClick={toggle} />
          <span>Dark mode</span>
        </div>
      </nav>

      <main
        style={{
          backgroundColor: dark
            ? "var(--dark-mode-bg)"
            : "var(--light-mode-bg)",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
