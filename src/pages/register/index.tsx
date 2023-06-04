import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, FormError, Header } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O nome de usuário deve ter pelo menos 3 caracteres' })
    .max(20, { message: 'O nome de usuário deve ter no máximo 20 caracteres' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O nome de usuário deve conter apenas letras e traços',
    }),
  name: z
    .string()
    .min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: '',
      name: '',
    },
  })

  const router = useRouter()

  useEffect(() => {
    const { username } = router.query
    if (typeof username === 'string') {
      setValue('username', username)
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

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
      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuario</Text>
          <TextInput
            prefix="ignite.com/"
            placeholder="Digite seu nome de usuario"
            {...register('username')}
          />
          {errors.username && <FormError>{errors.username.message}</FormError>}
        </label>
        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Digite seu nome" {...register('name')} />
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </label>
        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
