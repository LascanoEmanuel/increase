const products = [
    { id: '0',name: 'S200B', category:  'Leds', img: 'tiendaincrease\src\components\imagenes\blanco.jpg', stock: 10,descripcion: 'Panel led de 200w con luz blanca' },
    {id: '1', name: 'S200F',category:  'Leds', img: 'tiendaincrease\src\components\imagenes\full.jpg', stock: 10, descripcion: 'Panel led de 200w con luz full spectrum' },
    {id: '2', name: 'S200M',category:  'Leds', img: 'tiendaincrease\src\components\imagenes\mix.jpg', stock: 10, descripcion: 'Panel led de 200w con luz mix balnco y full' },
    {id: '3', name: 'S200B',category:  'Leds', img: 'tiendaincrease\src\components\imagenes\cuatroblanco.png', stock: 10, descripcion: 'Panel led de 400w con luz blanca' },
    {id: '4', name: 'S200F',category:  'Leds', img: 'tiendaincrease\src\components\imagenes\cuatrofull.jpg', stock: 10, descripcion: 'Panel led de 400w con full spectrum' },
    {id: '5', name: 'S200M',category:  'Leds', img: 'tiendaincrease/src/components/imagenes/cuatromix.jpg', stock: 10, descripcion: 'Panel led de 400w con luz mix balnco y full' },
]

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}