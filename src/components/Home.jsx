import { Box, Link, Text } from "@chakra-ui/react";
import styles from "../scss/Home.module.scss";
import ItemListConteiner from "../containers/ItemListConteiner";
import { motion } from "framer-motion";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Box className={styles.home}>
        <Link className={styles.combinedEffect}>
          <motion.div
            variants={textVariants}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            initial="hidden"
            animate="visible"
            className={styles.textContainer}
          >
            <Text
              marginLeft="20"
              fontSize="2xl"
              color="#0abcc2;"
              fontWeight="700"
              letterSpacing="1px"
              className={styles.h1}
            >
              Hello, my name is Santiago
            </Text>
          </motion.div>
        </Link>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className={styles.textContainer}
        >
          <Text
            marginLeft="20"
            color="white"
            fontSize="8xl"
            fontFamily="DM Serif Text"
            className={styles.h2}
          >
            I make websites.
          </Text>
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className={styles.textContainer}
        >
          <Text
            marginLeft="20"
            color="white"
            fontSize="4xl"
            className={styles.p}
          >
            I am a front-end developer, passionate about website design and
            production. Lets work together!
          </Text>
        </motion.div>
      </Box>
      <ItemListConteiner />
    </>
  );
};

export default Home;
