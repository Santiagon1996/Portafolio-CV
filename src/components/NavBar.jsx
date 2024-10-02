import { useRef, useCallback } from "react";
import {
  Drawer,
  Box,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spacer,
  Button,
  VStack,
  Text,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChatIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import styles from "../scss/NavBar.module.scss";
import FotoCV2024 from "../assets/FotoCV2024.jpg";
import DownloadButton from "./DownloadButton";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const navigate = useNavigate();

  //Boton de menú
  const handleButtonClick = useCallback(() => {
    onOpen();
  }, [onOpen]);
  //Boton de email
  const handleEmailClick = () => {
    window.location.href =
      "mailto:santiagoanardelli96@gmail.com?subject=Contacto&body=Hola, me gustaría contactarte.";
  };

  return (
    <>
      <Box className={styles.navbarContainer}>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{
            position: "fixed",
            zIndex: 1000,
          }}
        >
          <Button
            ref={btnRef}
            variant="unstyled"
            onClick={handleButtonClick}
            aria-label="Abrir menú"
          >
            <Image
              marginLeft="20"
              name="Santiago A. Nardelli"
              boxSize="100px"
              imagefit="cover"
              borderRadius="full"
              src={FotoCV2024}
              alt="Foto de perfil de Santiago Nardelli"
              aria-label="Foto de perfil de Santiago Nardelli"
            />
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          style={{
            marginLeft: "auto",
            marginRight: "0px",
          }}
        >
          <Box>
            <Flex
              direction="row"
              align="center"
              marginTop={20}
              w="full"
              className={styles.customButton}
            >
              <ChatIcon />
              <Button
                fontSize="20px"
                variant="unstyled"
                aria-label="Contact"
                ml="20px"
                onClick={handleEmailClick}
              >
                Contact
              </Button>
            </Flex>
          </Box>
        </motion.div>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        className={styles.drawer}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#1D3557">
          <DrawerCloseButton />
          <DrawerHeader
            color="#0ABCC2"
            fontFamily="DM Serif Text"
            letterSpacing="1px"
          >
            Santiago A. Nardelli
          </DrawerHeader>

          <Box className="sidebar-container">
            <VStack
              spacing={4}
              align="start"
              bgColor="#457B9D"
              p={5}
              borderRightWidth="1px"
              borderColor="#E63946"
            >
              <Text fontSize="lg" fontWeight="bold" color="#1D3557">
                Menu
              </Text>
              <Flex direction="column" align="start" spacing={2}>
                <Button
                  variant="ghost"
                  leftIcon={<ChevronRightIcon />}
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<ChevronRightIcon />}
                  onClick={() => navigate("/skills")}
                >
                  Skills
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<ChevronRightIcon />}
                  onClick={() => navigate("/about")}
                >
                  About
                </Button>
              </Flex>
              <Spacer />
              <HStack spacing={4}>
                <Button
                  variant="outline"
                  colorScheme="#457B9D"
                  bgColor="#0ABCC2"
                  onClick={handleEmailClick}
                >
                  Hire Me
                </Button>
                {/* <Popover placement='left-end'>
                  <PopoverTrigger>
                    <Button
                      variant="outline"
                      colorScheme="#457B9D"
                      bgColor="#E63946"
                      rightIcon={<i className="fas fa-download"></i>}
                    >
                      Download CV
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Image
                        src={CvImg}
                        alt="CV"
                        width="100%"
                        height="100%"
                        objectFit="contain"
                      />
                    </PopoverBody>
                  </PopoverContent>
                </Popover> */}
                <DownloadButton />
              </HStack>
            </VStack>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
