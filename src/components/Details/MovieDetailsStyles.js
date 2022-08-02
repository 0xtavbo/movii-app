import styled from "styled-components";

export const MovieContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    border-radius: 15px;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;

    img {
      height: auto;
      width: auto;
      max-width: 380px;
      max-height: 420px;
      margin-bottom: 15px;
    }
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

  @media (max-width: 400px) {
    margin: 0 auto;
  }
`;

export const DetailContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: 400px) {
    flex-direction: column;
    font-size: 1rem;
    gap: 0px;
    max-width: 300px;
  }
`;

export const ImageContainerStyled = styled.div`
  display: flex;
`;

export const MovieOverviewContainer = styled.div`
  font-size: 1.2rem;
  margin-bottom: 15px;

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const GenreStyled = styled.div`
  background-color: lightblue;
  border-radius: 15px;
  color: black;
  font-weight: 700;
  padding: 0.25rem 0.25rem;
  margin: 5px 5px;
`;

export const ProductionStyled = styled.div`
  background-color: lightcoral;
  border-radius: 15px;
  color: black;
  font-weight: 700;
  padding: 0.25rem 0.25rem;
  margin: 5px 5px;
`;
