import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { startLoadingProducts } from '../../actions/products';
import { CardItem } from '../card/CardItem';

export const ViewProductScreen = () => {

    const {id} = useParams();
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( startLoadingProducts() );       
        
    }, [dispatch])

    if (!products.products) {
        return <p>Loading...</p>
    }

    return (

        <div>
            {
                products.products.filter(product => product.assets[0].id === id ).map(product => {

                    return (
                        
                        <CardItem key={product.assets[0].id} {...product} />
                        
                    )
                })
            }
        </div>

    )
}
