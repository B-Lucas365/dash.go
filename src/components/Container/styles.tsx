'use client'
import styled from 'styled-components'

interface DirectionProps {
    direction: string
}

export const ContainerMain = styled.div<DirectionProps>`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: center;
    align-items: center;
`