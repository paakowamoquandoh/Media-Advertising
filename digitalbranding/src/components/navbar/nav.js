import { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, XCircle, Instagram, Facebook, Twitter } from 'react-feather';
import { menuList } from "./navLinks";
import "./nav.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="navItems">
        <h1 className="navLogo">
          Media<i className="reColor">Rebrand</i>
        </h1>

        <div className="menuIcon" onClick={this.toggleMenu}>
          {isMenuOpen ? <XCircle /> : <Menu />}
        </div>

        <ul className={`navMenu ${isMenuOpen ? 'active' : ''}`}>
          {menuList.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            );
          })}
          <ul className="socials">
            <li><Instagram/></li>
            <li><Facebook/></li>
            <li><Twitter/></li>
          </ul>
        </ul>

      </nav>
    );
  }
}

export default NavBar;
