import { Component } from "react";
import { Menu } from 'react-feather';
import { menuList } from "./navLinks";
import "./nav.css";

class NavBar extends Component{
    render(){
        return(
            <nav className="navItems">
                <h1 className="navLogo">Media<i className="reColor">Rebrand</i></h1>

                <div className="menuIcon">
                    <Menu />
                </div>

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