'use client'
import { EmailIcon, PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Grid, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import Home from '../Components/Home'

export default function page() {
  return (
    <>
    <Home title='Contact' src='https://mircloudbd.com/miradmin/uploads/ckeditor/2602contact-bg.png' />
    <Box>
      <Container maxW={900} p='100px' >
        <Flex gap='100px' m='auto'>
    <Heading pb='30px' color='black' fontSize='4xl'>CONTACT US</Heading>
    <Grid color='black' fontSize='lg'>
      <Flex>
    <PhoneIcon m='5px' />          
    <Link>+92-308-2220203</Link>
    </Flex>
    <Flex>
    <EmailIcon m='5px' />
      <Link href='https://accounts.google.com/signin'>zia@panacloud.com</Link>
      </Flex>
      <Flex>
        <SearchIcon m='5px' />
      <Link pb='70px' href='https://www.google.com/maps/place/Karachi,+Karachi+City,+Sindh/@25.1932024,67.1554619,10z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e06651d4bbf:0x9cf92f44555a0c23!8m2!3d24.8607343!4d67.0011364!16zL20vMDRjam4'>Karachi, Pakistan</Link>
      </Flex>
      </Grid>
      </Flex>
      </Container>
    </Box>  
    </>
  )
}
