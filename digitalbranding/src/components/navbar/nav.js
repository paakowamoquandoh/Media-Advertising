import { Component } from "react";
import "./nav.css";

class NavBar extends Component{
    render(){
        return(
            <nav className="navItems">
                <h1 className="navLogo">Media<i>Rebrand</i></h1>

                <ul className="navMenu">
                    <li>
                        <Link><i class="fa-sharp fa-solid fa-house"></i>Home</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default NavBar;