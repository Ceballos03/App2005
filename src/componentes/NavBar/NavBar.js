import './NavBar.css';
import CartWidget from '../CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../asyncmock';
//import { getDoc, doc } from "firebase/firestore";
//import { firestoreDb } from '../firebase';

const Navbar = () => {
    const [categories, setCategories] = useState([])
    console.log("aa",categories)

    useEffect(() => {

        getCategories().then(categories =>{
            setCategories(categories)
        })

        return (() => {
            setCategories()
            console.log("PAAA", setCategories)
        })
    }, [])


    return(
        <nav>
            <div className='Brand'>
                <Link to={'/'}>
                    <p className='Titulo'>GAMES-SHOPE</p>
                </Link>
                <CartWidget />
            </div>

            <div className='Menu'>
                {categories.map(cat => 
                <NavLink key={cat.id} to={`/category/${cat.id}`} className='Accion'>
                    {cat.description}
                </NavLink>)}                    
            </div>
        </nav>
    );
}

export default Navbar;


/* Firebase para el NavBarg: Fallido!!
const Navbar = () => {
    const [categories, setCategories] = useState([])
    const { categoriesId} = useParams()
    console.log("aa",categoriesId)

    useEffect(() => {

        const docRef = doc(firestoreDb, 'categories', categoriesId)

        getDoc(docRef).then(response => {
            const cat = { categories: response.categories, ...response.data()}
            setCategories(response.data())
        })

        return (() => {
            setCategories()
            console.log("PAAA", setCategories)
        })
    }, [categoriesId]) */