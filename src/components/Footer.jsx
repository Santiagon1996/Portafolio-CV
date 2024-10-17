import { Box, Flex,  Text, Link, Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Divider />
      <Box as="footer" bg="#0e141b" py={8}>
        
          <Flex justify="space-between" align="center" color="white" >
            <Link onClick={() => navigate("/")} paddingLeft={10}>
              <Text color="white" fontSize="sm">
                &copy; {currentYear} Santiago A. Nardelli
              </Text>
            </Link>
            <Flex justifyContent="space-evenly" fontSize={30} paddingRight={10}>
              <Link
                href="https://www.linkedin.com/in/santiago-a-nardelli/"
                color="white"
                mr={2}
              >
                <SlSocialLinkedin />
              </Link>
              <Link
                href="https://github.com/Santiagon1996?tab=repositories"
                color="white"
              >
                <SlSocialGithub />
                
              </Link>
            </Flex>
          </Flex>
        
      </Box>
    </>
  );
};

export default Footer;
