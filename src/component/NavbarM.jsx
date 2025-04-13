import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "./Link";

const NavbarM = () => {
  const [open, setOpen] = useState(false);
  const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog",
    },
  ];
  const links = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));
  return (
    <div className="flex justify-between mx-5 items-center mt-2">
      <div className="flex gap-3">
        <span onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
        </span>
        <ul className={`duration-1000 ${open ? 'top-15':'-top-80'} absolute md:hidden text-black bg-blue-300 p-3 space-y-1`}>{links}</ul>
        <h3 className="text-blue-400">Navbar</h3>
      </div>
      <ul className="md:flex hidden gap-3">{links}</ul>
      <button className="btn">Sign In</button>
    </div>
  );
};

export default NavbarM;
