import { ReactNode } from "react";
import { ContainerMain } from "./styles";

interface ContainerProps {
    children: ReactNode,
    direction: "row" | "column"
}

export default function Container ({children, direction} : ContainerProps) {
    return (
        <ContainerMain direction={direction}>{ children }</ContainerMain>
    )
} 