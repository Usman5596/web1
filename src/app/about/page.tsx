"use client";
import { Box, Container, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import Home from "../Components/Home";
import Pre from '../../../public/pre.png'
import Instructors from "../Components/Instructors";
// import Image from "next/image";
// import logo from '../../../public/logo.png'

export default function page() {
  return (
    <>
      <Home
        title="About"
        src="https://cutewallpaper.org/cdn-cgi/mirage/2af0adefb1b7ebf6af3b94bf8b86378693ec8b55d34af727ac0cbb58dfd044f5/1280/28/business-background-wallpaper-hd/2196618961.jpg"
      />
      <Box >
        <Container maxW={1200}>
          <Flex my='50px' gap='25px' px='15px'>
          <Box flexBasis='50%'>
              <Image src='/pre.png' alt='President' mx='auto' pt='30px' />
              </Box>
            <Box flexBasis='50%'>
              <Heading size='2xl'>Dr. Arif Alvi</Heading>
              <Text mt={5}>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</Text>
              <Text mt={5}>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</Text>
              <Text mt={5}>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1200}>
          <Flex my='60px' gap='60px' px='15px'>
            <Box flexBasis='50%'>
              <Heading size='2xl'>Panaverse DAO</Heading>
              <Text mt={5}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet</Text>
              <Text mt={5}>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>
            </Box>
            <Box flexBasis='50%'>
              <Image src='/logo.png' alt='Panavers' width={600} height={330} mx='auto' pt='60px' />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1200}>
          <Flex my='60px' gap='60px' px='15px'>
            <Box flexBasis='50%'>
              <Image src='/zia.png' alt='ziasir' mx='auto' pt='50px'/>
            </Box>
            <Box flexBasis='50%'>
              <Heading size='2xl'>Zia Khan</Heading>
              <Text mt={5}>CEO of Panacloud, the world's first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.</Text>
              <Text mt={5}>Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Instructors />
    </>
  );
}