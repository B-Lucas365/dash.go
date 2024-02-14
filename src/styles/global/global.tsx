"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    :root {
        --bg: #252525;
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