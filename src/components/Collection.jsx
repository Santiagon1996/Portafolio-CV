import { useEffect, useState, useMemo } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Box, Flex, Text, Spinner, Alert } from '@chakra-ui/react';

const Collection = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        let isMounted = true;

        const fetchDocuments = async () => {
            try {
                const db = getFirestore();
                const articleRef = collection(db, "articulos");
                
                const querySnapshot = await getDocs(articleRef);
                if (!isMounted) return;

                const documentsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDocuments(documentsArray);

            } catch (err) {
                setError(err.message || 'An unknown error occurred');
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchDocuments();

        return () => {
            isMounted = false;
        };
    }, []);

    const filteredDocuments = useMemo(() => {
        return documents.filter(doc => doc.categoria === filter || filter === "All");
    }, [documents, filter]);

    if (loading) return <Spinner label="Cargando documentos..." />;
    if (error) return <Alert status="error">{error}</Alert>;

    return (
        <Box p={4}>
            <Flex alignItems="center" justifyContent="space-between">
                <Text fontSize="lg">Artículos</Text>
                <Flex alignItems="center">
                    <Text mr={2}>Filtrar por:</Text>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todos</option>
                        {['Electrón', 'Ropa', 'Deportes'].map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </Flex>
            </Flex>
            {filteredDocuments.length > 0 ? (
                <Flex flexWrap="wrap" justifyContent="space-around">
                    {filteredDocuments.map((document) => (
                        <Box key={document.id} maxW="sm" p={4} borderRadius="md" boxShadow="md" mb={4}>
                            <h2>{document.name}</h2>
                            <p>Categoría: {document.category}</p>
                            {/* Agrega más detalles según sea necesario */}
                        </Box>
                    ))}
                </Flex>
            ) : (
                <Text>No hay artículos disponibles.</Text>
            )}
        </Box>
    );
};

export default Collection;
