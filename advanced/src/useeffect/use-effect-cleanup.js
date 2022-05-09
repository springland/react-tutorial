import React , {useState , useEffect} from 'react'

const UseEffectCleanUp = () => {

    const [size , setSize] = useState(window.innerWidth);

    console.log(size);

    const checkSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(  () => {
        window.addEventListener('resize' , checkSize);

        return () => {
            window.removeEventListener('resize' , checkSize);
        }
    } );
    return (

        <>
            <h1> Use Effect CleanUp</h1>
            <h2> Window</h2>
            <h2> {size} + px</h2>
        </>
    )
}

export default UseEffectCleanUp ;