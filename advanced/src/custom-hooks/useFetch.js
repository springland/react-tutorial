import React , {useState , useEffect} from 'react';


export const useFetch = (url) => {

    const [isLoading , setIsLoading] = useState(true);
    const [ products , setProducts] = useState([]);

    
    const getProducts = async () => {
        let resp = await fetch(url);
        let products = await resp.json();
        setProducts(products);
        setIsLoading(false);
    }
    useEffect( () => {

        getProducts();


    } , [url]);

    return {isLoading , products};



};
