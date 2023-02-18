import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(hello: any) {
  return (
    <Box bgImage={hello.src} py='230px' bgSize='cover' bgAttachment='fixed'>
        <Container maxW={1225}>
            <Heading color='#ff3b30de' pt='40px' size='4xl'>{hello.title}</Heading>
        </Container>
    </Box>
  )
}
