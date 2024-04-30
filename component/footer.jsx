import { Box, Flex, Text, Img, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Flex maxH="10rem" p={isLargerThan800 ? ("5rem"): ("2rem")} alignItems="center" justifyContent={isLargerThan800 ? ("space-between") : ("center")} flexWrap={!isLargerThan800 && ("wrap")}>
        {isLargerThan800 && (<Box><Img src="/images/Logo.png"/></Box>)}
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