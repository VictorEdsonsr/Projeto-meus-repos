import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        font-family: 'Roboto', sans-serif;

    }

    body,#root,html{
        min-height: 100%;
    }

    body{
        padding:10px;
        background: rgb(17,77,77);
        background: linear-gradient(0deg, rgba(17,77,77,1) 29%, rgba(110,153,135,1) 81%);
    }
`;
