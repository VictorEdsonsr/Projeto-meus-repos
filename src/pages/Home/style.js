import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px auto;
  background: #fff;
  max-width: 700px;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 10px 13px -7px #000000, 12px 4px 15px 13px rgba(0, 0, 0, 0);

  h1 {
    display: flex;
    align-items: center;
    font-size: 27px;
    svg {
      margin-right: 5px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  margin: 20px auto;

  input {
    flex: 1;
    border: 1px solid
      ${({ error }) => (error ? "#FF0000" : "rgba(17, 77, 77, 1)")};
    outline: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    padding: 10px 7px;
    font-size: 16px;
  }
`;

//animacao
const animated = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform:rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(({ loading }) => ({
  type: "submit",
  disabled: loading,
}))`
  background: rgba(17, 77, 77, 1);
  padding: 10px;
  cursor: pointer;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ loading }) =>
    loading &&
    css`
      svg {
        animation: ${animated} 2s linear infinite;
      }
    `}
`;

export const DeleteButton = styled.button.attrs({
  type: "button",
})`
  cursor: pointer;
  padding: 7px;
  background: transparent;
`;

export const List = styled.div`
  list-style: none;
  width: 100%;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;

    & + li {
      border-top: 1px solid #eee;
    }

    span {
      display: flex;
      align-items: center;
    }
  }
`;
