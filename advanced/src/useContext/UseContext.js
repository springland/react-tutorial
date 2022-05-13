import React , {useState , useEffect , useContext} from 'react';
import {data} from '../usestate/data'


const PersonContext = React.createContext();



const UseContext = () => {

    const removeItem = (id) => {
        console.log('remove item ' + id);
        setPeople( people.filter( (person) => person.id !== id));

    }
    const [people , setPeople] = useState(data);


    return (
        <>
            <h2> Use Context</h2>
            <PersonContext.Provider value={{removeItem}}>

            
                <List people={people} />

            </PersonContext.Provider>

        </>


    )


};


const List = ({people }) =>
{
    return (
            <>
                {
                    people.map((person ) => {
                        return <Person  {...person }  key={person.id} />


                    })
                }
            </>    
    )      
}

const Person = ({id , name })=> {

    const {removeItem} = useContext(PersonContext);
    
    return (
        <div className='item' >
            <h4> {name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>Remove</button>
        </div>


    )


}

export default UseContext ;


