import { useState, useEffect } from "react";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Image,
  Box,
} from "@chakra-ui/react";

const DownloadButton = () => {
  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Obteniendo URL...");
        setIsLoading(true);
        
        const storageRef = "https://firebasestorage.googleapis.com/v0/b/portafolio-cv-f7b1b.appspot.com/o/imagenes%2Fcv-imagen.png?alt=media&token=a8d16a98-1b94-49c5-a4d0-100784937a3c";
        
        setUrl(storageRef);
        setError(null);
      } catch (error) {
        console.error("Error al obtener URL:", error);
        setError(`Ha ocurrido un error al obtener la URL. Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setUrl(null);
    };
  }, []);

  return (
    <>
      <Popover placement="left-end">
        <PopoverTrigger>
          <Button
            variant="outline"
            colorScheme="#457B9D"
            bgColor="#E63946"
            rightIcon={<i className="fas fa-download"></i>}
            isLoading={isLoading}
          >
            {isLoading ? "Cargando..." : "Download CV"}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {url ? (
              <Box display="flex" flexDirection="column" alignItems="center">
                <Image
                  src={url}
                  alt={`CV - cv-imagen.png`}
                  width="100%"
                  height="auto"
                  objectFit="contain"
                />
                <Button mt={4} onClick={() => window.open(url, "_blank")}>
                Download
                </Button>
              </Box>
            ) : (
              <p>{error || "Cargando..."}</p>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DownloadButton;

