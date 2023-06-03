import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'
import previewImage from '../../assets/app-preview.png'
export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento Descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendario e permita que as pessoas marquem agendamentos
          no seu tempo livre
        </Text>
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          alt="Preview do aplicativo"
          priority
        />
      </Preview>
    </Container>
  )
}