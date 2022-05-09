import React , {useState , useEffect} from 'react'

import ToggleSwitch from './ToggleSwitch'
const ShortCircuit = () => {

    const [IsHidden , setIsHidden] = useState(true);

    const toggleHandler = (e) =>{

    }
    return (
        <>
            <h1> This is an example</h1>
            {!IsHidden && <h1> This can be hidden</h1> }
            <ToggleSwitch label="Hide Item" />
        </>


    )

}

export default ShortCircuit ;