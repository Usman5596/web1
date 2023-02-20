"use client";
import {
  Box,
  Container,
  SimpleGrid,
  Flex,
  Link,
  Button,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

export default function Header() {
  return (
    <Box boxShadow="lg" bg='#eef4f7'>
      <Container maxW={1500}>
        <SimpleGrid templateColumns={{lg:'repeat(3, 1fr)', base:'repeat(2, 1fr)'}}>
          <Box>
            <Link href='/'>
            <Image src='/dao.png' alt="Panaverse-logo" width={125}></Image>
            </Link>
          </Box>
          <Box display={{ lg: 'initial', base: 'none'}} mt='30px'>
          <Flex 
            placeItems= "center"
            color="black"
            fontSize={20}
            fontWeight='extrabold'
            gap={10}
          >
            <Link href='/'>Home</Link>
            <Link href='/syllabus'>Syllabus</Link>
            <Link href='/explore'>Explore</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </Flex>
          </Box>
          <Box display={{ lg: 'initial', base: 'none'}}>
            <Link href='https://portal.piaic.org/'>
            <Button mt="15px" colorScheme="teal" float="right">
              Apply Now
            </Button>
            </Link>
          </Box>
          <Box display={{lg:'none', base:'initial'}} pt='15px'>
            <Menu>
              <MenuButton float='right'
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Syllabus</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
