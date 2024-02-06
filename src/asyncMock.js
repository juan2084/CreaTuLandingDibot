const products = [
{
    id: '1',
    name: 'Prueba',
    price: 1000,
    category: 'Vino espumante',
    img: '',
    stock: 25,
    description: 'Vino fino espumante. Año 2018'
},
{
    id: '2',
    name: 'Prueba2',
    price: 1500,
    category: 'Vino tinto',
    img: '',
    stock: 25,
    description: 'Vino tinto Reserva. Año 2016'
},
{
    id: '3',
    name: 'Prueba3',
    price: 3000,
    category: 'Vino Gran Reserva',
    img: '',
    stock: 20,
    description: 'Vino Gran Reserva. Año 2015'
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
           }, 500)
    }) 
}