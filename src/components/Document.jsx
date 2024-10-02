import {doc, getDoc, getFirestore} from 'firebase/firestore';
import  { useEffect, useState } from 'react';

const Document = () => {
    //const id = useParam('id');
    const [document, setDocument] = useState([]);
    //para no crear multiples consultas a mi BD uso UseEffect
    useEffect(() => {

        const db = getFirestore();
    
        const getDocument = async () => {
            try {
                const document = await getDoc(doc(db, "articulos", "BdFnWqtZjO0UzcGaEFwe"));
                setDocument(document.data());
            } catch (error) {
                console.error("Error al obtener el documento:", error);
                // Aquí podrías actualizar un estado de error 
            }
        };

        getDocument();

    }, []);
    
  return (
    <div>
        <h1>Articulo</h1>
        {
            
                <div>
                    <h2>{document.nombre}</h2>
                    <p>{document.categoria}</p>
                </div>
            
        }
        
        
        
        
            </div>
  )
}

export default Document