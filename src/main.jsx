import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from 'firebase/app';
//import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKOVoG7g_PtntYvRceANGlc63x8OGth6g",
  authDomain: "portafolio-cv-f7b1b.firebaseapp.com",
  projectId: "portafolio-cv-f7b1b",
  storageBucket: "portafolio-cv-f7b1b.appspot.com",
  messagingSenderId: "318518783159",
  appId: "1:318518783159:web:f78cf16291bcaa6031b132"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//export const storage = getStorage(app);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);