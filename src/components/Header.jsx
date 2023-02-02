import React from "react";
import { Facebook, Instagram } from "react-feather";
import { NavLink } from "react-router-dom";

export default function Header() {
  let activeClassName = "text-cyan-800";

  return (
    <div id="thena197-header">
      <div className="container mx-auto py-2 mb-5">
        <div className="flex justify-between items-center mb-5">
          <div className="border-b-2 border-slate-600 text-2xl text-slate-600">
            ngocanhNguyen
          </div>
          <div className="alt-navbar flex items-center">
            <div>
              <button
                className="p-2 text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100 transition"
                onClick={() => {
                  window.open("https://www.facebook.com/ngocanh.nguyen1997");
                }}
              >
                <Facebook />
              </button>
            </div>
            <div>
              <button
                className="p-2 text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100 transition"
                onClick={() => {
                  window.open("https://www.instagram.com/alittle.na");
                }}
              >
                <Instagram />
              </button>
            </div>
            <div className="mx-3">|</div>
            <div>
              <button className="p-2 text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="nav-container">
          <nav className="flex justify-center items-center gap-6 uppercase">
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              to={`/film-photos`}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Film Photos
            </NavLink>
            <NavLink
              to={`/portrait`}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Portrait
            </NavLink>
            <NavLink
              to={`/travel`}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Travel
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
