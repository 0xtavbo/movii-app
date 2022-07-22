import styled from "styled-components";

export const MovieContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 15px;
  }
`;

export const ButtonStyled = styled.div`
  display: flex;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: gray;
  font-size: 1.2rem;
  text-align: left;
  margin-left: 150px;
  align-items: center;
  width: 150px;

  .arrow-icon {
    font-size: 1.5rem;
    margin-right: 5px;
  }

  &:hover {
    color: white;
  }
`;

export const DetailContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  align-items: center;
`;

export const ImageContainerStyled = styled.div`
  display: flex;
`;

export const MovieOverviewContainer = styled.p`
  width: 400px;
  font-size: 1.3rem;
`;
export const GenresContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
