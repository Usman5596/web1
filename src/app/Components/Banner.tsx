'use client'
import { Box, Button, Container, Flex, Heading, Text, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React, { Component } from 'react'

export default function Banner() {
  return (
    <>
    <Box pb='30px' bgImage='https://rare-gallery.com/uploads/posts/543364-digital-art.jpg' >
        <Container maxW={1400}>
            <Flex gap='35px' pt={{ lg: '70px', base: '30px' }} pb={{lg:'70px',base:'0'}} px={{ lg: '40px', base: '5px' }} display={{ lg: 'flex', base: 'grid' }}>
                <Box flexBasis={{ lg: '50%', base: '0%' }} px={{ lg: '40px', base: '0px' }}>
                    <Heading pb='10px' color='white' fontSize='5xl'>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                    <Text pr='110px' pb='10px' fontWeight='bold' fontStyle='normal' color='black'> One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                    <Link href='/explore'>
                    <Button mt='10px' size='lg' colorScheme='teal'>More Info</Button>
                    </Link>
                </Box>
                <Box mt={{ lg: '-40px', base: '0' }} flexBasis='50%'>
                    <Image src='/logo2.png' alt="Panaverse-logo" width={{ lg: '700', base: '400' }} height={{ lg: '400', base: '300px' }}></Image>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box bgImage='https://images.squarespace-cdn.com/content/v1/609ab6edee5cd929e9a9c9b6/1635435236840-V6V0MGXNCROEH60P1XMD/yellowHex.jpg?format=2500w'>
        <Container maxW={1400}>
        <Flex gap={{ lg: '35px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                <Box flexBasis='50%'>
                <Image src='/logo3.png' alt="Panaverse-logo" width={{ lg: '350', base: '200' }} height={{ lg: '550', base: '400' }}></Image>
                </Box>
                <Box flexBasis='50%' pt={{ lg: '130px', base: '0px' }} px={{ lg: '0', base: '5px' }} pb={{ lg: '0px', base: '10px' }}>
                    <Heading pt='10px'>Program Of Studies</Heading>
                    <Text pr={{lg:'50px',base:"25px"}} pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                    <Link href='/syllabus'>
                    <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
                    </Link>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box pt={{ lg: '100px', base: '50' }} pb={{ lg: '100px', base: '50' }} px={{ lg: '50px', base: '0px' }} bg='#d3d3d336'>
        <Container maxW={800}>
        <Heading textAlign='center' size={{ lg: '3xl', base: '2xl' }} pb={{ lg: '20px', base: '5px' }} color='brown'>The Program in a Nutshell</Heading>
        <Text textAlign='center' fontSize={{ lg: '3xl', base: '2xl' }} fontWeight='bold' pb={{ lg: '20px', base: '5px' }} color='goldenrod'>Earn While You Learn</Text>
        <Text textAlign='center' fontSize='1xl' pb={{ lg: '20px', base: '5px' }} fontStyle='oblique'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
        </Container>
    </Box>
    <Box bg='#ffeb3b73'>
        <Container maxW={1400}>
            <Flex gap='35px' pt={{ lg: '50px', base: '30px' }} pb={{lg:'50px', base:'0'}} px={{ lg: '40px', base: '5px' }} display={{ lg: 'flex', base: 'grid' }}>
                <Box flexBasis={{ lg: '50%', base: '0%' }} px={{ lg: '40px', base: '0px' }}>
                    <Heading pb={{ lg: '10px', base:'10px'}} pt={{ lg: '130px', base:'20px'}} >What Is Panaverse DAO?</Heading>
                    <Text pb={{ lg: '10px', base:'5px'}}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</Text>
                    <Link href='/about'>
                    <Button  mt='10px' size='md' colorScheme='teal'> Read More</Button>
                    </Link>
                </Box>
                <Box flexBasis='50%'>
                    <Image src='/pd.png' alt= 'Panavers Dao' width={{ lg: '350', base: '300' }} height={{ lg: '450', base: '300' }} />
                </Box>
            </Flex>
        </Container>
    </Box>
    </>
  )
}
