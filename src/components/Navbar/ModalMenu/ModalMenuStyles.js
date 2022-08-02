import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuContainerStyled = styled(motion.div)`
  display: none;
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  gap: 30px;
  width: 45vw;
  height: 100vh;
  padding: 2rem;
  background-color: var(--box-color);
  border-radius: 0 0 0 1rem;
  font-size: 1.5rem;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const CloseButtonContainerStyled = styled.div`
  display: flex;
  justify-content: left;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: transparent;
  font-size: 1.5rem;
`;

export const LinksContainerStyled = styled.div`
  color: white;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-size: 1.5rem;

  a {
    padding: 1rem 1.5rem;
  }
`;

export const LinkContainerStyled = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const AuthContainerStyled = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  width: 100px;
  font-size: 1.5rem;

  .filogout,
  .filogin {
    margin-right: 5px;
  }
`;
