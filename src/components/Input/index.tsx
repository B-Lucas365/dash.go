"use client"

import {TextInput } from "./styles"

interface InputProps {
    label: string,
    placeholder?: string
}

export const Input = ({label, placeholder}: InputProps) => {
    return (
        <TextInput label={label} />
    )
}