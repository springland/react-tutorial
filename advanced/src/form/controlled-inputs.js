import React , {useState} from 'react'


const ControlledInputs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName  , lastName);
    } 

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');

        
    return (
        <> 
            <h1>Controlled Inputs</h1>
        
            <article>

                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor='firstName'>First Name:</label>
                        <input id='firstName' name='firstName' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input id='lastName' name='lastName' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <button type='submit' className='btn'>Add Person</button>
                </form>

            </article>
        
        </>


    )



};

export default ControlledInputs ;
