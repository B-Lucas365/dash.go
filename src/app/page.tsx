'use client'

import { Input } from "@/components/Input";
import { Form } from "./styles";
import { Button } from "@/components/Button";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
        <Form>
            <Input 
                label='E-mail' 
                required={true} 
                type='email'
            />

            <Input 
                label='Senha' 
                required={true} 
                type='password'
            />
            
            <Button text='Entrar'/>
        </Form>
    </Container>
)
} 
