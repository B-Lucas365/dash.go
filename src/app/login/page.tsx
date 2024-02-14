"use client"
import { Container, Form } from './styles'
import { TextInput } from '@mantine/core';

function Login () {
    return (
        <Container>
            <Form>
                <TextInput label="Email" radius={6} />
            </Form>
        </Container>
    )
}

export default Login