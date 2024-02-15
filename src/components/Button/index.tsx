'use client';

import React from 'react';
import { ButtonElement } from "./styles"

interface ButtonProps {
    children: string,
    variant: string
}

export const Button = ({ children, variant }: ButtonProps) => {
    return (
        <ButtonElement>
            {children} 
        </ButtonElement>
    );
}; 