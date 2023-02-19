'use client'
import { Box, Container, Text, Link } from '@chakra-ui/react'
import React from 'react'
import Home from '../Components/Home'

export default function page() {
  return (
    <>
    <Home title='Explore' src='https://thumbs.dreamstime.com/b/new-technology-business-background-model-51401563.jpg' />
    <Box p='70px' bg='#ef535033'>
      <Container maxW={600}>
        <Link href='/'>
        <Text fontSize={{lg:'5xl', base:'3xl'}} fontWeight='hairline' color='#6d4c41' fontStyle='italic' fontFamily='mono' >Back to Home Page</Text>
        </Link>
      </Container>
    </Box>
    </>
  )
}
