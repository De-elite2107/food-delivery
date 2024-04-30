import { Box, Text, Flex, Button, Img, useMediaQuery } from '@chakra-ui/react';
import React from 'react'

const HomeHero = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Box>
      <Box
      bgImage={isLargerThan800 && ("/images/home/hero.png")}
      bgColor={!isLargerThan800 && ("#FAFAFA")}
      bgRepeat="no-repeat"
      bgSize="100% 100%"
      minH="40rem"
      p="3rem"
      color={isLargerThan800 && ("white")}
      >
        <Text
        textAlign="center"
        fontSize={isLargerThan800 ? "24px" : "16px"}
        fontWeight="700"
        mb="2rem"
        color={!isLargerThan800 && ("#737373")}
        >
          Food app
        </Text>
        <Text
        textAlign="center"
        fontSize={isLargerThan800 ? "53px" : "36px"}
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
        color={!isLargerThan800 && ("#737373")}
        >
          Download the bella onoje’s food app now on
        </Text>
        <Flex gap={3} justifyContent="center" flexWrap="wrap">
          <Button
          mr={isLargerThan800 && ("3rem")}
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
          border={isLargerThan800 ? ("1px solid #FFFFFF") : ("1px solid #FA4A0C")}
          color={isLargerThan800 ? ("white") : ("#FA4A0C")}
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
          pos={isLargerThan800 && ("absolute")}
          src='/images/home/dev1.png'
        />
      </Box>
      <Box w="55rem" border="3px solid #E4E4E4" m="auto">
      </Box>
    </Box>
  )
}
export default HomeHero;