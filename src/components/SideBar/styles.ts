"use client"

import { Container, Flex as FlexMantine, Title as TitleMantine } from '@mantine/core'
import styled from 'styled-components'

export const Flex = styled(FlexMantine)`
    width: 14.875rem;
    gap: 3rem;
    height: 100vh;
    flex-direction: column;
    padding-top: 1.5rem;

    .mantine-Image-root {
        width: 6.25rem;
        height: 2rem;
    }

    .mantine-NavLink-root {
        padding: 0;
        background: transparent;
        transition: color .09s;
        font-size: 1rem;
        font-weight: 500 ;
    }
    .mantine-NavLink-root:hover {
        color: var(--color-pink);
    }
`

export const ButtonsContainer = styled(Container)`
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const Title = styled(TitleMantine)`
    font-size: 0.785rem;
    color: var(--text-color-dark);
    margin-bottom: .5rem;
`

