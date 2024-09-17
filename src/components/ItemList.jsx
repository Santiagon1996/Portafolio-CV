import PropTypes from 'prop-types';
import {  GridItem, Box, Text, Image, Heading} from "@chakra-ui/react";
import styles from '../scss/ItemList.module.scss';

const ItemList = ({ card }) => {
 
  return (
    
    <GridItem className={styles.itemCard}>
      <Box
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
      bgImg={card.image}
      bgSize="cover"
      bgPos="center"
    >
      {/* Imagen de fondo */}
      <Image
        src={card.image}
        alt={card.title}
        objectFit="cover"
        w="full"
        h={{ base: "300px", md: "400px" }}
        position="absolute"
        top={0}
        left={0}
        zIndex={-1}
      />

      {/* Contenido superpuesto */}
      <Box p={6} zIndex={1}>
        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          color="white"
          textShadow="2px 2px 4px rgba(0,0,0,0.5)"
          mb={4}
        >
          {card.title}
        </Heading>

        {/* Descripción que aparece al hacer hover */}
        <Box opacity={0} transition="opacity 0.3s ease-in-out">
          <Text color="white" textShadow="2px 2px 4px rgba(0,0,0,0.5)">
            {card.description}
          </Text>
        </Box>
      </Box>

      {/* Efecto de overlay en hover */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0,0,0,0)"
        _hover={{ bg: "rgba(0,0,0,0.9)" }}
        transition="background-color 0.3s ease-in-out"
      >
        <Box opacity={0} transition="opacity 0.3s ease-in-out" _hover={{ opacity: 1 }}>
          <Text color="white" p={6}>
            {card.description}
          </Text>
        </Box>
      </Box>
    </Box>
    </GridItem>
   
  );
};
// Validación de PropTypes
ItemList.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired, // Asegúrate de que 'id' esté aquí si es parte de 'product'
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemList;
