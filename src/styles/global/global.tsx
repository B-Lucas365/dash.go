"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    :root {
        --bg-dark: #181B23;
        --color-dark: #1F2029; 
        --color-pink: #D53F8C; 
        --color-purple: #9F7AEA; 
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
        background-color: #252525;
        color: #fff;
    }

`;

export const GlobalStyles = () => {
  return <Globals />;
};