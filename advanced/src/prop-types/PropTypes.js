
import {useFetch} from '../custom-hooks/useFetch';
import Product from './Product';

const url = 'https://course-api.com/react-prop-types-example';

const PropTypes = () => {

    const {products} = useFetch(url);
    return (
        <>
            <h2> Prop types</h2>
            <section className='products'>
            {
                products.map( (product) => {

                    return <Product key={product.id} {...product}/>

                })

            }
            </section>
        </>


    )

};

export default PropTypes ;


