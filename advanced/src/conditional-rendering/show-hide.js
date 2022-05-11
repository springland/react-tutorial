import React , {useState , useEffect} from 'react'

const ShowHide = () => {

    const [show , setShow] = useState(false);

    const [ size , setSize] = useState(0);


    const resizeHandler = () => {
        setSize(window.innerWidth);
    }

    useEffect( () => {
        window.addEventListener('resize' , resizeHandler)
        setSize(window.innerWidth);
        return () => window.removeEventListener('resize' , resizeHandler)
    } , [])

    return (
        <>
            <h1> Show / Hide</h1>

            <button className='btn' onClick={ () => setShow(!show)}> Toggle</button>

            {
                show && (
                    <div>
                        <h1> Window</h1>
                        <h2> {size }  px</h2>
                    </div>
                )
            }
        </>


    )
}

export default ShowHide ;