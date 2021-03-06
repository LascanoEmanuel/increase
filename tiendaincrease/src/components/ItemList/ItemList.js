import Item from "../item/Item"
import { getProducts } from "../../asyncmock"
const ItemList = ({products}) => {
    return (
         <ul>
        {products.map(prod => <Item key={prod.id} {...prod}/>)}

    </ul>
    )
}

export default ItemList