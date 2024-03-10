import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebaseConfig"

const products = [
    {
        name: 'Espumoso',
        price: 1000,
        category: 'Vino espumante',
        img:'https://i.imgur.com/tCDrbTi.png',
        stock: 25,
        description: 'Su aroma es un equilibrio entre fruta y levadura debido a que es un espumoso del año y su contacto con las borras fue de siete meses.',
        age: 2018
    },
    {
        name: 'Gran Reserva Blanc',
        price: 1500,
        category: 'Gran Reserva',
        img: 'https://i.imgur.com/MGk3LY2.png',
        stock: 25,
        description: 'Vino elaborado a partir de uvas en perfecto estado de madurez, provenientes de parcelas seleccionadas con podas en verde.', 
        age: 2016
    },
    {
        name: 'Gran Reserva Cabernet Sauvignon',
        price: 3000,
        category: 'Gran Reserva',
        img: 'https://i.imgur.com/z8BQ6FW.png',
        stock: 20,
        description: 'Cabernet Sauvignon es de las cepas más importantes del mundo vitivinícola. Por su naturaleza es una variedad de gran adaptación a diferentes terroirs.',
        age: 2015
    },
    {
        name: 'Gran Reserva Merlot',
        price: 3000,
        category: 'Gran Reserva',
        img: 'https://i.imgur.com/KT3NCWn.png',
        stock: 20,
        description: 'Maceración en frío durante 48 a 72 hs para una primera extracción de aromas, taninos y compuestos de color. Fermentación a temperatura controlada por debajo de 20 ºC.',
        age: 2016
    },
    {
        name: 'Reserva Cabernet Sauvignon',
        price: 2000,
        category: 'Reserva',
        img: 'https://i.imgur.com/JClucuK.png',
        stock: 20,
        description: 'Cabernet Sauvignon es de las cepas más importantes del mundo vitivinícola. Por su naturaleza es una variedad de gran adaptación a diferentes terroirs.', 
        age: 2021
    }, 
    {
        name: 'Reserva Pinot Noir',
        price: 2800,
        category: 'Reserva',
        img: 'https://i.imgur.com/2fsqVI1.png',
        stock: 22,
        description: 'La selección especial de racimos es esencial al momento de cosechar y de ingresar a bodega para lograr este reserva el cual realiza una crianza de 6 meses en roble francés.', 
        age: 2020
    }, 
    {
        name: 'Reserva Tannat',
        price: 2500,
        category: 'Reserva',
        img: 'https://i.imgur.com/zuM1qNj.png',
        stock: 20,
        description: 'Tannat, variedad emblema de Uruguay que nos representa internacionalmente con una perfecta adaptación al clima y al suelo de nuestra región.', 
        age: 2021
    }
    ]

    export const seedProducts = () => {
        products.forEach(product => {
            // Agregar a la BD
            addDoc(collection (db, "products"), product)
        })
    }

