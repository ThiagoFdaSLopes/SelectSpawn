import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body {
        background-image: url('../src/Images/BG.png');
        background-repeat: no-repeat;
        overflow: hidden;
    }
`;