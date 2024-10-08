import { useRef, useCallback } from "react";
import {
  Drawer,
  Box,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChatIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import styles from "../scss/NavBar.module.scss";
import FotoCV2024 from "../assets/FotoCV2024.jpg";
import SideBar from "./SideBar";
//import { storage } from "../main";


const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  //const [profileImageURL, setProfileImageURL] = useState(null);

  // const getProfileImageURL = async () => {
  //   try {
  //     const snapshot = await storage.ref('FotoCV2024.jpg').getDownloadURL();
  //     return snapshot;
  //   } catch (error) {
  //     console.error('Error obteniendo URL de imagen:', error);
  //     return null; // Retorna null si hay un error
  //   }
  // };
  // useEffect(() => {
  //   const fetchProfileImage = async () => {
  //     const url = await getProfileImageURL();
  //     setProfileImageURL(url);
  //   };
  
  //   fetchProfileImage();
  // }, []);
  
  
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
      <Flex alignItems="center" padding="0px 20px" backgroundColor="#0e141b" justifyContent="space-between">
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
        <HamburgerIcon color="white"boxSize={6} marginTop="60px" />
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
          
        </motion.div>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        className={styles.drawer}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#0e141b">
          <DrawerCloseButton />
          <DrawerHeader
            color="#0ABCC2"
            fontFamily="DM Serif Text"
            letterSpacing="1px"
          >
            Santiago A. Nardelli
          </DrawerHeader>

          <Box className="sidebar-container">
            <SideBar />
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
