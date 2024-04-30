import { Flex, Text, Button, useMediaQuery } from '@chakra-ui/react';
import React from 'react'

const StoreHome = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex
    justifyContent="center"
    flexDirection="column"
    color="white"
    alignItems="center"
    minH="30rem"
    bgImage={isLargerThan800 && ("/images/home/store.png")}
    bgColor={!isLargerThan800 && ("#252B42")}
    bgRepeat="no-repeat"
    bgSize="100% 100%"
    >
        <Text textAlign="center" fontWeight={700} fontSize="40px">Download the app now.</Text>
        {isLargerThan800 ?(<Text mb="3rem" textAlign="center" fontWeight={500} fontSize="24px">Available on your favorite store. Start your premium experience now</Text>) : (<Text mb="3rem" textAlign="center" fontWeight={500} fontSize="24px">Most calendars are designed for teams. </Text>)}
        <Flex justifyContent="center">
          <Button
          mr="1rem"
          fontWeight={700}
          borderRadius="10px"
          bg="#FA4A0C"
          color="white"
          w="10rem"
          >
            {isLargerThan800 ? ("Playstore"): ("Buy now")}
          </Button>
          <Button
          fontWeight={700}
          borderRadius="10px"
          bg="transparent"
          border="1px solid #FFFFFF"
          color="white"
          w="10rem"
          >
            {isLargerThan800 ? ("App store") : ("Try for free")}
          </Button>
        </Flex>
    </Flex>
  )
}

export default StoreHome;