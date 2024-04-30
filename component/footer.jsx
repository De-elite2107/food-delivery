import { Box, Flex, Text, Img } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex h="10rem" alignItems="center" justifyContent="space-around">
        <Box><Img src="/images/Logo.png"/></Box>
        <Flex h="2rem" gap={4}>
            <Img h="20px" src='/images/twitter.png'/>
            <Img h="20px" src='/images/facebook.png'/>
            <Img h="20px" src='/images/instagram.png'/>
        </Flex>
        <Text>Copywright 2024 DNXEMPIRE.com</Text>
    </Flex>
  )
}

export default Footer;