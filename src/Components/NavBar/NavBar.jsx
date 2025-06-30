import { Menu, X } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 font-extrabold text-[#087096]" : ""
        }
        to="/"
      >
        <li>About</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 font-extrabold text-[#087096]" : ""
        }
        to="/"
      >
        <li>Skills</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 font-extrabold text-[#087096]" : ""
        }
        to="/"
      >
        <li>projects</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "border-b-2 font-extrabold text-[#087096]" : ""
        }
        to="/"
      >
        <li>Contact</li>
      </NavLink>
    </>
  );
  return (
    <div className="sticky top-0 bg-red-400">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full flex items-center justify-between">
            <div className="flex text-[#0f172a]">IHSAN UDDIN KHAN</div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <span className="lg:hidden flex cursor-pointer">
                  {" "}
                  <Menu></Menu>
                </span>
              </label>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal flex gap-5">{links}</ul>
            </div>
            <div className="hidden lg:flex">
              <button className="btn btn-neutral">Hire me</button>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-60 p-4">
            {links}
            <div>
              <button className="btn btn-neutral w-full">Hire me</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
