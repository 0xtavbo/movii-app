import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  SearcherContainerStyled,
  AuthContainerStyled
} from './NavbarStyles';
import { LogoContainerStyled } from './NavbarStyles';
import Logo from '../../assets/logo.png'
import Searcher from '../Searcher/Searcher';
import {FiLogOut,FiLogIn} from "react-icons/fi";

const Navbar = ({handleLogout, isAuth}) => {
  let isLogged = isAuth;

  useEffect(() => {
    isLogged = isAuth ? true : false;
  }, [isAuth])

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
          { isLogged && <Searcher />}
        </SearcherContainerStyled>
        <LinksContainerStyled>
          <Link to='/discover'>
            <LinkContainerStyled
                whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
                }}
            >
            Discover
            </LinkContainerStyled>
          </Link>
          <Link to='/favorites'>
            <LinkContainerStyled
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
            >Favorites
            </LinkContainerStyled>
          </Link>
          <Link to='/login'>
            <AuthContainerStyled onClick={handleLogout}>
              {isLogged
                ? <><FiLogOut className='filogout' />Logout</>
                : <><FiLogIn className='filogin' />Login</>
              }
            </AuthContainerStyled>
          </Link>
        </LinksContainerStyled>
      </NavbarContainerStyled>
  )
}

export default Navbar