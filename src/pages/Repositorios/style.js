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

export const IssuesList = styled.ul`
  margin-top: 20px;
  padding: 20px;
  list-style: none;
  background: rgba(110, 153, 135, 1);
  border-radius: 5px;

  li {
    display: flex;
    padding: 15px 10px;
    text-align: left;
    justify-content: space-between;
    article {
      display: flex;

      img {
        width: 50px;
        height: 50px;
        border: solid 4px black;
        border-radius: 50%;
      }

      div {
        padding: 0 10px;

        strong {
          a {
            text-decoration: none;
            font-size: 18px;
            color: white;

            &:hover {
              color: rgba(17, 77, 77, 1);
            }
          }

          span {
            padding: 5px;
            background: rgba(17, 77, 77, 1);
            color: white;
            border-radius: 10px;
            padding: 5px;
            margin: 7px;
          }
        }
      }
    }

    p {
      font-size: 16px;
      text-align: right;
      letter-spacing: 2px;
      color: red;
    }
  }
`;

export const ButtonsActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  button {
    background: rgba(17, 77, 77, 1);
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 100%;
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
