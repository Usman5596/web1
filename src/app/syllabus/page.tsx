"use client";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Home from "../Components/Home";

export default function page() {
  return (
    <>
      <Home
        title="Syllabus"
        src="https://i.pinimg.com/originals/4b/59/3d/4b593db4236890321e116e9071f50fa2.jpg"
      />
      <Box textAlign="center">
        <Container maxW={1400} p="40px">
          <Heading textAlign="center" fontSize={{lg:'4xl', base:'3xl'}} pb="15px">
            Course Syllabus
          </Heading>
          <Text textAlign="center">
            The first three quarters are shared by all specialties and are
            dedicated to studying Object-Oriented Programming and cutting-edge
            Full-Stack Web 2.0 development. It is going to be a
            fifteen-month-long hybrid program that includes both onsite and
            online classes and is divided into five quarters of 13 weeks each
          </Text>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400} p="40px">
          <Heading textAlign="center" pb='30px' fontSize={{lg:'4xl', base:'3xl'}}>Common in All Specializations</Heading>
          <Text textAlign="center" pb='50px' >Every participant of the program will start by completing the following three core courses:</Text>
          <Flex display={{lg:'flex',base:'grid'}} gap='15px'>
            <Box
              textAlign="center"
              mx="20px"
              px="60px"
              bg="#fdd835"
              borderRadius={"16px"}
              overflow="hidden"
              boxShadow={
                "0px 20px 25px -5px rgb(0, 0, 0, 0.1), 0px 10px 10px -5px rgb(0, 0, 0, 0.04)"
              }
            >
              <Heading textAlign="center" pt="30px" pb="20px">
                Quarter I
              </Heading>
              <Text textAlign="center" pb="30px">
                CS-101: Object-Oriented Programming using TypeScript and
                Typescript for React
              </Text>
            </Box>
            <Box
              textAlign="center"
              mx="20px"
              px="60px"
              bg="#fdd835"
              borderRadius={"16px"}
              overflow="hidden"
              boxShadow={
                "0px 20px 25px -5px rgb(0, 0, 0, 0.1), 0px 10px 10px -5px rgb(0, 0, 0, 0.04)"
              }
            >
              <Heading textAlign="center" pt="30px" pb="20px">
                Quarter II
              </Heading>
              <Text textAlign="center" pb="30px">
                W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using
                Next.js 13 and Cloud Development Kit (CDK) for Terraform
              </Text>
            </Box>
            <Box
              textAlign="center"
              mx="20px"
              px="60px"
              bg="#fdd835"
              borderRadius={"16px"}
              overflow="hidden"
              boxShadow={
                "0px 20px 25px -5px rgb(0, 0, 0, 0.1), 0px 10px 10px -5px rgb(0, 0, 0, 0.04)"
              }
            >
              <Heading textAlign="center" pt="30px" pb="20px">
                Quarter III
              </Heading>
              <Text textAlign="center" pb="30px">
                $-101: Dollar Making Bootcamp - Full-Stack Template and API
                Product Development
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box textAlign="center">
        <Container maxW={1400} p="40px">
          <Heading fontSize={{lg:'4xl', base:'3xl'}} pb="15px">
          Specialized Tracks
          </Heading>
          <Text>
          After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
          </Text>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400} p="40px">
          <Heading textAlign="center" pb='30px' fontSize={{lg:'4xl', base:'3xl'}}>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
          <Text textAlign="center" pb='50px' >This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.

</Text>
          <Flex display={{lg:'flex',base:'grid'}} gap='15px'>
            <Box
              textAlign="center"
              mx="20px"
              px="60px"
              bg="#fdd835"
              borderRadius={"16px"}
              overflow="hidden"
              boxShadow={
                "0px 20px 25px -5px rgb(0, 0, 0, 0.1), 0px 10px 10px -5px rgb(0, 0, 0, 0.04)"
              }
            >
              <Heading textAlign="center" pt="30px" pb="20px">
              Quarter IV
              </Heading>
              <Text textAlign="center" pb="30px">
              W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
              </Text>
            </Box>
            <Box
              textAlign="center"
              mx="20px"
              px="60px"
              bg="#fdd835"
              borderRadius={"16px"}
              overflow="hidden"
              boxShadow={
                "0px 20px 25px -5px rgb(0, 0, 0, 0.1), 0px 10px 10px -5px rgb(0, 0, 0, 0.04)"
              }
            >
              <Heading textAlign="center" pt="30px" pb="20px">
              Quarter V
              </Heading>
              <Text textAlign="center" pb="30px">
              MV-361: Developing Planet-Scale and Augmented Metaverse Experiences
              </Text>
            </Box>
            </Flex>
            </Container>
            </Box>
    </>
  );
}
