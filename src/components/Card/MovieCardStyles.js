import styled from "styled-components";
import { motion } from "framer-motion";

export const MovieCardStyled = styled(motion.div)`
  background: var(--box-color);
  width: 300px;
  border-radius: 15px;
  padding: 1rem;
  height: ${(props) =>
    props.favorite ? "calc(100vh / 1.72)" : "calc(100vh / 1.2)"};
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 15px;
  }
  h3 {
    font-weight: 600;
    font-size: 1.3rem;
    flex-grow: 1;
    margin: 10;
    height: 50px;
  }

  .p-movie {
    color: #fcba03;
    font-weight: 500;
    position: absolute;
    left: 20px;
    bottom: 0.5px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .p-votes {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 35px;
  }

  .green {
    color: green;
  }
`;

export const SpanStyled = styled.span`
  color: #666;
  font-size: 1.2rem;
  color: #f51d1d;
  font-weight: 500;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 90px;
`;

export const ButtonStyled = styled.div`
  display: flex;
  position: absolute;
  bottom: 15px;
  right: 25px;
  font-size: 0.9rem;
  gap: 5px;
  align-items: center;

  .i-movie {
    font-size: 1.3rem;
  }
`;

export const FavoriteIconStyled = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 1.5rem;
`;
