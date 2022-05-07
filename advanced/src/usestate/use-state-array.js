
import React  , {useState} from  'react'
import {data} from './data'

const UseStateArray = () => {


    const [people , setPeople] = useState(data);

    const removeItem = (id) => {
        console.log( id);
        let filteredList = people.filter( (people) => people.id !== id );
        setPeople(filteredList);
    }
    return (
        <React.Fragment>
          {  
          people.map((person) => {

                const {id , name} = person ;


                return (
                    <div key={id} className = 'item'> <h4>{name}</h4> 
                        <button className='btn'  onClick={ () => removeItem(id) }> Remove</button>
                    </div>
                );
            } )

        }  
        <button className='btn'  onClick = {
            () => setPeople([])
        }>Clear </button>
        </React.Fragment>
    )
};


export default UseStateArray;
