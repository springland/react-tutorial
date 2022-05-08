import React  , {useState} from  'react'

const UseStateCounter = () => {

    const [value , setValue] = useState(0);
    const reset = () => {
        setValue(0);
    }

    return (


        <React.Fragment>
            <h1> Regular Counter</h1>
            <h2> {value}</h2>

            <button className='btn' onClick = {() => setValue(value-1)}> Decrease </button>
            <button className='btn' onClick={reset}> Reset </button>
            <button className='btn' onClick={() => setValue(value+1)}> Increase </button>
        </React.Fragment>


    )

};


export default UseStateCounter ;