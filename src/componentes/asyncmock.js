const products = [
    { id: 1, name: 'Mario', price: 'usd 2000', img: 'mario.png'},
    { id: 2, name: 'Pokemon', price: 'usd 100', img: 'pikachu.png'},
    { id: 3, name: 'GTA V', price: 'usd 4000', img: 'gta-5.jpg'}
]



export default function getProduct (){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
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