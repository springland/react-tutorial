import React , {useState} from 'react';

import {data} from '../usestate/data'

const PropDrilling = () => {


    const removeItem = (id) => {
        console.log('remove item ' + id);
        setPeople( people.filter( (person) => person.id !== id));

    }
    const [people , setPeople] = useState(data);
    return (
        <>
        
            <h1> Prop drilling</h1>
            <section>
                <List people={people} removeItem={removeItem}/>

            </section>

            {/*
                people.map( (person ) => {

                    return <div className='item' key={person.id}>
                        <h4> {person.name}</h4>
                    </div>

                })

            */}
        </>



    )

}

const List = ({people , removeItem}) =>
{
    return (
            <>
                {
                    people.map((person ) => {
                        return <Person  {...person }  key={person.id} removeItem={removeItem}/>


                    })
                }
            </>    
    )      
}

const Person = ({id , name , removeItem})=> {

    return (
        <div className='item' >
            <h4> {name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>Remove</button>
        </div>


    )


}
export default PropDrilling ;
