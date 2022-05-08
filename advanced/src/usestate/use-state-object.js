
import React  , {useState} from  'react'

const UseStateObject = () => {

    const [person , setPerson ] = useState( {
        name : 'Peter',
        age : 24 ,
        message : 'Hello'
    });

    return (

        <React.Fragment>
            <h3>  {person.name} </h3>
            <h3>  {person.age} </h3>
            <h3>  {person.message} </h3>

            <button onClick = { 
                () => {
                    person.message = 'Hello Peter';
                    setPerson({ ...person , message: 'Hello Peter'});
                }
            } className='btn'> Update Message</button>
        </React.Fragment>
    )


}

export default UseStateObject ;