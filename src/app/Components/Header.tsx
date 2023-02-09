'use client'
import { Box, Container, SimpleGrid, Flex, Link, Button } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/Logo.png'

export default function Header() {
  return (
   <Box boxShadow='lg'>
    {/* <Container > */}
        <SimpleGrid templateColumns='repeat(3, 1fr)'>
            <Box>
                <Image src={logo} alt='Panaverse-logo' width={125}></Image>
            </Box>
            <Flex placeItems='center' color='black' fontSize={15} fontWeight='semibold' gap={10}>
                <Link href=''>Home</Link>
                <Link href=''>Syllabus</Link>
                <Link href=''>Explore</Link>
                <Link href=''>About</Link>
                <Link href=''>Contact</Link>
            </Flex>
            <Box>
                <Button mt='10px' m='5px' colorScheme='teal' float='right'>Apply</Button>
            </Box>
        </SimpleGrid>
    {/* </Container> */}
   </Box>
  )
}
