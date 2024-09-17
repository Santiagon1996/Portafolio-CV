import { useState, useEffect, useMemo } from "react";
import { Box, Button, Flex,Text, Spinner, Alert, Grid } from "@chakra-ui/react";
import ItemList from "../components/ItemList";
import styles from '../scss/ItemListContainer.module.scss';

const ItemListContainer = () => {
    const [cards, setCards] = useState([]);// Estado para almacenar los productos
    const [filter, setFilter] = useState("All"); // Estado para la categoría seleccionada
    const [categories, setCategories] = useState([]); // Estado para almacenar las categorías únicas
    const [error, setError] = useState(null);// Estado para manejar errores
    const [isLoading, setIsLoading] = useState(true);// Estado para manejar la carga de productos


    // Fetch de productos
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
   
            try {
              const response = await fetch("https://fakestoreapi.com/products");
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setCards(data);

              // Obtiene todas las categorías únicas de los productos
              const uniqueCategories = [...new Set(data.map(item => item.category))];
              setCategories(uniqueCategories);
        
              // Manejo de errores
            } catch (error) {
              console.error("Error:", error);
              setError(error.message || 'An unknown error occurred');
            }finally {
            setIsLoading(false);
            }
        };
          // Llamado a la función fetchData
          fetchData();
      }, []);

    const handleCategoryChange = (category) => {
      setFilter(category); // Actualiza el estado de filter con la categoría seleccionada
    };

    // Filtrado de tarjetas basado en el estado actual de filter
    const filteredCards = useMemo(() => {
        return cards.filter((card) => filter === "All" || card.category === filter);
      }, [cards, filter]);
    
    // Mapeo de las tarjetas filtradas
    const renderCards = useMemo(() => (
        filteredCards.map((card) => <ItemList key={card.id} card={card} />)
      ), [filteredCards]);

    // Manejo de errores
    if (isLoading) {
        return <Spinner size="xl" label="Cargando productos..." />;
    }
    if (error) {
        return <Alert status="error">Error al cargar los productos: {error}</Alert>;
    }

    return (
      <>
        <Box >
            <Flex className={styles.buttonContainer}>
              {["All", ...categories].map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  variant="unstyled"
                  aria-label={`Filtrar por ${category}`}
                  className={`${styles.customButton} ${filter === category ? styles.active : ''}`}
                >
                  {category}
                </Button>
              ))}
            </Flex>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} bg="#0e141b" mb={100} >
              {renderCards.length > 0 ? renderCards : <Text>No hay Tarjetas</Text>}
            </Grid>
        </Box>
      </>
    )
}

export default ItemListContainer;
