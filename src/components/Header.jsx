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
            <NavLink to={`/`}>ngocanhNguyen</NavLink>
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
          </div>
        </div>
        <div className="nav-container">
          <nav className="flex justify-center items-center gap-5 md:gap-6 uppercase">
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
