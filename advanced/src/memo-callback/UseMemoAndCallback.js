
import React , {useState , useEffect , useCallback , useMemo} from 'react'

import {useFetch} from '../custom-hooks/useFetch';


const url = 'https://course-api.com/javascript-store-products'

const calculateMostExpensive = (data)  => {

    console.log('calculateMostExpensive , sleep')
    sleep(3000);
    const mostExpensive = data.reduce(( mostExpensive , record) => {
        const price = record.fields.price ;
        return mostExpensive > price ? mostExpensive: price ;
    } , 0);


    return mostExpensive;
}





const sleep = (millisecondsToWait) =>
{
setTimeout(function() {
    // Whatever you want to do after the wait
}, millisecondsToWait);

}
const UseMemoAndCallBack = () => {


    const {products} = useFetch(url);
    const [count , setCount] = useState(0);
    const [cart , setCart] = useState(0);
    const mostExpensive = useMemo( () => calculateMostExpensive(products) , [products]);
    
    const addToCart = useCallback(() => {
        setCart(cart+1);
    } , [cart]);

    return (

        <>

            
            <h2> Use Memo and Callback to improve the performance</h2>


            <h4> Count  {count} </h4>

            <button className='btn' onClick = { () => setCount(count+1)}> Click Me</button>

            <h4> Cart {cart}</h4>

            <h2> Most Expensive : ${mostExpensive/100}</h2>
            <Products  className='products' products={products}  addToCart={addToCart}/>;

        </>

    )

    
}

const Products = React.memo(({products , addToCart}) => {
    console.log('render products');
    return (
        <>
            <div className='grid'>
                {

                    products.map(
                        (product) =>
                        <SingleProduct  key={product.id} product={product}  addToCart = {addToCart}/>
                    )

                }
            </div>
        </>
    )
});

const SingleProduct = ({product , addToCart}) => {

    console.count('render single product');
    return (
        <div >
            
                <h4> {product.fields.name}</h4>
                <img src={product.fields.image[0].thumbnails.large.url} />
                <h4> Price : ${product.fields.price/100}</h4>
                <button className='btn' onClick={addToCart}> Add To Cart</button>
            
        </div>


    )

}

export default UseMemoAndCallBack ;