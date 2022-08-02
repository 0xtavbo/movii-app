import styled from "styled-components";

export const MovieContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  text-align: center;
  margin: 0 auto;

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    width: 90vw;

    img {
      width: 100%;
    }
  }
`;

export const ImageContainerStyled = styled.div`
  display: flex;
  height: 600px;
`;

export const MovieOverviewContainer = styled.p`
  width: 400px;
  font-size: 1.3rem;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 1rem;
    width: 350px;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
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
