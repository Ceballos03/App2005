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



