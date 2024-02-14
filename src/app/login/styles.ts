'use client';

import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background: var(--bg-dark);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    background: var(--color-dark);
    border-radius: .5rem;
    padding: 2rem;

    .mantine-TextInput-input {
        background: var(--bg-dark);
        border: 1px solid var(--color-pink);
        color: var(--text-color);
        width: 18.6rem;

        &:focus {
            border: 1px solid var(--color-pink);
            background: transparent;
        }
    }

    .mantine-TextInput-label {
        color: var(--text-color);
    }
`

