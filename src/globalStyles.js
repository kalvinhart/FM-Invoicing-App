import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        vertical-align: baseline;
        font-weight: inherit;
        font-family: inherit;
        font-style: inherit;
        font-size: 100%;
        border: 0 none;
        outline: 0;
        padding: 0;
        margin: 0;
	}

    body {
        font-family: Spartan, sans-serif;
        font-size: 12px;
        line-spacing: 15px;
    }

    h1, h2, h3, h4 {
        margin-bottom: 20px;
    }

    h1 {
        font-size: 32px;
        line-height: 36px;
    }

    h2 {
        font-size: 20px;
        line-height: 22px;
    }

    h3 {
        font-size: 16px;
        line-height: 24px;
    }

    h4 {
        font-size: 12px;
        line-height: 15px;
    }
`;

export default GlobalStyle;
