"use client"

import { TextInput } from "./styles"

interface InputProps {
    label: string,
    placeholder?: string,
    required: boolean,
    type: string
}

export const Input = ({ label, placeholder, required, type }: InputProps) => {
    return (
        <TextInput label={label} required={required} type={type}/>
    )
}