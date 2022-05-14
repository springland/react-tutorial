import React from 'react'

import {data} from '../usestate/data'
import {Link} from 'react-router-dom'
const People = () => {

    return (

        <>
            <h2> People </h2>

            <section className='items'>

            
            {
                data.map( (person) => {
                    
                    return <div key={person.id}>
                        <h4>{person.name}</h4>
                        <Link to={`/person/${person.id}`}> Learn More </Link>
                    </div>

                }
                )
            }

            </section>

        </>

    )
}

export default People ;