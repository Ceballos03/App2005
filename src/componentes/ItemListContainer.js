import ItemList from "./ItemList"

const ItemListContainer = ({greeting = "Hola"})=> {
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;
