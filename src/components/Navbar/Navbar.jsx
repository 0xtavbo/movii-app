import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  SearcherContainerStyled,
  AuthContainerStyled,
  BurgerMenuContainerStyled,
  BurgerIconStyled
} from './NavbarStyles';
import ModalMenu from './ModalMenu/ModalMenu';
import { LogoContainerStyled } from './NavbarStyles';
import Logo from '../../assets/logo.png';
import Searcher from '../Searcher/Searcher';
import {FiLogOut,FiLogIn,FiMenu} from "react-icons/fi";
import { AnimatePresence } from 'framer-motion';

const Navbar = ({handleLogout, isAuth}) => {
  let isLogged = isAuth;
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const hiddenMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

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
        { isLogged && <Link to='/discover'>
          <LinkContainerStyled
                whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
                }}
            >
            Discover
            </LinkContainerStyled>
          </Link> }
          { isLogged &&  <Link to='/favorites'>
            <LinkContainerStyled
              whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
            >Favorites
            </LinkContainerStyled>
          </Link> }
          <Link to='/login'>
            <AuthContainerStyled onClick={handleLogout}>
              {isLogged
                ? <><FiLogOut className='filogout' />Logout</>
                : <><FiLogIn className='filogin' />Login</>
              }
            </AuthContainerStyled>
          </Link>
        </LinksContainerStyled>
        <BurgerMenuContainerStyled>
          <BurgerIconStyled>
            <FiMenu onClick={() => {
              setMenuIsOpen(!menuIsOpen);
              }}/>
          </BurgerIconStyled>
        </BurgerMenuContainerStyled>
        <AnimatePresence>{menuIsOpen
          && <ModalMenu
            hiddenMenu={hiddenMenu}
            isLogged={isLogged}
            handleLogout={handleLogout}
          />}
        </AnimatePresence>
      </NavbarContainerStyled>
  )
}

export default Navbar