import React from 'react'

import {books} from './books'

import Book from './Book'

const firstbook = {
    img:'https://m.media-amazon.com/images/I/516z-D3WmCL.jpg',
    title:'The Man Burned by Winter',
    author:'Pete Zacharias'
}


function Booklist() {
  return (
     <section className='booklist'>
            <Book img={firstbook.img}  title={firstbook.title}  author={firstbook.author}>
                 <p><b>An investigative journalist on the edge A serial killer testing his limits. What they have in common can freeze the blood. </b></p>

<p>Still reeling from a personal tragedy, investigative journalist Rooker Lindström finds a grim hideaway from the world. It’s the dilapidated cabin on Minnesota’s Deer Lake bequeathed to him by his late father—one of the most notorious serial killers in the state. If the walls of this murder house could talk, they’d scream.
</p>
            </Book>    

            {/*<Book img='https://m.media-amazon.com/images/I/41EJlmFJUDL._SY346_.jpg' title='Last Summer Boys' author='Bill Rivers'/>*/}
            {/*<Book img='https://m.media-amazon.com/images/I/51smsVgcV1L._SY346_.jpg' title='The Candid Life of Meena Dave' author='Namrata Patel'/>*/}
            {/*<Book img='https://m.media-amazon.com/images/I/41dVg1WexcL.jpg' title='The Peacekeeper' author='B.L. Blanchard'/>*/}
            {/*<Book img='https://m.media-amazon.com/images/I/51Sheq9pqwL._SY346_.jpg' title='The Community: A Memoir' author='N. Jamiyla Chisholm'/>*/}


            {/* solution 1 */}
            {
                books.map( (book) => {
                        const {img , title , author} = book;
                        return <Book key={book.id} img={img} title={title} author={author} />
                    }

                )
            }

            {/* solution 2 */}
            {
                books.map( (book , index) => {
                        const {img , title , author} = book;
                        return <Book key={index} img={img} title={title} author={author} />
                    }

                )
            }

            {/* solution 3 */}
            {
                books.map( (book) => {
                        const {img , title , author} = book;
                        return <Book key={book.id} {...book} />
                    }

                )
            }

    </section>
  )
}



export default Booklist ;
