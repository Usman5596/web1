"use client";
import { Box, Container, Grid, Heading, Link, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import pana from "../../../public/pana.png"
import { PhoneIcon, EmailIcon, SearchIcon } from '@chakra-ui/icons'

export default function Footer() {
  return (
    <>
    <Box bg='#eef4f7'>
      <Container maxW={1500} px='50px'>
        <SimpleGrid textAlign={{lg: 'start', base:'center'}} spacing='20px' py='15px' templateColumns="repeat(4, 1fr)">
          <Box>
            <Heading pb='15px' color='black' fontSize='3xl'>ABOUT US</Heading>
            <Image src={logo} alt="Panaverse-logo" width={125}></Image>
            <Text pt='15px' pr='30px' color='black' fontSize='sm'>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </Text>
          </Box>
          <Box>
            <Heading pb='30px' color='black' fontSize='3xl'>USEFUL LINKS</Heading>
            <Grid color='black' fontSize='sm'>
            <Link href='/'>Home</Link>
            <Link href='/syllabus'>Syllabus</Link>
            <Link href='/explore'>Explore</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            </Grid>
          </Box>
          <Box>
          <Heading pb='30px' color='black' fontSize='3xl'>FOLLOW US</Heading>
            <Grid color='black' fontSize='sm'>
            <Link href='https://www.facebook.com/panaverse.dao/'>Facebook</Link>
            <Link href='https://www.linkedin.com/company/panaverse/'>Linkedin</Link>
            <Link href='https://twitter.com/Panaverse_edu'>Twitter</Link>
            <Link href='https://www.youtube.com/@panaverse'>Youtube</Link>
            <Link href='https://github.com/panaverse'>Github</Link>
            </Grid>
          </Box>
          <Box>
          <Heading pb='30px' color='black' fontSize='3xl'>CONTACT US</Heading>
          <Grid color='black' fontSize='sm'>
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
            <Image src={pana} alt='panacloud' width={125} ></Image>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    <Box textAlign="center"
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
