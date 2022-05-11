import React , {useEffect ,useRef} from 'react';

const UseRefBasics = () => {

    const nameContainer = useRef(null);
    const divContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameContainer.current.value);
        console.log(divContainer.current);
    }

    useEffect = () => {
        nameContainer.current.focus();
    }
    return (

        <>
            <h2> UseRef</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'> Name :</label> 
                    <input id='name' name='name' type='text' ref={nameContainer}/>
                </div>
                <button type='submit'  className='btn'>Submit</button> 
                

            </form>
            <div ref={divContainer}> Hello World </div>
        </>

    )
}

export default UseRefBasics ;