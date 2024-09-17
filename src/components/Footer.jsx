import {
  Box,
  Flex,
  Container,
  Text,
  Link,
  Divider,
  
} from '@chakra-ui/react';
import { SlSocialLinkedin, SlSocialGithub  } from "react-icons/sl";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <Divider  />
    <Box as="footer" bg="#0e141b" py={8} >
      <Container maxW="container.xl">
          <Flex justify="space-between" align="center" color="white">
            <Text color="white" fontSize="sm">&copy; {currentYear}<Link> Santiago A. Nardelli</Link> </Text>
          
            <Flex justifyContent="space-evenly" fontSize={30}>   
              <Link href="https://www.linkedin.com/in/santiago-a-nardelli/" color="white" mr={2} ><SlSocialLinkedin /></Link>
              <Link href="https://github.com/Santiagon1996?tab=repositories" color="white" ><SlSocialGithub /></Link>
            </Flex>
          </Flex>
        
      </Container>
    </Box>
    </>
  );
};

export default Footer;
