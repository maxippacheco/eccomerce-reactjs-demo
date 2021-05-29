import React, { useEffect } from 'react'
import { Navbar } from '../navbar/Navbar'
import { Slidebar } from '../slidebar/Slidebar'
import { CardListItem } from '../card/CardListItem';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingCart } from '../../actions/cart';
import { startLoadingProducts } from '../../actions/products';
import { LoadingScreen } from '../loading/LoadingScreen';

export const EcommerceScreen = () => {


    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        

        dispatch(startCreatingCart())
        dispatch(startLoadingProducts())

    }, [dispatch])


    if (!products.products) {
        return ( <LoadingScreen /> )
    }    

    return (
        <div>
            <Navbar />
                <div className='w-full h-65vh bg-gray-200 pt-10 overflow-x-hidden'>
                    <Slidebar />
                </div>

                <div className='w-full bg-gray-100 grid grid-cols-5 p-20'>
                    {
                        products.products.map(product => {

                            return(
                                <CardListItem key={product.id} {...product} />
                            )
                        })

                    }

                </div>
        </div>
    )
}
