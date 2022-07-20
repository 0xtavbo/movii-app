import React from 'react'
import { Link } from 'react-router-dom';
import { LinkContainerStyled, LinksContainerStyled, NavbarContainerStyled } from './NavbarStyles';
import { LogoContainerStyled } from './NavbarStyles';

const Navbar = () => {
  const isAuth = localStorage.getItem("token");

  return (
      <NavbarContainerStyled>
        <LogoContainerStyled>
          <Link to='/'>
            <img src='' alt='logo-app' />
          </Link>
        </LogoContainerStyled>
        <LinksContainerStyled>
          <Link to='/'>
            <LinkContainerStyled
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
            >Home</LinkContainerStyled>
          </Link>
          <Link to={isAuth ? '/list' : '/login'}>
          <LinkContainerStyled
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
            >{isAuth ? 'List' : 'Login'}</LinkContainerStyled>
          </Link>
        </LinksContainerStyled>
      </NavbarContainerStyled>
  )
}

export default Navbar