'use client'
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo2.webp'
import logo3 from '../../../public/logo3.png'

export default function Banner() {
  return (
    <>
    <Box>
        <Container maxW={1500}>
            <Flex pt='150px' pb='100px' px='40px'>
                <Box flexBasis='50%' pt='80px'>
                    <Heading size='2xl'>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                    <Text pr='50px' pt='10px'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                    <Button mt='10px' size='lg' colorScheme='teal'>More Info</Button>
                </Box>
                <Box flexBasis='50%'>
                    <Image src= {logo} alt="Panaverse-logo" width={500} height={200}></Image>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1500}>
            <Flex pt='150px' pb='100px' px='40px'>
                <Box flexBasis='50%'>
                <Image src= {logo3} alt="Panaverse-logo" width={450} height={200}></Image>
                </Box>
                <Box flexBasis='50%' pt='80px'>
                    <Heading size='2xl'>Program Of Studies</Heading>
                    <Text pr='50px' pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                    <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    </>
  )
}
