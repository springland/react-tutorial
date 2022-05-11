import React , {useState , useEffect} from 'react'

import ToggleSwitch from './ToggleSwitch'
const ShortCircuit = () => {

    const [isHidden , setIsHidden] = useState(true);
    const [isToggled , setIsToggled] = useState(false);
    const toggleHandler = (e) =>{
            console.log(' toggle switch changed');
            setIsHidden(!isHidden)
    }
    return (
        <>
            <h1> This is an example</h1>
            {isToggled && <h2> Toggled item</h2>}

            {<ToggleSwitch label="Toggle Item" toggleHandler = {(e) => {  setIsToggled(e.target.checked)}} /> }
            {!isHidden && <h2> This can be hidden</h2> }
            
            <button className='btn' onClick={toggleHandler}> {isHidden && 'Display item' } {!isHidden && 'Hide Item'}</button>
        </>


    )

}

export default ShortCircuit ;