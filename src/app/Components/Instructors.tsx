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
      <Container maxW={{ lg: 1500, base: 1400 }}>
        <Center>
          <Heading pb="40px"> Our Instructors </Heading>
        </Center>
        <Flex flexDir={{ lg: "row", base: "column" }}>
          <Box>
            <Center>
              <Image
                borderRadius="full"
                pb="5px"
                width={90}
                height={90}
                src="/zia.png"
              />
            </Center>
            <Heading textAlign="center" fontSize="2xl" pb="5px">
              Zia Khan
            </Heading>
            <Text px="30px" pb="30px" textAlign="center">
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
          <Box>
            <Center>
              <Image
                borderRadius="full"
                pb="5px"
                width={90}
                height={90}
                src="/zh.jpeg"
              />
            </Center>
            <Heading textAlign="center" fontSize="2xl" pb="5px">
              Zeeshan Hanif
            </Heading>
            <Text px="30px" pb="30px" textAlign="center">
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
          <Box>
            <Center>
              <Image
                borderRadius="full"
                pb="5px"
                width={90}
                height={90}
                src="/dn.png"
              />
            </Center>
            <Heading textAlign="center" fontSize="2xl" pb="5px">
              Daniyal Nagori
            </Heading>
            <Text px="30px" pb="30px" textAlign="center">
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
          <Box>
            <Center>
              <Image
                borderRadius="full"
                pb="5px"
                width={90}
                height={90}
                src="/hk.jpg"
              />
            </Center>
            <Heading textAlign="center" fontSize="2xl" pb="5px">
              Hira Khan
            </Heading>
            <Text px="30px" pb="30px" textAlign="center">
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
          <Box>
            <Center>
              <Image
                borderRadius="full"
                pb="5px"
                width={90}
                height={90}
                src="/ad.jpeg"
              />
            </Center>
            <Heading textAlign="center" fontSize="2xl" pb="5px">
              Adil Altaf
            </Heading>
            <Text px="30px" pb="30px" textAlign="center">
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
