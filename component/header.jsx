import { Flex, Box, Img } from "@chakra-ui/react"

const Header = () => {
    return(
        <Flex h="10rem" p="1rem" alignItems="center" justifyContent="space-between">
            <Box pl="3rem"><Img src="/images/Logo.png"/></Box>
            <Flex fontWeight="600">
                <Box mr="5rem">Home</Box>
                <Box mr="5rem">Product</Box>
                <Box mr="5rem">Faq</Box>
                <Box mr="5rem">Contact</Box>
            </Flex>
        </Flex>
    )
}
export default Header;