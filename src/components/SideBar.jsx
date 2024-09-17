import {
  Box,
  Button,
  Link,
  VStack,
  Avatar,
  Icon,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useDisclosure,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ChevronRightIcon, CheckIcon } from "@chakra-ui/icons";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../scss/SideBar.module.scss";

const MotionBox = motion(Box);

const Sidebar = () => {
  const controls = useAnimation();
  const { isOpen, onOpen, onClose } = useDisclosure(); // Hook de discusión para el modal

  const [input, setInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const isError = input === "" || !/\S+@\S+\.\S+/.test(input);
  const isFirstNamesError = firstName.trim() === "";
  const isLastNamesError = lastName.trim() === "";

  useEffect(() => {
    controls.start({
      x: 0,
      transition: { type: "spring", stiffness: 60 },
    });
  }, [controls]);

  return (
    <MotionBox
      className={styles.sidebarContainer}
      initial={{ x: "-100%" }}
      animate={controls}
    >
      <VStack spacing={6} alignItems="flex-start">
        <Avatar
          size="xl"
          name="Christian Nwamba"
          src="https://bit.ly/code-beast"
        />
        <Button
          variant="ghost"
          leftIcon={<ChevronRightIcon />}
          rightIcon={<Link href="#">Sobre Mi</Link>}
        />
        <Button
          variant="ghost"
          leftIcon={<ChevronRightIcon />}
          rightIcon={<Link href="#">Habilidades/Estudios</Link>}
        />
        <Button
          variant="ghost"
          leftIcon={<ChevronRightIcon />}
          rightIcon={<Link href="#">Proyectos</Link>}
        />
      </VStack>
      <Spacer />

      <Box className={styles.btnlike} w="full" p={2} textAlign="center">
        <Icon as={CheckIcon} />
        <Button
          variant="ghost"
          leftIcon={<ChevronRightIcon />}
          rightIcon={
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onOpen();
              }}
            >
              Contacto
            </Link>
          }
        />
      </Box>


      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="600px" minW="400px"  p="20px">
          <ModalHeader>Contact ME</ModalHeader>
          <ModalCloseButton />
          <FormControl isInvalid={isFirstNamesError}>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            {isFirstNamesError} {" "}
            <FormErrorMessage>First name is required.</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={isLastNamesError}>
            <FormLabel>Second name</FormLabel>
            <Input
              placeholder="Second name"
              value={lastName}
              onChange={handleLastNameChange}
            />
            {isLastNamesError && (
              <FormErrorMessage>Second name is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={input} onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Enter the email you d like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button colorScheme="blue">Guardar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default Sidebar;
