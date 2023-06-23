import { Component } from "react";
import { Home } from 'react-feather';
import { menuList } from "./navLinks";
import "./nav.css";

class NavBar extends Component{
    render(){
        return(
            <nav className="navItems">
                <h1 className="navLogo">Media<i>Rebrand</i></h1>

                <ul className="navMenu">
                    {menuList.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <a href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


export default NavBar;