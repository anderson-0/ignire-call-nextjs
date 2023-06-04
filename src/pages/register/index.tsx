import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informacoes para criar seu perfil! Ah, voce pode
          editar essas informacoes depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as="form">
        <label>
          <Text size="sm">Nome de usuario</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="Digite seu nome de usuario"
          />
        </label>
        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Digite seu nome" />
        </label>
        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
