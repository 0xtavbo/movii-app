import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  SearcherContainerStyled,
  AuthContainerStyled,
  BurgerMenuContainerStyled,
  BurgerIconStyled,
} from './NavbarStyles';
import ModalMenu from './ModalMenu/ModalMenu';
import { LogoContainerStyled } from './NavbarStyles';
import Logo from '../../assets/logo.png';
import Searcher from '../Searcher/Searcher';
import {FiLogOut,FiLogIn,FiMenu, FiHeart} from "react-icons/fi";
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/slices/userSlice';
import { closeMenu, openMenu } from '../../redux/slices/menuSlice';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const dispatch = useDispatch();

  const handleMenu = () => {
    if (isMenuOpen) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }    
  }

  const handleLogout = () => {
    dispatch(signOut());
  }

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
          { isLoggedIn && <Searcher />}
        </SearcherContainerStyled>
        <LinksContainerStyled>
        { isLoggedIn && <Link to='/discover'>
          <LinkContainerStyled
                whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
                }}
            >
            Discover
            </LinkContainerStyled>
          </Link> }
          { isLoggedIn &&  <Link to='/favorites' className='fav-link'>
            <LinkContainerStyled
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
            >
              Favorites
            </LinkContainerStyled>
          </Link> }
          <Link to='/login'>
            <AuthContainerStyled onClick={handleLogout}>
              {isLoggedIn
                ? <><FiLogOut className='filogout' />Logout</>
                : <><FiLogIn className='filogin' />Login</>
              }
            </AuthContainerStyled>
          </Link>
        </LinksContainerStyled>
        <BurgerMenuContainerStyled>
          <BurgerIconStyled>
            <FiMenu onClick={() => {handleMenu()}}/>
          </BurgerIconStyled>
        </BurgerMenuContainerStyled>
        <AnimatePresence>{isMenuOpen
          && <ModalMenu
            hiddenMenu={handleMenu}
            handleLogout={handleLogout}
          />}
        </AnimatePresence>
      </NavbarContainerStyled>
  )
}

export default Navbar