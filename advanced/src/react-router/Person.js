
import React , {useEffect , useState}  from 'react';
import {Link , useParams} from 'react-router-dom';
import {data} from '../usestate/data';



const Person = () => {
    const {id} = useParams();

    const [person , setPerson] = useState({});

    useEffect( () => {

        const matched = data.find( (person) => person.id === parseInt(id));
        setPerson(matched);

    } , [] )

    return (
        <>
            <h3> Person details</h3>
            <h4> Id :  {person.id }   </h4>
            <h4> Name :  {person.name }   </h4>
            <Link to='/people' className='btn'>Back to People</Link>
        </>


    )


}

export default Person ;
