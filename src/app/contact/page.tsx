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
        <Flex gap={{ lg: '100px', base: '10px'}} m='auto' display={{ lg: 'flex', base: 'grid' }}>
    <Heading pb='30px' color='black' fontSize='4xl'>CONTACT US</Heading>
    <Grid color='black' fontSize='lg'>
    <Link pb='5px'>
          <PhoneIcon m='5px' />          
          +92-308-2220203</Link>
          <Link href='https://accounts.google.com/signin' pb='5px'>
          <EmailIcon m='5px' />
            zia@panacloud.com</Link>
            <Link pb='70px' href='https://www.google.com/maps/place/Karachi,+Karachi+City,+Sindh/@25.1932024,67.1554619,10z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e06651d4bbf:0x9cf92f44555a0c23!8m2!3d24.8607343!4d67.0011364!16zL20vMDRjam4'>
              <SearchIcon m='5px' />
            Karachi, Pakistan</Link>
      </Grid>
      </Flex>
      </Container>
    </Box>  
    </>
  )
}
