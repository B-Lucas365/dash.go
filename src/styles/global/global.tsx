"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    :root {
        --bg-dark: #181B23;
        --color-dark: #1F2029; 
        --color-pink: #D53F8C; 
        --dark-color-pink: #9E2B63; 
        --color-purple: #9F7AEA; 
        --text-color: #EEEEF2;
        --text-color-dark: #797D9A;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: var(--bg-dark);
        color: #fff;
    }

`;

export const GlobalStyles = () => {
  return <Globals />;
};