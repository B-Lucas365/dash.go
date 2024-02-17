import { ReactNode } from "react";
import { ContainerMain } from "./styles";

interface ContainerProps {
    children: ReactNode
}

export default function Container ({children} : ContainerProps) {
    return (
        <ContainerMain>{ children }</ContainerMain>
    )
} 