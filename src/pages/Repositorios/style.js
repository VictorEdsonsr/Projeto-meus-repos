import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  margin: 80px auto;
  background: #fff;
  max-width: 700px;

  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 10px 13px -7px #000000, 12px 4px 15px 13px rgba(0, 0, 0, 0);
`;

export const Owner = styled.header`
  img {
    max-width: 150px;
    border-radius: 20%;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 15px;
    color: rgba(17, 77, 77, 1);
  }
`;

export const Loading = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: flex-start;
  background: transparent;
  outline: none;
  border: none;
`;
