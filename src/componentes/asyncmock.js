const products = [
    {id: 1, name: 'Consola Libercam Mini Consola Family Game Standard  Color Blanco Y Rojo', price: 4199, category: 'consola', sold_quantity: '13',condition: 'Usado', img: "http://http2.mlstatic.com/D_814460-MLA48157767852_112021-I.jpg"},
    {id: 2, name: 'Red Dead Redemption 2 Standard Edition Rockstar Games Ps4 Físico', price: 4654.05, category: 'juego', sold_quantity: '2',condition: 'Usado', img: "https://gaming.3bro.info/wp-content/uploads/2020/02/red-dead-redemption-2-standard-edition-cover.jpg"},
    {id: 3, name: 'Consola Play Station 5  Color Blanco', price: 29999, category: 'consola', sold_quantity: '40',condition: 'Usado', img: "https://www.worldgame.es/productos/imagenes/img_6441_9d8ede12255cb0563138703eac5a5bd1_20.png"}
]

const categories = [
    {id: 'consola', description: 'Consola'},
    {id: 'juego', description: 'Juego'}
]


export const getProducts = (idCategory)=>{
    return new Promise ((resolve)=>{
        const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
        setTimeout(()=>{
            resolve(productsToResolve);
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 2000)
    })
}


export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}






/*import getProduct from "./Item";*/

/* export default function ItemList (){
    const [products, setProducts] = useState([])


    useEffect(() =>{
        getProduct().then(products => {
            console.log(products)
            setProducts(products)
        })
    }, [])

    console.log(products)

    return(
        <div>
            <ul>
                {products.map(product =>{
                    return <li key={product.id}>{product.name}</li>
                })}
            </ul>
        </div>
    )
}*/