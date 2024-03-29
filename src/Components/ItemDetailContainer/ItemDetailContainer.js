import React, { useEffect, useState } from 'react'
import { getProductById, getProductByCategory } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    let { itemId } = useParams();

    const [product, setProduct] = useState(null)
    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error);
            })

    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />

        </div>
    )
}

export default ItemDetailContainer