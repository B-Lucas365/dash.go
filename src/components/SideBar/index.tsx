import { ButtonsContainer, Flex, Title } from "./styles"
import { Image, NavLink } from "@mantine/core"
import { LuUsers } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineFormatShapes } from "react-icons/md";
import { PiGitForkDuotone } from "react-icons/pi";

export const SideBar = () => {
    const logoFilePath = '/logo.svg'

    return (
        <Flex>
            <Image title="dash.go" src={logoFilePath}/>

            <ButtonsContainer>
                <Title>GERAL</Title>

                <NavLink 
                    label="Dashboard"
                    leftSection={<MdOutlineDashboard size="1.25rem"/>}    
                />
                <NavLink 
                    label="Usuários"
                    leftSection={<LuUsers size="1.25rem"/>}    
                />
            </ButtonsContainer>

            <ButtonsContainer>
                <Title>AUTOMAÇÃO</Title>

                <NavLink 
                    label="Formulários"
                    leftSection={<MdOutlineFormatShapes size="1.25rem"/>}    
                />
                <NavLink 
                    label="Automação"
                    leftSection={<PiGitForkDuotone size="1.25rem"/>}    
                />
            </ButtonsContainer>
        </Flex>
    )
}