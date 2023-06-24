import React, { Component, useState } from 'react';
import { Menu, XCircle } from 'react-feather';
import { menuList } from "./navLinks";
import "./nav.css";

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isMenuOpen: false,
        };
      }
    
      toggleMenu = () => {
        this.setState(prevState => ({
          isMenuOpen: !prevState.isMenuOpen,
        }));
      };

    render(){
        const { isMenuOpen } = this.state;

        return(
            <nav className="navItems">
                <h1 className="navLogo">Media<i className="reColor">Rebrand</i></h1>

                <div className="menuIcons" onClick={this.toggleMenu}>
                    {isMenuOpen ? <XCircle /> : <Menu />}
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