import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerStyled = styled(motion.div)`
  display: none;
  z-index: 10000000 !important;
  position: fixed;

  @media (max-width: 400px) {
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 50vw;
    height: 80vh;
    padding: 2rem;
    background-color: var(--box-color);
    border-radius: 0 0 0 1rem;
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
  border: 1px solid;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: var(--bg-color);
`;
