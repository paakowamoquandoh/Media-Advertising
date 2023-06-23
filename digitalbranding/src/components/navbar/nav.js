import { Component } from "react";
import {Link} from "react-router-dom";
import "./nav.css";

class NavBar extends Component{
    render(){
        return(
            <nav className="navItems">
                <h1 className="navLogo">Media<i>Rebrand</i></h1>

                <ul className="navMenu">
                    <li>
                        <a><i class="fa-sharp fa-solid fa-house"></i>Home</a>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default NavBar;