import styled from "styled-components";

export const SearchFormStyled = styled.form`
  gap: 20px;
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
`;

export const InputStyled = styled.input`
  background-color: var(--box-color);
  outline: none;
  border-radius: 15px;
  padding: 0.5rem 2.3rem;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  width: 500px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid gray;
  }

  @media (max-width: 400px) {
    width: 120px;
    border: 1px solid gray;
  }
`;

export const IconWrapperStyled = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  font-size: 1.1rem;
  align-items: center;
  text-align: center;
  font-size: 1.25rem;
`;
