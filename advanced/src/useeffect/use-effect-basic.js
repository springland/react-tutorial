import React , {useState , useEffect} from 'react'


const UseEffectBasic = () => {

    //
    // Use Effect is called each time when the component is rendered
    //

    useEffect( () => {
        console.log('call use effect');
        //document.title = `New Message (${value}))`
        if( value > 1)
        {
            document.title = 'New Message (' + value + ')';
        }    
    })

    console.log('component rendered');

    const [value , setValue] = useState(0)
    return (
        <>
            <h1> Use Effect Basics</h1>
            <h2> {value}</h2>
            <button className='btn' onClick={() => setValue(value+1)}> Increase</button>
        </>
    )
}

export default UseEffectBasic;
