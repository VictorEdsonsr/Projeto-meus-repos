import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html,body, #root{
        min-height: 100%;
    }

    body{
        background: rgb(34, 183, 195);
  background: linear-gradient(0deg,
      rgba(34, 183, 195, 1) 11%,
      rgba(25, 33, 117, 1) 69%);
    }

    body,input,button{
        color:#222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
