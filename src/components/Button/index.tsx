'use client';

import React from 'react';
import { ButtonElement } from "./styles"

interface ButtonProps {
    children: string,
}

export const Button = ({ children }: ButtonProps) => {
    return (
        <ButtonElement>
            {children} 
        </ButtonElement>
    );
};