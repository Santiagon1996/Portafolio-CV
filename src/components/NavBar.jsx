import React, { useRef, useCallback } from "react";
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
  Icon,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import styles from "../scss/NavBar.module.scss";
import FotoCV2024 from "../assets/FotoCV2024.jpg";
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
        >
          <Button
            ref={btnRef}
            variant="unstyled"
            onClick={handleButtonClick}
            aria-label="Abrir menú"
          >
            <Avatar
              marginLeft="20"
              name="Santiago A. Nardelli"
              size="xl"
              src={FotoCV2024}
              borderRadius="full"
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
        >
          <Box>
            <Flex
              direction="row"
              align="center"
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
                Contact me
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Santiago A. Nardelli</DrawerHeader>

          <Box className="sidebar-container">
            <VStack
              spacing={4}
              align="start"
              bg="gray.200"
              p={5}
              borderRightWidth="1px"
              borderColor="gray.300"
            >
              <Text fontSize="lg" fontWeight="bold" color="blue.600">
                Menu
              </Text>
              <Flex direction="column" align="start" spacing={2}>
                <Button
                  variant="ghost"
                  leftIcon={<Icon as={React.Fragment} />}
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<Icon as={React.Fragment} />}
                  onClick={() => navigate("/skills")}
                >
                  Skills
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<Icon as={React.Fragment} />}
                  onClick={() => navigate("/about")}
                >
                  About
                </Button>
              </Flex>
              <Spacer />
              <HStack spacing={4}>
                <Button variant="outline" colorScheme="blue">
                  Contactame
                </Button>
                <Button variant="outline" colorScheme="red">
                  Like
                </Button>
              </HStack>
            </VStack>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
