"use client";
import { Box, Container, Grid, Heading, Link, SimpleGrid, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, EmailIcon, SearchIcon } from '@chakra-ui/icons'

export default function Footer() {
  return (
    <>
    <Box bg='#eef4f7'>
      <Container maxW={1500} px='50px'>
        <SimpleGrid textAlign={{lg: 'start', base:'center'}} spacing='20px' py='30px' templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
          <Box>
            <Heading pb='15px' color='black' fontSize='3xl'>ABOUT US</Heading>
            <Image src='/logo.png' alt="Panaverse-logo" width={125} m={{base:'auto',lg:'0'}}></Image>
            <Text pt='15px' pr={{lg:'30px',base:'0'}} color='black' fontSize='sm'>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </Text>
          </Box>
          <Box>
            <Heading pb='30px' color='black' fontSize='3xl'>USEFUL LINKS</Heading>
            <Grid color='black' fontSize={{lg:'sm', base:'sm'}} pb='10px'>
            <Link href='/' pb='5px'>Home</Link>
            <Link href='/syllabus' pb='5px'>Syllabus</Link>
            <Link href='/explore' pb='5px'>Explore</Link>
            <Link href='/about' pb='5px'>About</Link>
            <Link href='/contact' pb='5px'>Contact</Link>
            </Grid>
          </Box>
          <Box>
          <Heading pb='30px' color='black' fontSize='3xl'>FOLLOW US</Heading>
            <Grid color='black' fontSize='sm'>
            <Link href='https://www.facebook.com/panaverse.dao/' pb='5px'>Facebook</Link>
            <Link href='https://www.linkedin.com/company/panaverse/' pb='5px'>Linkedin</Link>
            <Link href='https://twitter.com/Panaverse_edu' pb='5px'>Twitter</Link>
            <Link href='https://www.youtube.com/@panaverse' pb='5px'>Youtube</Link>
            <Link href='https://github.com/panaverse' pb='5px'>Github</Link>
            </Grid>
          </Box>
          <Box>
          <Heading pb='30px' color='black' fontSize='3xl'>CONTACT US</Heading>
          <Grid color='black' fontSize='sm'>
          <Link pb='5px'>
          <PhoneIcon m='5px' />          
          +92-308-2220203</Link>
          <Link href='https://accounts.google.com/signin' pb='5px'>
          <EmailIcon m='5px' />
            zia@panacloud.com</Link>
            <Link pb='70px' href='https://www.google.com/maps/place/Karachi,+Karachi+City,+Sindh/@25.1932024,67.1554619,10z/data=!3m1!4b1!4m6!3m5!1s0x3eb33e06651d4bbf:0x9cf92f44555a0c23!8m2!3d24.8607343!4d67.0011364!16zL20vMDRjam4'>
              <SearchIcon m='5px' />
            Karachi, Pakistan</Link>
            <Image src='/pana.png' alt='panacloud' width={125} m={{base:'auto',lg:'0'}}></Image>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    <Box textAlign={{lg: 'center', base:'start'}}
              mx="50px"
              px='30px'
              bg="#fdd835"
              borderRadius={"16px"}
              overflow="hidden"
              boxShadow={
                "0px 20px 25px -5px rgb(0, 0, 0, 0.1), 0px 10px 10px -5px rgb(0, 0, 0, 0.04)"
              }>
      <Container maxW={1300}>
        <Flex pt='5px' pb='5px' gap='10px' fontSize='1xl' fontWeight='bold'>
          <Box>
            <Text>All Rights Reserved © |</Text>
          </Box>
          <Box>
            <Link href='https://github.com/Usman5596'>
              <Text>Usman Adrees</Text>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
    </>
  );
}
