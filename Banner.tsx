'use client'
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo2.png'
import logo3 from '../../../public/logo3.png'

export default function Banner() {
  return (
    <>
    <Box pb='30px' bgImage='https://rare-gallery.com/uploads/posts/543364-digital-art.jpg' >
        <Container maxW={1600}>
            <Flex pt='100px' pb='70px' px='40px'>
                <Box flexBasis='50%'>
                    <Heading pb='10px' color='white'>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                    <Text pr='110px' pb='10px' fontWeight='bold' fontStyle='normal' color='gold'> One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                    <Button mt='10px' size='lg' colorScheme='teal'>More Info</Button>
                </Box>
                <Box mt='-80px' flexBasis='50%'>
                    <Image src= {logo} alt="Panaverse-logo" width={2500} height={800}></Image>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box bgImage='https://images.squarespace-cdn.com/content/v1/609ab6edee5cd929e9a9c9b6/1635435236840-V6V0MGXNCROEH60P1XMD/yellowHex.jpg?format=2500w'>
        <Container maxW={1600}>
        <Flex pt='100px' pb='70px' px='40px'>
                <Box flexBasis='50%'>
                <Image src= {logo3} alt="Panaverse-logo" width={450} height={200}></Image>
                </Box>
                <Box flexBasis='50%' pt='80px'>
                    <Heading pt='10px'>Program Of Studies</Heading>
                    <Text pr='50px' pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                    <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box pt='100px' pb='100px' px='50px' bg='#d3d3d336'>
        <Container maxW={800}>
        <Heading textAlign='center' size='3xl' pb='20px' color='brown'>The Program in a Nutshell</Heading>
        <Text textAlign='center' fontSize='3xl' fontWeight='bold' pb='20px' color='goldenrod'>Earn While You Learn</Text>
        <Text textAlign='center' fontSize='1xl' pb='20px' fontStyle='oblique'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
        </Container>

    </Box>
    </>
  )
}
