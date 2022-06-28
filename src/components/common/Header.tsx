import React, { memo, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo, MoonIcon, SunIcon } from "../icons";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    dark ? html?.classList.add("dark") : html?.classList.remove("dark");
  }, [dark]);

  const handleClick = () => {
    setOpen(!open);
  };

  const darkModeButton = () => {
    if (dark) {
      return (
        <button
          onClick={() => setDark(false)}
          className="md:ml-auto inline-flex text-primary-500 items-center bg-transparent border-0 p-2 focus:outline-none hover:bg-transparent rounded text-base font-bold"
        >
          <SunIcon />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setDark(true)}
          className="md:ml-auto inline-flex items-center bg-transparent border-0 p-2 focus:outline-none hover:bg-transparent rounded text-base text-primary-500 font-bold"
        >
          <MoonIcon />
        </button>
      );
    }
  };

  return (
    <nav className="dark:bg-transparent text-gray-600 shadow-md bg-white/30 body-font backdrop-blur-md dark:backdrop-blur-md z-50 sticky top-0">
      <div className="container px-5 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <NavLink
              className="flex text-2xl font-bold text-primary-700 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              to="/"
            >
              <Logo />
              <span className="ml-3">Posts</span>
            </NavLink>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className={`items-center md:flex ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col md:flex-row md:mx-6 my-5 md:my-auto">
            <Link
              className="my-1 text-sm font-medium text-primary-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 md:mx-4 md:my-0"
              to="/post/add"
            >
              Add Post
            </Link>
          </div>

          <div className="flex justify-center md:block">
            <a
              className="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              {darkModeButton()}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Header);
