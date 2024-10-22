import { Text, Box, Flex, Image, List, ListItem } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import styles from "../scss/About.module.scss";
import about from "../assets/home-img.jpg";

const About = () => {
  const works = [
    {
      id: "1",
      title: "We are Spicy",
      description: `
        My first approach was to translate the designs and concepts into dynamic and attractive user interfaces using React.js. 
        From creating reusable components to managing application state, I worked on ensuring every interaction is intuitive and efficient. 
        The testing process was constant to identify and resolve usability and performance issues.
      `,
      roles: [
        { id: "1", role: "Front-End Developer" },
        { id: "2", role: "Back-End Developer" },
        { id: "3", role: "UX/UI Designer" },
      ],
    },
    {
      id: "2",
      title: "G.A Properties",
      description: `
        Responsible for regularly reviewing and updating the prices of properties listed on the website, ensuring they reflect current market values and are aligned with company policies. 
        I updated and expanded the content of each property, including detailed descriptions, unique features, and benefits, to improve the visibility and attractiveness of the sales listings.
      `,
      roles: [
        { id: "1", role: "Front-End Developer" },
        { id: "2", role: "SEO " },
        { id: "3", role: "Marketing " },
      ],
    },
    {
      id: "3",
      title: "Positano Wines",
      description: `
        As an integral part of the team, I was involved in the ongoing maintenance and improvement of existing websites and applications. 
        This involved fixing bugs, optimizing performance, and applying incremental improvements to ensure that our solutions remain relevant and effective over time.
        
        Layout and Front-end Development: I was responsible for converting designs and sketches into precise HTML and CSS code. 
        I worked to ensure that the visual appearance is consistent with the vision of the design, while ensuring responsiveness across different devices and screen resolutions.
      `,

      roles: [
        { id: "1", role: "Front-End Developer" },
        { id: "2", role: "Back-End Developer" },
        { id: "3", role: "SEO " },
      ],
    },
  ];

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={styles.aboutContainer}
      >
        <Flex
          display="inline-block"
          alignItems="center"
          
        >
          <Text
            color="white"
            fontFamily="DM Serif Text"
            fontWeight="bold"
            textAlign="center"
            mb={8}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            className={styles.typingText}
          >
            Hey There.
          </Text>
        </Flex>

        <Flex
          width="100%"
          maxWidth="1200px"
          mx="auto"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box w="48%" className={styles.aboutImage}>
            <Image
              src={about}
              alt="About"
              width={450}
              height="auto"
              objectFit="contain"
              borderRadius="md"
              boxShadow="lg"
              _hover={{ boxShadow: "xl" }}
            />
          </Box>
          <Box
            
            color="white"
            fontWeight="bold"
            
            fontFamily="Fira Sans"
            className={styles.aboutText}
          >
            <Text mb={4} mt={8}>
              I’m Santiago Nardelli, a front-end web developer and designer
              based in Barcelona, Spain.
            </Text>
            <Text mb={4}>
              I’ve been building stuff on the web for the last 3 years, working
              with clients across various countries and industries.
            </Text>
            <Text>
              My focus is on creating engaging, accessible & performant. I’m
              always learning new things and experimenting.
            </Text>
          </Box>
        </Flex>
      </Flex>

       <Flex
        className={styles.workContainer}	
      >
        <Box
          color="white"
          fontSize="6xl"
          fontFamily="DM Serif Text"
          fontWeight="bold"
          alignSelf="flex-start"
          mb={8}
        >
          <Text>Work</Text>
        </Box>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          fontFamily="Fira Sans"
         
        >
          <Text >
            I have experience in building websites, web applications, and mobile
            applications. I have also worked on projects that involve branding,
            marketing, and SEO. I am always looking for new opportunities to
            work. Some of my latest works were:
          </Text>
        </Box>

        {works.map((work) => (
          <Box key={work.id}  color="white" >
            <Text fontWeight="bold" fontSize="xl" color="#0abcc2">
              {work.title}
            </Text>
            <Text mt={2}>{work.description}</Text>
            <List mt={4}>
              {work.roles.map((role) => (
                <ListItem key={role.id}>
                  <Flex alignItems="center">
                    <CheckIcon name="check-circle" color="green.500" mr={2} />
                    <Text>{role.role}</Text>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}

        <Box
          color="white"
          fontSize="6xl"
          fontFamily="DM Serif Text"
          fontWeight="bold"
          alignSelf="flex-start"
          
          
        >
          <Text>Speaking</Text>
        </Box>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          fontFamily="Fira Sans"
          
        >
          <Text >
            Passionate about programming with solid training and constant
            evolution. My fascination for technology and software development
            has prompted me to acquire skills and knowledge to excel in this
            field. Project experience has sharpened my creativity and efficiency
            in resolving issues. Enthusiastic about facing new challenges and
            continuing to learn daily.
          </Text>
        </Box>

        <Box
          color="white"
          fontSize="6xl"
          fontFamily="DM Serif Text"
          fontWeight="bold"
          alignSelf="flex-start"
          
          
        >
          <Text >Offline</Text>
        </Box>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          fontFamily="Fira Sans"
          
        >
          <Text >
            I am a person who enjoys spending time with my family, friends, and
            my dog. I love to travel and explore new places. I am also a fan of
            sports and outdoor activities. I enjoy reading books and watching
            movies in my free time. I am a food lover and enjoy trying new
            dishes and recipes.
          </Text>
        </Box>
      </Flex> 
    </>
  );
};

export default About;
