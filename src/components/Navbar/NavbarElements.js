import styled from 'styled-components';
import {Link} from 'react-scroll';
import {BsSunFill} from 'react-icons/bs';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 15; //wyzej
    width: 100%;
    padding: 8px 0;
    background-color: ${({navbar}) => (navbar ? '#3C77D0' : 'transparent')};
`

export const MaxWidth = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    @media screen and (max-width: 400px){
        padding: 0 20px;
    }
    
`
export const Logo = styled(Link)`
    background-color: transparent;
    cursor: pointer;
    z-index: 4;
    white-space: nowrap;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoText = styled.h1`
    color: white;
    font-size: 25px;
    font-weight: 400;
    @media screen and (max-width: 400px){
        display: none;
    }
`

export const Menu = styled.ul`
    @media screen and (max-width: 950px){
        display: none;
    }
`
export const MenuItem = styled.li`
    list-style: none;
    display: inline-block;
`

export const MenuLink = styled(Link)`
    color: white;
    font-size: 1.125rem;
    font-weight: 500;
    margin-left: 25px;
    display: flex;
    border: none;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    transition: color 0.3s ease;
    &.active{
        border-bottom: 3px solid #0bceaf;
        border-bottom: ${({navbar}) => (navbar ? '3px solid #ffffff' : '3px solid #3C77D0')};
    }
    &:hover{
        transition: color 0.3s ease;
        color: yellow;
    }

`

export const MenuButton = styled.button`
    display: none;
    @media screen and (max-width: 950px){
      color: white;
      display: block;
      border: none;
      font-size: 1.8rem;
      background-color: transparent;
      outline: 0;
      cursor: pointer;
      transition: color 0.3s ease;
      &:hover{
        color: #0bceaf;
        transition: 0.2s ease-in-out;
    }
    }
`

export const SunIcon = styled(BsSunFill)`
    margin-right: 8px;
    font-size: 2.8rem;
    color: yellow;
`

export const MenuHref = styled.a`
    color: white;
    font-size: 1.125rem;
    font-weight: 500;
    margin-left: 25px;
    display: flex;
    border: none;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    transition: color 0.3s ease;
    text-decoration: none;
    &.active{
        border-bottom: 3px solid #0bceaf;
        
    }
    &:hover{
        transition: color 0.3s ease;
        color: #2196f3;
    }
`



