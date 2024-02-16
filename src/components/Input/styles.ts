"use client"
import { TextInput as InputMantine } from "@mantine/core"
import styled from "styled-components"

export const TextInput = styled(InputMantine)`
    .mantine-TextInput-input {
        background: var(--bg-dark);
        border: 1px solid var(--bg-dark);
        color: var(--text-color);
        width: 18.6rem;
        height: 3rem;
        
        &:focus {
            border: 1px solid var(--color-pink);
            background: transparent;
        }
    }

    .mantine-TextInput-label {
        color: var(--text-color);
    }

    .mantine-TextInput-required {
        color: var(--color-pink);
    }
`
