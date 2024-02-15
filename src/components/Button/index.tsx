'use client';

import React from 'react';
import { ButtonElement } from "./styles"

interface ButtonProps {
    text: string,
}

export const Button = ({ text }: ButtonProps) => {
    return (
        <ButtonElement>
            {text}
        </ButtonElement>
    );
}; 