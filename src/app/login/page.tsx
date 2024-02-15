"use client"

import { Button } from '@/components/Button';
import { Input } from '../../components/Input';
import { Container, Form } from './styles'

function Login () {
    return (
        <Container>
            <Form>
                <Input label='E-mail' required={true} type='email'/>
                <Input label='Senha' required={true} type='password'/>
                <Button children='Entrar' />
            </Form>
        </Container>
    )
}

export default Login