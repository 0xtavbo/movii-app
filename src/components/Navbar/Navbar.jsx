import React from 'react'
import { Link } from 'react-router-dom';
import { LinkContainerStyled, LinksContainerStyled, NavbarContainerStyled } from './NavbarStyles';
import { LogoContainerStyled } from './NavbarStyles';
import Logo from '../../assets/logo.png'

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
        <LinksContainerStyled>
          <Link to='/'>
            <LinkContainerStyled
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
            >Home</LinkContainerStyled>
          </Link>
          <Link to={isAuth ? '/discover' : '/login'}>
          <LinkContainerStyled
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
            >{isAuth ? 'Discover' : 'Login'}</LinkContainerStyled>
          </Link>
        </LinksContainerStyled>
      </NavbarContainerStyled>
  )
}

export default Navbar