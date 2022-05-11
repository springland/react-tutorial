

import React , {useState , useEffect , useReducer} from 'react';
import Modal from './Modal';

const UseReducer = () => {

    const [item , setItem] = useState('');

    const reducer = (state , action) => {

        
        if(action.type === 'ADD_ITEM')
        {
            const newItems = [...state.items , action.payload];
            
            return {...state , showModal:true , modalContent:' Add item' , items:newItems }
        }
        else if ( action.type === 'NO_VALUE')
        {
            return {...state , showModal:true , modalContent:' Item cannot be empty'}
        }
        else if ( action.type === 'REMOVE_ITEM')
        {
            const newItems = state.items.filter( (t) => t.id !== action.payload)
            return {...state , showModal:false , items:newItems};
        }
        else if ( action.type == 'CLOSE_MODAL')
        {
            return {...state , showModal:false};
        }
        throw new Error('Unknown Action ' + action);
    }

    const initState = {
        showModal : true ,
        modalContent : '',
        items : []

    };



    const [ state , dispatch] = useReducer(reducer , initState);


    const handleSubmit = (e) => {
       e.preventDefault();
        
       
        if(item ){
            const newItem = { name: item , id : new Date().getTime().toString()}
            dispatch({type: 'ADD_ITEM' , payload : newItem})
            setItem('');
        }
        else{
            dispatch({type: 'NO_VALUE' })
        }

    };

    
    const closeModal = () => {
     
        dispatch({type: 'CLOSE_MODAL'  });
    }

    return (
        <>
            <h1> Use Reducer </h1>

            <div/>

            {state.showModal && <Modal  closeModal={closeModal} content= {state.modalContent} />}


            <form className='form' onSubmit={handleSubmit} >
                <div>
                    <input type='text' value={item}  onChange = {(e) => setItem(e.target.value)}/>
                </div>
                <button type='submit' className='btn'>Add Item</button>

            </form>

            
            {
                state.items.map((it) => {
                    return (
                        <div key={it.id} className='item'>
                            <h4>{it.name}</h4>
                            <button className='btn' onClick= { () => dispatch({type:'REMOVE_ITEM' , payload:it.id})}> remove</button>
                        </div>
                    )
                })
            }

            
        </>


    )


}


export default UseReducer ;
