"use client"
import { Input } from '../../components/Input';
import { Container, Form } from './styles'

function Login () {
    return (
        <Container>
            <Form>
                <Input label='Email'/>
                <Input label='Password'/>
            </Form>
        </Container>
    )
}

export default Login