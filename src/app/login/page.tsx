import { Input } from '@mantine/core'
import { Container, Form, Label } from './styles'

function Login () {
    return (
        <Container>
            <Form>
                <Label>E-mail</Label>
                <Input variant="filled"/>
            </Form>
        </Container>
    )
}

export default Login