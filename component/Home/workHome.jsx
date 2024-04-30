import { Box, Text, Flex, Img, useMediaQuery } from '@chakra-ui/react';
import React from 'react'

const WorkHome = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Box>
          <Text p="3rem" fontSize="44px" textAlign="center" fontWeight="600">How the app works</Text>
          <Flex flexWrap={!isLargerThan800 && ("wrap")}>
            {isLargerThan800 && (
              <Box pl="10rem">
                <Img src='/images/home/dev2.png'/>
              </Box>
            )}
            <Box alignSelf="center" pr={isLargerThan800 && ("10rem")} p={!isLargerThan800 && ("2rem")}>
              <Text mb="2rem" textAlign={!isLargerThan800 && ("center")} color="#FA4A0C" fontWeight="700" fontSize="24px">Create an account</Text>
              <Text mb="2rem" textAlign={!isLargerThan800 && ("center")} fontSize="40px" color="#252B42" fontWeight={700}>Create/login to an existing account to get started</Text>
              <Text color="#737373" textAlign={!isLargerThan800 && ("center")} fontWeight={500} fontSize="24px">An account is created with your email and a desired password</Text>
            </Box>
            {!isLargerThan800 && (
              <Box>
                <Img src='/images/home/dev2.png'/>
              </Box>
            )}
          </Flex>

          <Flex justifyContent={isLargerThan800 && ("right")} flexWrap={!isLargerThan800 && ("wrap")}>
            <Box alignSelf="center" p={isLargerThan800 ? ("0rem 5rem 0rem 15rem") : ("3rem")}>
              <Text mb="2rem" color="#FA4A0C" textAlign={!isLargerThan800 && ("center")} fontWeight="700" fontSize="24px">Explore varieties</Text>
              <Text mb="2rem" fontSize="40px" textAlign={!isLargerThan800 && ("center")} color="#252B42" fontWeight={700}>Shop for your favorites meal as e dey hot.</Text>
              <Text color="#737373" textAlign={!isLargerThan800 && ("center")} fontWeight={500} fontSize="24px">Shop for your favorite meals or drinks and enjoy while doing it.</Text>
            </Box>
            <Box pr={isLargerThan800 && ("3rem")}>
              <Img src='/images/home/dev3.png'/>
            </Box>
          </Flex>
          <Flex flexWrap={!isLargerThan800 && ("wrap")}>
            {isLargerThan800 && (              
              <Box pl="10rem">
                <Img src='/images/home/dev4.png'/>
              </Box>
            )}
            <Box alignSelf="center" pr={isLargerThan800 && ("10rem")} p={!isLargerThan800 && ("3rem")}>
              <Text mb="2rem" color="#FA4A0C" textAlign={!isLargerThan800 && ("center")} fontWeight="700" fontSize="24px">Checkout</Text>
              <Text mb="2rem" fontSize="40px" color="#252B42" textAlign={!isLargerThan800 && ("center")} fontWeight={700}>When you done check out and get it delivered.</Text>
              <Text color="#737373" textAlign={!isLargerThan800 && ("center")} fontWeight={500} fontSize="24px">When you done check out and get it delivered with ease.</Text>
            </Box>
            {!isLargerThan800 && (              
              <Box>
                <Img src='/images/home/dev4.png'/>
              </Box>
            )}
          </Flex>
    </Box>
  )
}
export default WorkHome;