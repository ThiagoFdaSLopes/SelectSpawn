import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Gilroy-Medium';
    }

    body {
        /* background: url('../src/Images/bg.png'); */
        /* background-repeat: no-repeat; */
        overflow: hidden;
    }
`;