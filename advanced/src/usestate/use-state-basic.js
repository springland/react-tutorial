import React , {useState} from 'react'

const RandomTitle = () => {

    const [title , setTitle] = useState('Random Title');

    const handleClick = () => {
        if( title === 'Random Title') {
            setTitle('Hello World');
        }
        else{
            setTitle('Random Title');
        }    
    }

    return (
        <React.Fragment>
            <h1> Use State Example</h1>
            <h2>{title}</h2>        
            <button className='btn' onClick={handleClick}> Update Title</button>
        </React.Fragment>
    )

}


export default RandomTitle ;
