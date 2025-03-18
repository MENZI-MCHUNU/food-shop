import React from "react";
import { logo } from "../assets/images";
import { navigationBarLinks } from "../constants";

function Nav() {
  return (
    <header className="">
      <nav className="flex justify-between items-center max-w-7xl ">
        <a href="/">
          <img src={logo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navigationBarLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="leading-normal text-lg text-slate-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
