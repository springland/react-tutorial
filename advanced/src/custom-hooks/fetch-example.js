import React , {useState , useEffect} from 'react';

import { useFetch } from './useFetch';
const url = 'https://course-api.com/javascript-store-products'


const FetchExample = () => {

    

    const {isLoading , products} = useFetch(url);
    console.log(products);
    return (
        <>
            <h2> Fetch Example</h2>
            <h2>{isLoading? 'loading' : 'data'}</h2>
        </>


    )


}

export default FetchExample ;

