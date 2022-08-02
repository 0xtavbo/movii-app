import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: 400px) {
    row-gap: 1.2rem;
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;
