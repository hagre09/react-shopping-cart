import React from "react";
import './header.css';

import { words } from "../../words";
function Header() {
    return <>
        <header>
        {words.headerTitle}
      </header>
    
    </>
}


export default Header;