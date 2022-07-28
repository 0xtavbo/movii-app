import React from 'react'
import { Link } from 'react-router-dom';
import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  SearcherContainerStyled
} from './NavbarStyles';
import { LogoContainerStyled } from './NavbarStyles';
import Logo from '../../assets/logo.png'
import Searcher from '../Searcher/Searcher';

const Navbar = () => {
  const isAuth = localStorage.getItem("token");

  return (
      <NavbarContainerStyled>
        <LogoContainerStyled>
          <Link to='/'>
            <img src={Logo} alt='logo-app' />
          </Link>
          <Link to='/'>
          <h2>Movii</h2>
          </Link>
        </LogoContainerStyled>
        <SearcherContainerStyled>
          <Searcher />
        </SearcherContainerStyled>
        <LinksContainerStyled>
          <Link to={isAuth ? '/discover' : '/login'}>
          <LinkContainerStyled
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
            >{isAuth ? 'Discover' : 'Login'}</LinkContainerStyled>
          </Link>
          <Link to='/favorites'>
            <LinkContainerStyled
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
            >Favorites</LinkContainerStyled>
          </Link>
        </LinksContainerStyled>
      </NavbarContainerStyled>
  )
}

export default Navbar