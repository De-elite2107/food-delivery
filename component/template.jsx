import Header from "./header";
import { Box } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import Footer from "./footer";

const _Montserrat = Montserrat({ subsets: ["latin"] });  
export const Template = (props) => {
    return (
        <Box className={_Montserrat.className}>
        <Header/>
            {props.children}
        <Footer/>
        </Box>
    );
};