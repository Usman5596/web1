'use client'
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo2.webp'

export default function Banner() {
  return (
    <Box>
        <Container maxW={1500}>
            <Flex pt='150px' pb='100px' px='40px'>
                <Box flexBasis='50%'>
                    <Heading>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                    <Text>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                    <Button>More Info</Button>
                </Box>
                <Box flexBasis='50%'>
                    <Image src= {logo} alt="Panaverse-logo" width={500} height={200}></Image>
                </Box>
            </Flex>
        </Container>
    </Box>
  )
}
