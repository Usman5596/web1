"use client";
import { Box, Container, Grid, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";

export default function Footer() {
  return (
    <Box bg='black'>
      <Container maxW={1500}>
        <SimpleGrid spacing='20px' py='30px' templateColumns="repeat(4, 1fr)">
          <Box>
            <Heading pb='15px' color='white'>ABOUT US</Heading>
            <Image src={logo} alt="Panaverse-logo" width={125}></Image>
            <Text pt='15px' pr='30px' color='gray'>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread these technolgies globally.
              It is community of Web 3 and Metaverse developers, designers,
              trainers, startup founders and service providers.
            </Text>
          </Box>
          <Box>
            <Heading pb='30px' color='white'>USEFUL LINKS</Heading>
            <Grid color='gray'>
            <Link href="">Home</Link>
            <Link href="">Syllabus</Link>
            <Link href="">Explore</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
            </Grid>
          </Box>
          <Box>
          <Heading pb='30px' color='white'>FOLLOW US</Heading>
            <Grid color='gray'>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Linkedin</Link>
            <Link href='/'>Twitter</Link>
            <Link href='/'>Youtube</Link>
            <Link href='/'>Github</Link>
            </Grid>
          </Box>
          <Box>
          <Heading pb='30px' color='white'>CONTACT US</Heading>
          <Grid color='gray'>
          <Link href='/'>+92-308-2220203</Link>
            <Link href='/'>usmanclub75@gmail.com</Link>
            <Link href='/'>Karachi, Pakistan</Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
