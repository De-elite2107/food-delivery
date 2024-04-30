import { Box } from '@chakra-ui/react';
import { Template } from '../component/template';
import HomeHero from '../component/Home/hero';
import WorkHome from '../component/Home/workHome';
import StoreHome from '../component/Home/storeHome';

const Home = () => {
  return (
    <Box>
      <Template>
        <HomeHero/>
        <WorkHome/>
        <StoreHome/>
      </Template>
    </Box>
  );
}
export default Home;