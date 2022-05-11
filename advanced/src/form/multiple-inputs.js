import React , {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const MultipleInputs = () => {

    const [person , setPerson] = useState({firstName: '' , lastName:'' , age:'' , id:''})

    const handleOnChange = (e) => {

        let name = e.target.name ;
        let value = e.target.value;
        setPerson({...person , [name]:value , id:uuidv4()}  )

    }

    const [people , setPeople] = useState([])

    const addPerson = (e) => {
        e.preventDefault();
        
        setPeople([...people , person]);
        setPerson({firstName:'' , lastName:'' , age:''});
    }

    const reset = () => {
        setPeople([])
    }


    return (
        <>
            <h1> Multiple Inputs</h1>

            <form className='form' onSubmit={addPerson}>
                <div className='form-control'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input id='firstName' name='firstName' type='text'  value={person.firstName} onChange={handleOnChange}/>
                </div>
                <div className='form-control'>
                    <label htmlFor='lastNameName'>Last Name:</label>
                    <input id='lastName' name='lastName' type='text' value={person.lastName} onChange={handleOnChange}/>
                </div>

                <div className='form-control'>
                    <label htmlFor='lastNameName'>Age:</label>
                    <input id='age' name='age' type='text' value={person.age} onChange={handleOnChange}/>
                </div>

                <button  type='submit' className='btn'   >Add Person</button>
                <button  className = 'btn'  onClick = {reset}> Reset</button>
            </form>

            
            {
                
                    people.map((person) => {
                            return (
                                <div className='item' key={person.id}>
                                    <h4> {person.firstName}</h4>
                                    <h4> {person.lastName}</h4>
                                    <h4> {person.age}</h4>
                                </div>


                            )
                        }
                    )  
                       
            }





        
        </>


    )

}


export default MultipleInputs ;