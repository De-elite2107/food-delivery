import { Box, Text, Flex, Button, Img } from '@chakra-ui/react';
import React from 'react'

const HomeHero = () => {
  return (
    <Box>
      <Box
      bgImage="/images/home/hero.png"
      bgRepeat="no-repeat"
      bgSize="100% 100%"
      minH="40rem"
      p="3rem"
      color="white"
      >
        <Text
        textAlign="center"
        fontSize="24px"
        fontWeight="700"
        mb="2rem"
        >
          Food app
        </Text>
        <Text
        textAlign="center"
        fontSize="53px"
        fontWeight="700"
        mb="2rem"
        >
          Why stay hungry when <br/> you can order form Bella Onojie
        </Text>
        <Text
        textAlign="center"
        fontSize="24px"
        fontWeight="500"
        mb="4rem"
        >
          Download the bella onoje’s food app now on
        </Text>
        <Flex justifyContent="center">
          <Button
          mr="3rem"
          fontWeight={700}
          borderRadius="30px"
          bg="#FA4A0C"
          color="white"
          w="15rem"
          >
            Playstore
          </Button>
          <Button
          fontWeight={700}
          borderRadius="30px"
          bg="transparent"
          border="1px solid #FFFFFF"
          color="white"
          w="15rem"
          >
            App store
          </Button>
        </Flex>
      </Box>
      <Box pos="relative" h="40rem">
        <Img
          left= {0}
          right= {0}      
          top={-270}
          m="0 auto"
          // w="10rem"
          pos="absolute"
          src='/images/home/dev1.png'
        />
      </Box>
      <Box w="55rem" border="3px solid #E4E4E4" m="auto">
      </Box>
    </Box>
  )
}
export default HomeHero;