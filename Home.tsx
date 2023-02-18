import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(hello: any) {
  return (
    <Box bgImage={hello.src} py='230px' bgSize='cover' bgAttachment='fixed'>
        <Container maxW={1100}>
            <Heading color='#f56565d9' size='4xl'>{hello.title}</Heading>
        </Container>
    </Box>
  )
}
