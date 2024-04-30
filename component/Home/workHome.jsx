import { Box, Text, Flex, Img } from '@chakra-ui/react';
import React from 'react'

const WorkHome = () => {
  return (
    <Box>
          <Text p="3rem" fontSize="44px" textAlign="center" fontWeight="600">How the app works</Text>
          <Flex>
            <Box pl="10rem">
              <Img src='/images/home/dev2.png'/>
            </Box>
            <Box alignSelf="center" pr="10rem">
              <Text mb="2rem" color="#FA4A0C" fontWeight="700" fontSize="24px">Create an account</Text>
              <Text mb="2rem" fontSize="40px" color="#252B42" fontWeight={700}>Create/login to an existing account to get started</Text>
              <Text color="#737373" fontWeight={500} fontSize="24px">An account is created with your email and a desired password</Text>
            </Box>
          </Flex>

          <Flex justifyContent="right">
            <Box alignSelf="center" pl="15rem" pr="5rem">
              <Text mb="2rem" color="#FA4A0C" fontWeight="700" fontSize="24px">Explore varieties</Text>
              <Text mb="2rem" fontSize="40px" color="#252B42" fontWeight={700}>Shop for your favorites meal as e dey hot.</Text>
              <Text color="#737373" fontWeight={500} fontSize="24px">Shop for your favorite meals or drinks and enjoy while doing it.</Text>
            </Box>
            <Box pr="3rem">
              <Img src='/images/home/dev3.png'/>
            </Box>
          </Flex>
          <Flex>
            <Box pl="10rem">
              <Img src='/images/home/dev4.png'/>
            </Box>
            <Box alignSelf="center" pr="10rem">
              <Text mb="2rem" color="#FA4A0C" fontWeight="700" fontSize="24px">Checkout</Text>
              <Text mb="2rem" fontSize="40px" color="#252B42" fontWeight={700}>When you done check out and get it delivered.</Text>
              <Text color="#737373" fontWeight={500} fontSize="24px">When you done check out and get it delivered with ease.</Text>
            </Box>
          </Flex>
    </Box>
  )
}

export default WorkHome;