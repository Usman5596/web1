import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Instructors() {
  return (
    <Box>
      <Container maxW={1500}>
        <Center>
          <Heading pb='40px'> Our Instructors </Heading>
        </Center>
        <Flex flexDir='row'>
          <Box>
            <Center>
              <Image borderRadius='full' pb='5px' width={90} height={90} src="/zia.png" />
            </Center>
            <Heading textAlign='center' fontSize='2xl' pb='5px'>Zia Khan</Heading>
            <Text px='30px' pb='30px' textAlign='center'>
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
          <Box>
            <Center>
              <Image borderRadius='full' pb='5px' width={90} height={90} src="/zia.png" />
            </Center>
            <Heading textAlign='center' fontSize='2xl' pb='5px'>Zia Khan</Heading>
            <Text px='30px' pb='30px' textAlign='center'>
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
          <Box>
            <Center>
              <Image borderRadius='full' pb='5px' width={90} height={90} src="/zia.png" />
            </Center>
            <Heading textAlign='center' fontSize='2xl' pb='5px'>Zia Khan</Heading>
            <Text px='30px' pb='30px' textAlign='center'>
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
          <Box>
            <Center>
              <Image borderRadius='full' pb='5px' width={90} height={90} src="/zia.png" />
            </Center>
            <Heading textAlign='center' fontSize='2xl' pb='5px'>Zia Khan</Heading>
            <Text px='30px' pb='30px' textAlign='center'>
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
          <Box>
            <Center>
              <Image borderRadius='full' pb='5px' width={90} height={90} src="/zia.png" />
            </Center>
            <Heading textAlign='center' fontSize='2xl' pb='5px'>Zia Khan</Heading>
            <Text px='30px' pb='30px' textAlign='center'>
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
