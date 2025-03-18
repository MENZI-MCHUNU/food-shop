import React from "react";
import { logo } from "../assets/images";

function Nav() {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={logo} alt="Logo" width={130} height={29} />
        </a>
      </nav>
    </header>
  );
}

export default Nav;
