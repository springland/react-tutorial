import React  , {useState} from  'react'

const UseStateCounter = () => {

    const [value , setValue] = useState(0);
    const reset = () => {
        setValue(0);
    }

    const inceaseLaterHandler = () => {
        setTimeout(   () =>{ 
            
                //  The setValue happens after timeout
                //  so if the button is clicked 3 times 
                //  the value is only increased once because value only updates after the setValue is called
                //
                //setValue(value+1)  
                //
                

                // This solves the above issue , the prevValue passed in is the current value
                setValue((prevValue) => {
                    return prevValue+1;
                })
            },
         2000
        );

        
        
    }
    return (


        <React.Fragment>
            <h1> Regular Counter</h1>
            <h2> {value}</h2>

            <button className='btn' onClick = {() => setValue(value-1)}> Decrease </button>
            <button className='btn' onClick={reset}> Reset </button>
            <button className='btn' onClick={() => setValue(value+1)}> Increase </button>


            <h1> Complex Counter</h1>
            <h2> {value}</h2>
            <button className='btn' onClick = {inceaseLaterHandler}> Increase Later</button>

        </React.Fragment>


    )

};


export default UseStateCounter ;