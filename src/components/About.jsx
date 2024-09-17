import { Text, Box, Flex, Image, List, ListItem, Icon } from "@chakra-ui/react";
import styles from "../scss/About.module.scss";
import about from "../assets/home-img.jpg";

const About = () => {
  const works = [
    {
      id: "1",
      title: "We are Spicy",
      description:
       `
        My first approach was to translate the designs and concepts into dynamic and attractive user interfaces using React.js. 
        From creating reusable components to managing application state, I worked on ensuring every interaction is intuitive and efficient. 
        The testing process was constant to identify and resolve usability and performance issues.
      `,
      roles: [
        { id: "1", role: "Front-end Developer" },
        { id: "2", role: "Back-end Developer" },
        { id: "3", role: "UX/UI Designer" },
      ],
    },
    {
      id: "2",
      title: "G.A Properties",
      description:
        `
        Responsible for regularly reviewing and updating the prices of properties listed on the website, ensuring they reflect current market values and are aligned with company policies. 
        I updated and expanded the content of each property, including detailed descriptions, unique features, and benefits, to improve the visibility and attractiveness of the sales listings.
      `,
      roles: [
        { id: "1", role: "Front-end Developer" },
        { id: "2", role: "SEO " },
        { id: "3", role: "Marketing " },
      ],
    },
    {
      id: "3",
      title: "Positano Wines",
      description:
        `
        As an integral part of the team, I was involved in the ongoing maintenance and improvement of existing websites and applications. 
        This involved fixing bugs, optimizing performance, and applying incremental improvements to ensure that our solutions remain relevant and effective over time.
        
        Layout and Front-end Development: I was responsible for converting designs and sketches into precise HTML and CSS code. 
        I worked to ensure that the visual appearance is consistent with the vision of the design, while ensuring responsiveness across different devices and screen resolutions.
      `,

      roles: [
        { id: "1", role: "Front-end Developer" },
        { id: "2", role: "Back-end Developer" },
        { id: "3", role: "SEO " },
      ],
    },
  ];

  return (
    <>
      <Box className={styles.about}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mb={12}
        >
          <Text
            color="white"
            fontSize="8xl"
            fontFamily="DM Serif Text"
            fontWeight="bold"
            textAlign="center"
            mb={8}
          >
            Hey There.
          </Text>

          <Flex
            width="100%"
            maxWidth="1200px"
            mx="auto"
            justifyContent="space-between"
          >
            <Box w="48%">
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
              w="70%"
              color="white"
              fontWeight="bold"
              fontSize="3xl"
              fontFamily="Fira Sans"
            >
              <Text mb={4} mt={8}>
                I’m Santiago Nardelli, a front-end web developer and designer
                based in Barcelona, Spain.
              </Text>
              <Text mb={4}>
                I’ve been building stuff on the web for the last 3 years,
                working with clients across various countries and industries.
              </Text>
              <Text>
                My focus is on creating engaging, accessible & performant. I’m
                always learning new things and experimenting.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="center"
        mr={550}
        alignContent="center"
      >
        <Box
          color="white"
          fontSize="6xl"
          fontFamily="DM Serif Text"
          fontWeight="bold"
          textAlign="center"
          mb={8}
        >
          <Text>Work</Text>
        </Box>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          fontFamily="Fira Sans"
          width={1200}
        >
          <Text ml={350} mb={50}>
            I have experience in building websites, web applications, and mobile
            applications. I have also worked on projects that involve branding,
            marketing, and SEO. I am always looking for new opportunities to
            work. Some of my latest works were:
          </Text>
        </Box>

        {works.map((work) => (
          <Box key={work.id} mb={6} color="white" ml={350}>
            <Text fontWeight="bold" fontSize="xl" color="#0abcc2">
              {work.title}
            </Text>
            <Text mt={2}>{work.description}</Text>
            <List mt={4}>
              {work.roles.map((role) => (
                <ListItem key={role.id}>
                  <Flex alignItems="center">
                    <Icon name="check-circle" color="green.500" mr={2} />
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
          textAlign="center"
          mb={8}
        >
          <Text ml={120}>Speaking</Text>
        </Box>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          fontFamily="Fira Sans"
          width={1200}
        >
          <Text ml={350} mb={50}>
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
          textAlign="center"
          mb={8}
        >
          <Text ml={10}>Offline</Text>
        </Box>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          fontFamily="Fira Sans"
          width={1200}
        >
          <Text ml={350} mb={50}>
            I am a person who enjoys spending time with my family, friends, and
            my dog. I love to travel and explore new places. I am also a fan of
            sports and outdoor activities. I enjoy reading books and watching
            movies in my free time. I am a food lover and enjoy trying new
            dishes and recipes.
          </Text>
        </Box>

        <Box
          color="white"
          fontSize="6xl"
          fontFamily="DM Serif Text"
          fontWeight="bold"
          textAlign="center"
          mb={8}
        >
          <Text ml={30}>Online</Text>
        </Box>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="2xl"
          fontFamily="Fira Sans"
          width={1200}
        >
          <List ml={350}>
            <ListItem>
              <Flex alignItems="center">
                <Icon name="check-circle" color="green.500" mr={2} />
                <Text>GitHub</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <Icon name="check-circle" color="green.500" mr={2} />
                <Text>Linkedin</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <Icon name="check-circle" color="green.500" mr={2} />
                <Text>WhatsApp</Text>
              </Flex>
            </ListItem>
          </List>
        </Box>
      </Flex>
    </>
  );
};

export default About;
