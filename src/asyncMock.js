
const products = [
{
    id: '1',
    name: 'Espumoso',
    price: 1000,
    category: 'Vino espumante',
    img:'/src/assets/Espumoso.png',
    stock: 25,
    description: 'Su aroma es un equilibrio entre fruta y levadura debido a que es un espumoso del año y su contacto con las borras fue de siete meses.',
    age: 2018
},
{
    id: '2',
    name: 'Gran Reserva Blanc',
    price: 1500,
    category: 'Gran Reserva',
    img: '/src/assets/GranReserva_Blanc.png',
    stock: 25,
    description: 'Vino elaborado a partir de uvas en perfecto estado de madurez, provenientes de parcelas seleccionadas con podas en verde.', 
    age: 2016
},
{
    id: '3',
    name: 'Gran Reserva Cabernet Sauvignon',
    price: 3000,
    category: 'Gran Reserva',
    img: '/src/assets/GranReserva_CS.png',
    stock: 20,
    description: 'Cabernet Sauvignon es de las cepas más importantes del mundo vitivinícola. Por su naturaleza es una variedad de gran adaptación a diferentes terroirs.',
    age: 2015
},
{
    id: '4',
    name: 'Gran Reserva Merlot',
    price: 3000,
    category: 'Gran Reserva',
    img: '/src/assets/GranReserva_Merlot.png',
    stock: 20,
    description: 'Maceración en frío durante 48 a 72 hs para una primera extracción de aromas, taninos y compuestos de color. Fermentación a temperatura controlada por debajo de 20 ºC.',
    age: 2016
},
{
    id: '5',
    name: 'Reserva Cabernet Sauvignon',
    price: 2000,
    category: 'Reserva',
    img: '/src/assets/Reserva_CS.png',
    stock: 20,
    description: 'Cabernet Sauvignon es de las cepas más importantes del mundo vitivinícola. Por su naturaleza es una variedad de gran adaptación a diferentes terroirs.', 
    age: 2021
}, 
{
    id: '6',
    name: 'Reserva Pinot Noir',
    price: 2800,
    category: 'Reserva',
    img: '/src/assets/Reserva_PinotNoir.png',
    stock: 22,
    description: 'La selección especial de racimos es esencial al momento de cosechar y de ingresar a bodega para lograr este reserva el cual realiza una crianza de 6 meses en roble francés.', 
    age: 2020
}, 
{
    id: '7',
    name: 'Reserva Tannat',
    price: 2500,
    category: 'Reserva',
    img: '/src/assets/Reserva_Tannat.png',
    stock: 20,
    description: 'Tannat, variedad emblema de Uruguay que nos representa internacionalmente con una perfecta adaptación al clima y al suelo de nuestra región.', 
    age: 2021
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
           }, 500)
    }) 
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
           }, 500)
    }) 
}


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
           }, 500)
    }) 
}