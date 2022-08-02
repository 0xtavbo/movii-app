import React, {useEffect} from 'react'
import { MenuContainerStyled,
CloseButtonContainerStyled,
CloseButtonStyled,
LinksContainerStyled,
LinkContainerStyled,
AuthContainerStyled } from './ModalMenuStyles';
import { Link } from 'react-router-dom';
import {FiLogOut,FiLogIn} from "react-icons/fi";

const ModalMenu = ({hiddenMenu, isLogged, handleLogout}) => {
  let userLogged = isLogged;

  useEffect(() => {
    userLogged = isLogged ? true : false;
  }, [isLogged])

  const handleModalLogout = () => {
    handleLogout();
    hiddenMenu();
  }

  return (
    <MenuContainerStyled
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ type: 'spring', damping: 27 }}
    >
      <CloseButtonContainerStyled onClick={hiddenMenu}>
        <CloseButtonStyled>
          X
        </CloseButtonStyled>
      </CloseButtonContainerStyled>
      <LinksContainerStyled>
        { userLogged && <Link to='/discover'>
          <LinkContainerStyled onClick={hiddenMenu}>
            Discover
            </LinkContainerStyled>
        </Link> }
        { userLogged && <Link to='/favorites'>
            <LinkContainerStyled onClick={hiddenMenu}>Favorites
            </LinkContainerStyled>
        </Link> }
        <Link to='/login'>
          <AuthContainerStyled onClick={() => handleModalLogout()}>
            {userLogged
              ? <>Logout</>
              : <>Login</>
            }
          </AuthContainerStyled>
        </Link>
      </LinksContainerStyled>
    </MenuContainerStyled>
  )
}

export default ModalMenu