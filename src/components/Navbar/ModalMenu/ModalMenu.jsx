import React, {useEffect} from 'react'
import { MenuContainerStyled,
CloseButtonContainerStyled,
CloseButtonStyled,
LinksContainerStyled,
LinkContainerStyled,
AuthContainerStyled,
SearcherContainerStyled
} from './ModalMenuStyles';
import Searcher from '../../Searcher/Searcher';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ModalMenu = ({hiddenMenu, handleLogout}) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

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
      <SearcherContainerStyled>
        { isLoggedIn && <Searcher />}
      </SearcherContainerStyled>
      <LinksContainerStyled>
        { isLoggedIn && <Link to='/discover'>
          <LinkContainerStyled onClick={hiddenMenu}>
            Discover
            </LinkContainerStyled>
        </Link> }
        { isLoggedIn && <Link to='/favorites'>
          <LinkContainerStyled onClick={hiddenMenu}>
            Favorites
          </LinkContainerStyled>
        </Link> }
        <Link to='/login'>
          <AuthContainerStyled onClick={() => handleModalLogout()}>
            {isLoggedIn
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