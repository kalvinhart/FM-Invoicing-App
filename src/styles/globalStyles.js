import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

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

    html {
        box-sizing: border-box;
    }

    body {
        font-family: Spartan, sans-serif;
        font-size: 12px;
        line-height: 15px;
        background-color: ${(props) => props.theme.backgrounds.body};
    }

    h1, h2, h3, h4 {
        font-weight: bold;
    }

    h1 {
        font-size: 22px;
        line-height: 36px;

        @media only screen and (min-width: 768px) {
            font-size: 32px;
        }
    }

    h2 {
        font-size: 20px;
        line-height: 22px;
    }

    h3 {
        font-size: 12px;
        line-height: 24px;

        @media only screen and (min-width: 768px) {
            font-size: 16px;
        }
    }

    h4 {
        font-size: 12px;
        line-height: 15px;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
