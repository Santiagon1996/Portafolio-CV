import {
  VStack,
  Box,
  Text,
  Flex,
  Button,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'; import DownloadButton from "./DownloadButton";
import { useNavigate } from "react-router-dom";



const SideBar = () => {
  const navigate = useNavigate();
  const handleNavigation = (url) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(url);
  };

  //Boton de email
  const handleEmailClick = () => {
    window.location.href =
      "mailto:santiagoanardelli96@gmail.com?subject=Contacto&body=Hola, me gustaría contactarte.";
  };
  return (
    <Box className="sidebar-container">
      <VStack
        spacing={4}
        align="start"
        bgColor="#0e141b;"
        p={5}
        borderRightWidth="1px"
        borderColor="#0e141b;"
      >
        <Text fontSize="lg" fontWeight="bold" color="#0ABCC2">
          Menu
        </Text>
        <Flex direction="column" align="start" spacing={2}>
          <Button
            variant="ghost"
            leftIcon={<ChevronRightIcon />}
            onClick={() => handleNavigation("/")}
            color="whitesmoke"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            leftIcon={<ChevronRightIcon />}
            onClick={() => handleNavigation("/skills")}
            color="#F1FAEE"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
          >
            Skills
          </Button>
          <Button
            variant="ghost"
            leftIcon={<ChevronRightIcon />}
            onClick={() => handleNavigation("/about")}
            color="#F1FAEE"
            _hover={{ backgroundColor: "transparent" }}
            _active={{ backgroundColor: "transparent" }}
          >
            About
          </Button>
        </Flex>
        <Spacer />
        <Flex marginBottom="50px">
          <Text color="whitesmoke" textAlign="center">
          On this site, you can find a little about me, my projects, jobs, hobbies and much more. I am passionate about web development and its scope. Here you will find a selection of my most notable projects, my work and educational experience, and a little more about me. I hope you enjoy your visit!
          </Text>
        </Flex>
        <HStack spacing={4}>
          <Button
            variant="outline"
            colorScheme="#457B9D"
            bgColor="#0ABCC2"
            onClick={handleEmailClick}
          >
            Hire Me
          </Button>
          <DownloadButton />
        </HStack>
      </VStack>
    </Box>
  );
};
export default SideBar;
