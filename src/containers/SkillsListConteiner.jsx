import styles from "../scss/Skills.module.scss";
import { Box, Text } from "@chakra-ui/react";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import SkillList from "../components/SkillsList";
import CardGrid from "../components/CardGrid";

const SkillsListConteiner = () => {
  // const skills = {
  //   frontEnd: ["HTML", "CSS", "Bootstrap", "Tailwind", "Sass", "JavaScript", 
  //     "React", "Vite", "Context", "Redux", "Next.js", "Chakra UI", 
  //     "Material-UI", "Framer", "Figma"],
  //   backEnd: ["Node.js", "Express", "MongoDB", "MySQL", "Socket.io", "Mongoose", 
  //     "RESTful APIs"],
  //   tools: ["Git", "GitHub", "VS Code", "Postman", "Firebase Hosting", "Netlify", 
  //     "Chrome DevTools", "WebStorm", "Photoshop", "Illustrator"],
  //   languages: ["Spanish", "English", "Italian"]
  // };

  // const [activeSkill, setActiveSkill] = useState(null);

  return (
    <>
      <Box className={styles.skills}>
        <Text
            color="white"
            fontSize="8xl"
            fontFamily="DM Serif Text"
            fontWeight="bold"
            textAlign="center"
            mb={8}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            className={styles.typingText}
        >
          Skills.
        </Text>
      </Box>
      <CardGrid />
      {/* <Flex direction="row" justify="space-around" align="stretch" gap={2}>
        {Object.keys(skills).map((skillType) => (
          <Box key={skillType} p={4}>
            <motion.button
              className={styles.button}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
              onClick={() => setActiveSkill(skillType)}
            >
              {skillType.charAt(0).toUpperCase() + skillType.slice(1)}
            </motion.button>
            {activeSkill === skillType && <SkillList skills={skills[skillType]}  />}
          </Box>
        ))}
      </Flex> */}
    </>
  );
};

export default SkillsListConteiner;
