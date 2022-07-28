import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  max-height: 700px;
  margin: 80px auto;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  h1 {
    align-items: center;
    justify-content: center;
    display: flex;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Form = styled.form`
  margin: 20px auto;
  display: flex;

  input {
    border: solid 1px #0d2636;
    flex: 1;
    padding: 7px 5px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
`;

//animacao
const animated = keyframes`
    from{
        transform:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }

`;

export const SubmitButton = styled.button.attrs(({ loading }) => ({
  type: "submit",
  disabled: loading,
}))`
  background: #0d2636;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${({ loading }) =>
    loading &&
    css`
      svg {
        animation: ${animated} 2s linear;
      }
    `}
`;

export const List = styled.ul`
  margin: 10px auto;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;

    & + li {
      border-top: solid 1px #eee;
    }

    span {
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: "button",
})``;
