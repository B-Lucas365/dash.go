"use client"
import { Button as ButtonMantine} from "@mantine/core"
import styled from "styled-components"

export const ButtonElement = styled(ButtonMantine)`
    width: 18.6rem;
    height: 3rem;
    background: var(--color-pink);
    transition: background .3s;

    &:hover {
        background: var(--dark-color-pink);
    }
`