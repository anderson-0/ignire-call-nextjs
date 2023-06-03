import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'
export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="Digite seu nome de usuário"
      />
      <Button size="sm" type="submit">
        Reivindicar
        <ArrowRight />
      </Button>
    </Form>
  )
}
