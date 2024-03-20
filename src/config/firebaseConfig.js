import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA484SOvWXVEAIqMj_LEl9FkpQwx6uPHB8",
  authDomain: "juan-ecommerce-vinos.firebaseapp.com",
  projectId: "juan-ecommerce-vinos",
  storageBucket: "juan-ecommerce-vinos.appspot.com",
  messagingSenderId: "986474987774",
  appId: "1:986474987774:web:ea4fbd442295f9401465af"
};

// Inicializar firebase
const app = initializeApp(firebaseConfig);


// Referencia a la base de datos
export const db = getFirestore(app);