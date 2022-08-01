import React from 'react'
import { MdOutlineClose } from 'react-icons/md';
import { ContainerStyled,
CloseButtonContainerStyled,
CloseButtonStyled } from './ModalMenuStyles';

const ModalMenu = ({hiddenMenu}) => {
  return (
    <ContainerStyled
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
      <div>
        <p>DISCOVER</p>
        <p>FAVORITES</p>
        <p>LOGOUT</p>
      </div>
    </ContainerStyled>
  )
}

export default ModalMenu