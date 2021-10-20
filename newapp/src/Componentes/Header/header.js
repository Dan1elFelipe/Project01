import React from "react";
import "./header.css";

function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                    <li>Ventas</li>
                    <li>Administración</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;