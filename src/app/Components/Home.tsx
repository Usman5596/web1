
import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(Hello: any) {
  return (
    <Box bgImage={Hello.src} py='200px' bgSize='cover' bgAttachment='fixed'>
        <Container maxW={1300}>
            <Heading color='black' size='2xl'>{Hello.title}</Heading>
        </Container>
    </Box>
  )
}
