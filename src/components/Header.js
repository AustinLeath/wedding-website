import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from '../components/App.css';
import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.nameText}>Makayla & Mason</div>
        <Nav className={styles.rowFlex}>
          <NavItem>
            <Link to="/" style={{textDecoration: 'none'}}>
              The Story
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/the-weekend" style={{textDecoration: 'none'}}>
              The Weekend
            </Link>
          </NavItem>
          <NavDropdown title="The Island" id="nav-dropdown">
            <MenuItem>
              <Link to="/the-island/getting-there" style={{textDecoration: 'none'}}>
                Getting There
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/the-island/accomodations" style={{textDecoration: 'none'}}>
                Accomodations
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/the-island/things-to-do" style={{textDecoration: 'none'}}>
                Things to Do
              </Link>
            </MenuItem>
          </NavDropdown>
          <NavItem>
            <Link to="/the-registry" style={{textDecoration: 'none'}}>
              The Registry
            </Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Header;
