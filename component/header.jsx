import { Flex, Box, Img, useMediaQuery, Menu, MenuItem, MenuList, MenuButton, IconButton } from "@chakra-ui/react"

const HamburgerIcon = () => {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.4031 18.0116C20.7893 18.0118 21.1606 18.1605 21.4401 18.427C21.7196 18.6935 21.8858 19.0573 21.9044 19.443C21.923 19.8288 21.7924 20.2069 21.5398 20.499C21.2872 20.7911 20.9319 20.9748 20.5475 21.012L20.4031 21.0191H4.36313C3.97695 21.0189 3.60564 20.8701 3.32615 20.6036C3.04666 20.3371 2.88042 19.9733 2.86186 19.5876C2.8433 19.2018 2.97385 18.8238 3.22647 18.5317C3.47908 18.2396 3.83439 18.0558 4.21877 18.0186L4.36313 18.0116H20.4031ZM20.4031 10.9941C20.8019 10.9941 21.1844 11.1525 21.4664 11.4345C21.7484 11.7165 21.9069 12.099 21.9069 12.4978C21.9069 12.8966 21.7484 13.2791 21.4664 13.5611C21.1844 13.8431 20.8019 14.0016 20.4031 14.0016H4.36313C3.96431 14.0016 3.58182 13.8431 3.29981 13.5611C3.01781 13.2791 2.85938 12.8966 2.85938 12.4978C2.85938 12.099 3.01781 11.7165 3.29981 11.4345C3.58182 11.1525 3.96431 10.9941 4.36313 10.9941H20.4031ZM20.4031 3.97656C20.8019 3.97656 21.1844 4.13499 21.4664 4.417C21.7484 4.69901 21.9069 5.08149 21.9069 5.48031C21.9069 5.87913 21.7484 6.26162 21.4664 6.54362C21.1844 6.82563 20.8019 6.98406 20.4031 6.98406H4.36313C3.96431 6.98406 3.58182 6.82563 3.29981 6.54362C3.01781 6.26162 2.85938 5.87913 2.85938 5.48031C2.85938 5.08149 3.01781 4.69901 3.29981 4.417C3.58182 4.13499 3.96431 3.97656 4.36313 3.97656H20.4031Z"
          fill="#074C98"
        />
      </svg>
    );
  };

const Header = () => {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    return(
        <Box>
            {isLargerThan800 ? (
                <Flex h="10rem" p="1rem" alignItems="center" justifyContent="space-between">
                    <Box pl="3rem"><Img src="/images/Logo.png"/></Box>
                    <Flex fontWeight="600">
                        <Box mr="5rem">Home</Box>
                        <Box mr="5rem">Product</Box>
                        <Box mr="5rem">Faq</Box>
                        <Box mr="5rem">Contact</Box>
                    </Flex>
                </Flex>
            ): (
                <Flex h="10rem" p="1rem" alignItems="center" justifyContent="space-between">
                    <Box pl="3rem"><Img src="/images/Logo.png"/></Box>
                    <Flex>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem>Home</MenuItem>
                                <MenuItem>Product</MenuItem>
                                <MenuItem>Faq</MenuItem>
                                <MenuItem>Contact</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            )}
        </Box>
    )
}
export default Header;