import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Text,
  Spinner,
  Alert,
  Grid,
} from "@chakra-ui/react";
import ItemList from "../components/ItemList";
import styles from "../scss/ItemListContainer.module.scss";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [cards, setCards] = useState([]); // Estado para almacenar los productos
  const [filter, setFilter] = useState("All"); // Estado para la categoría seleccionada
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías únicas
  const [error, setError] = useState(null); // Estado para manejar errores
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga de productos

  const params = useParams();

  // Fetch de productos
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "articulos");

        const snapshot = await getDocs(itemsCollection);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCards(data);

        // Obtiene todas las categorías únicas de los productos
        const uniqueCategories = [
          ...new Set(data.map((articulo) => articulo.category)),
        ];
        setCategories(uniqueCategories);

        // Si hay un parámetro de ruta, usa ese como filtro inicial
        if (params.category) {
          setFilter(params.category);
        }
        // Manejo de errores
      } catch (error) {
        console.error("Error:", error);
        setError(error.message || "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };
    // Llamado a la función fetchData
    fetchData();
  }, [params]);

  // Actualiza el estado de filter con la categoría seleccionada
  const handleCategoryChange = (category) => {
    setFilter(category === "All" ? category : params.category || category);
  };

  // Filtrado de tarjetas basado en el estado actual de filter
  const filteredCards = useMemo(() => {
    return cards.filter((card) => filter === "All" || card.category === filter);
  }, [cards, filter]);

  // Mapeo de las tarjetas filtradas
  const renderCards = useMemo(
    () => filteredCards.map((card) => <ItemList key={card.id} card={card} />),
    [filteredCards]
  );

  // Manejo de errores
  if (isLoading) {
    return <Spinner size="xl" label="Cargando productos..." />;
  }
  if (error) {
    return <Alert status="error">Error al cargar los productos: {error}</Alert>;
  }

  return (
    <>
      <Box>
        <Flex className={styles.buttonContainer}>
          {["All", ...categories].map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant="unstyled"
              aria-label={`Filtrar por ${category}`}
              className={`${styles.customButton} ${
                filter === category ? styles.active : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </Flex>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={6}
          bg="#0e141b"
          mb={100}
        >
          {renderCards.length > 0 ? renderCards : <Text>No hay Tarjetas</Text>}
        </Grid>
      </Box>
    </>
  );
};

export default ItemListContainer;
