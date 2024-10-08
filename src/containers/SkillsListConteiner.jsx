import styles from "../scss/SkillsContainer.module.scss";
import { Box, Text } from "@chakra-ui/react";
import SkillList from "../components/SkillList";

const SkillsListConteiner = () => {
  
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
      <SkillList />
     
    </>
  );
};

export default SkillsListConteiner;
