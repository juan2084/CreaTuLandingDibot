
const products = [
{
    id: '1',
    name: 'Espumoso',
    price: 1000,
    category: 'Vino espumante',
    img:'src/assets/Espumoso.png',
    stock: 25,
    description: 'Vino fino espumante. Año 2018'
},
{
    id: '2',
    name: 'Gran Reserva Blanc',
    price: 1500,
    category: 'Gran Reserva',
    img: 'src/assets/GranReserva_Blanc.png',
    stock: 25,
    description: 'Vino Gran Reserva Blanc. Año 2016'
},
{
    id: '3',
    name: 'Gran Reserva Cabernet Sauvignon',
    price: 3000,
    category: 'Gran Reserva',
    img: 'src/assets/GranReserva_CS.png',
    stock: 20,
    description: 'Vino Gran Reserva Cabernet Sauvignon. Año 2015'
},
{
    id: '4',
    name: 'Gran Reserva Merlot',
    price: 3000,
    category: 'Gran Reserva',
    img: 'src/assets/GranReserva_Merlot.png',
    stock: 20,
    description: 'Vino Gran Reserva Merlot. Año 2016'
},
{
    id: '5',
    name: 'Reserva Cabernet Sauvignon',
    price: 2000,
    category: 'Reserva',
    img: 'src/assets/Reserva_CS.png',
    stock: 20,
    description: 'Reserva Cabernet Sauvignon. Año 2021'
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
           }, 500)
    }) 
}