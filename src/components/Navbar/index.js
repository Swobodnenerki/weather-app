import React, { useState } from "react";
import {MdMenu} from 'react-icons/md';
import { Logo, MaxWidth, Menu, MenuButton, MenuLink, Nav, MenuItem, SunIcon, LogoText, MenuHref} from "./NavbarElements";

function Navbar( {toggle} ){
  const [navbar,setNavbar] = useState(false);
  
  const changeBackground = () => {
    if(window.scrollY >= 200){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground)
  return(
      <Nav navbar={navbar}>
        <MaxWidth>
          <Logo navbar={navbar} to='home' smooth={true} duration={500} spy={true} exact='true' offset={-90}>
          <SunIcon/> <LogoText>todays weather</LogoText>
          </Logo>
          <Menu>
            <MenuItem><MenuLink navbar={navbar} to='home' smooth={true} duration={500} spy={true} exact='true' offset={-90}>Home</MenuLink></MenuItem>
            <MenuItem><MenuLink navbar={navbar} to='results' smooth={true} duration={500} spy={true} exact='true' offset={-90}>Results</MenuLink></MenuItem>
            <MenuItem><MenuHref href={'https://swobodnenerki.github.io/portfolio/'}>About</MenuHref></MenuItem>
          </Menu>
          <MenuButton onClick={toggle}><MdMenu/></MenuButton>
        </MaxWidth>

      </Nav>
  )
}
export default Navbar;
