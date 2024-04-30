import { Flex, Text, Button } from '@chakra-ui/react';
import React from 'react'

const StoreHome = () => {
  return (
    <Flex
    justifyContent="center"
    flexDirection="column"
    color="white"
    alignItems="center"
    minH="30rem"
    bgImage="/images/home/store.png"
    bgRepeat="no-repeat"
    bgSize="100% 100%"
    >
        <Text textAlign="center" fontWeight={700} fontSize="40px">Download the app now.</Text>
        <Text mb="3rem" textAlign="center" fontWeight={500} fontSize="24px">Available on your favorite store. Start your premium experience now</Text>
        <Flex justifyContent="center">
          <Button
          mr="1rem"
          fontWeight={700}
          borderRadius="10px"
          bg="#FA4A0C"
          color="white"
          w="10rem"
          >
            Playstore
          </Button>
          <Button
          fontWeight={700}
          borderRadius="10px"
          bg="transparent"
          border="1px solid #FFFFFF"
          color="white"
          w="10rem"
          >
            App store
          </Button>
        </Flex>
    </Flex>
  )
}

export default StoreHome;