import { Menu, X } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

import NAV_LINKS from "../../constants/index";

import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="relative flex gap-9 items-center px-8 py-6 justify-between md:justify-center text-white">
        <ul className="hidden md:flex gap-9">
          <li className="nav-link">
            <Link to="/about">about</Link>
          </li>
          <li className="nav-link">
            <Link to="/news">news</Link>
          </li>
        </ul>

        <div className="tracking-widest text-lg leading-8.5">
          <Link to="/">NOIRÉA</Link>
        </div>

        <ul className="hidden md:flex gap-9">
          <li className="nav-link">
            <Link to="/booking">booking</Link>
          </li>
          <li className="nav-link">
            <Link to="/menu">menu</Link>
          </li>
        </ul>

        <button
          className="text-white h-10 w-10 cursor-pointer flex items-center justify-center md:hidden"
          aria-label="toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div
          id="mobile-nav"
          className={clsx(
            "block md:hidden absolute w-full overflow-hidden mt-22 z-50 left-0 top-0 transition-all duration-300",
            menuOpen ? "h-[calc(100vh-88px)]" : "h-0",
          )}
          aria-label="navlist wrapper"
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-col gap-1 px-8 bg-dark">
            {NAV_LINKS.map(({ path, label }) => (
              <li
                key={path}
                className="capitalize font-medium  text-3xl leading-relaxed"
              >
                <Link to={path} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default Header;
