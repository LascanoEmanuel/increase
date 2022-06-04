import {useState, useEffect}from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer =(props) =>{
    const [products, setProducts] = useState([])
    useEffect (() =>{
 getProducts ().then(response => {
     setProducts(response)
 })  
  }, [])

  const productsComponents = products.map(products => {
      return(
          <li>
              {products.name}
          </li>
      )
  })

    return (
        <div>
        <h1>{props.greeting}</h1>
        <ul>
        {products.map(prod => <ItemList/>)}

    </ul>
        </div>
    )
}
export default ItemListContainer