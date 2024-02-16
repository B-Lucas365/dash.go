'use client'

import { Input } from "@/components/Input";
import { Container, Form } from "./styles";
import { Button } from "@/components/Button";

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
