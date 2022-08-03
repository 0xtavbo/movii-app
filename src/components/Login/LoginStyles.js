import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const LoginContainerStyled = styled.div`
  background-color: var(--gray-bg);
  width: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0.5rem;
  gap: 0.5rem;
`;

export const LoginButtonStyled = styled.button`
  background-color: var(--text-secondary);
  border: 1px solid white;
  white-space: nowrap;
  color: black;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  border-radius: 25px;
  user-select: none;
  padding: 0.7rem 2rem;
  margin: 1rem;
  transition: all 0.1s ease-in;
`;

export const InputStyled = styled.input`
  width: 250px;
  height: 100%;
  max-height: 40px;
  outline: none;
  border: none;
  border-radius: 15px;
  background: none;
  min-height: 35px;
  padding: 0 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  color: black;
  background-color: white;
`;

export const TitleStyled = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  color: white;
`;
