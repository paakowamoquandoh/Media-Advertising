import { Component } from "react";
import "./nav.css";

class NavBar extends Component{
    render(){
        return(
            <nav className="navItems">
                <h1 className="navLogo">Media<i>Rebrand</i></h1>

                <ul className="navMenu">
                    <li>
                        <link>Home</link>
                    </li>
                </ul>
            </nav>
        )
    }
}
