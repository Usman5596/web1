"use client";
import { Box, Container, Grid, Heading, Link, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import pana from "../../../public/pana.png"
import { PhoneIcon, EmailIcon, SearchIcon } from '@chakra-ui/icons'

export default function Footer() {
  return (
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
            <Link href="">Home</Link>
            <Link href="">Syllabus</Link>
            <Link href="">Explore</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
            </Grid>
          </Box>
          <Box>
          <Heading pb='30px' color='black' fontSize='3xl'>FOLLOW US</Heading>
            <Grid color='black' fontSize='sm'>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Linkedin</Link>
            <Link href='/'>Twitter</Link>
            <Link href='/'>Youtube</Link>
            <Link href='/'>Github</Link>
            </Grid>
          </Box>
          <Box>
          <Heading pb='30px' color='black' fontSize='3xl'>CONTACT US</Heading>
          <Grid color='black' fontSize='sm'>
            <Flex>
          <PhoneIcon m='5px' />          
          <Link href='/'>+92-308-2220203</Link>
          </Flex>
          <Flex>
          <EmailIcon m='5px' />
            <Link href='/'>usmanclub75@gmail.com</Link>
            </Flex>
            <Flex>
              <SearchIcon m='5px' />
            <Link pb='70px' href='/'>Karachi, Pakistan</Link>
            </Flex>
            <Image src={pana} alt='panacloud' width={125} ></Image>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
