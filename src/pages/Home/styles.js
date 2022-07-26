import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  max-height: 700px;
  margin: 80px auto;
  background: #fff;
  padding: 30px;
  border-radius: 7px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input {
    flex: 1;
    border: #222 solid 1px;
    padding: 7px 5px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
`;

//ANIMACAO DO BOTAO
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 5px;
  background: #0d2636;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;

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
