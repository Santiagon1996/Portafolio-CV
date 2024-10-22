import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "../scss/SkillList.module.scss";
import { motion } from "framer-motion";

const SkillList = () => {
  const skills = {
    frontEnd: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "Sass",
      "JavaScript",
      "React",
      "Vite",
      "Context",
      "Redux",
      "Next.js",
      "Chakra UI",
      "Material-UI",
      "Framer",
      "Figma",
    ],
    backEnd: [
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "Socket.io",
      "Mongoose",
      "RESTful APIs",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Firebase Hosting",
      "Netlify",
      "Chrome DevTools",
      "WebStorm",
      "Photoshop",
      "Illustrator",
    ],
    languages: ["Spanish", "English", "Italian"],
  };
  return (
    <>
      <Flex
        height="100%"
        bg="#0e141b"
        p={{ base: 2, md: 4, lg: 4 }}
        mb={{ base: 4, md: 8, lg: 12 }}
      >
        <Flex
          direction={{ base: "column", md: "row", lg: "row" }}
          align="center"
          justify="space-around"
          w="100%"
          gap={{ base: 4, md: 6, lg: 6 }}
        >
          <Box
            className={styles.box}
            flex={1}
            color="white"
            p={4}
            mb={{ base: 4, md: 0 }}
            backgroundColor="#0e141b"
          >
            <motion.div
              className={styles.titles}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
            >
              Front-End
            </motion.div>
            {/* Descripción que aparece al hacer hover */}
            <Box className={styles.overlay}>
              <Text color="white">{skills.frontEnd.join(", ")}</Text>
            </Box>
          </Box>
          <Box
            className={styles.box}
            flex={1}
            color="white"
            p={4}
            backgroundColor="#0e141b"
          >
            <motion.div
              className={styles.titles}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
            >
              Back-End
            </motion.div>
            {/* Descripción que aparece al hacer hover */}
            <Box className={styles.overlay}>
              <Text color="white">{skills.backEnd.join(", ")}</Text>
            </Box>
          </Box>
          <Box
            className={styles.box}
            flex={1}
            color="white"
            p={4}
            backgroundColor="#0e141b"
          >
            <motion.div
              className={styles.titles}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
            >
              Tools
            </motion.div>
            {/* Descripción que aparece al hacer hover */}
            <Box className={styles.overlay}>
              <Text color="white">{skills.tools.join(", ")}</Text>
            </Box>
          </Box>
          <Box
            className={styles.box}
            flex={1}
            color="white"
            p={4}
            backgroundColor="#0e141b"
          >
            <motion.div
              className={styles.titles}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
            >
              Lenguages
            </motion.div>
            {/* Descripción que aparece al hacer hover */}
            <Box className={styles.overlay}>
              <Text color="white">{skills.languages.join(", ")}</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default SkillList;
