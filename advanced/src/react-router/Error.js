
import {Link} from 'react-router-dom'
const Error = () => {

    return ( 
        <>
            <h2> Page Not found</h2>
            <Link to='/home' className='btn'> BackHome</Link>
        </>
    )

}

export default Error ;
