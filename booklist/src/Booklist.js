import React from 'react'

const firstbook = {
    img:'https://m.media-amazon.com/images/I/516z-D3WmCL.jpg',
    title:'The Man Burned by Winter',
    author:'Pete Zacharias'
}

const books = [
    {
        id: 1,
        img:'https://m.media-amazon.com/images/I/41EJlmFJUDL._SY346_.jpg',
        title:'Last Summer Boys',
        author:'Bill Rivers'
    },
    {
        id: 2,
        img:'https://m.media-amazon.com/images/I/51smsVgcV1L._SY346_.jpg',
        title:'The Candid Life of Meena Dave',
        author:'Namrata Patel'
    },
    {
        id : 3,
        img:'https://m.media-amazon.com/images/I/41dVg1WexcL.jpg',
        title:'The Peacekeeper',
        author:'B.L. Blanchard'
    },
    {
        id : 4,
        img:'https://m.media-amazon.com/images/I/51Sheq9pqwL._SY346_.jpg',
        title:'The Community: A Memoir',
        author:'N. Jamiyla Chisholm'
    }



];

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


function Book(props)
{
    const {img , title} = props

    const clickHanlder = (e) => {
            console.log(e);
            console.log(e.target);
            alert('Hello World');
    }

    const complexExampleHandler = (author) => {
        alert(author)
    }
    return (

        <article className='book'  onMouseOver={ () => {
            console.log('mouse over book  ' + title);
        }}>
            <Image img={img} />
            <Title name={title}/>
            <Author name={props.author}/>
            <button type='button' onClick={clickHanlder}>reference example</button>
            <button type='button' onClick={() =>complexExampleHandler(props.author)}>complex example</button>
            {props.children}
        </article>

    )
}

function Image({img})
{
    return (
        <img src={img} ></img>
    )
}

const Author = (props) => {
    return (
            <h4 style={{color:'#617d98' , fontSize:'0.75rem'}}>{props.name}</h4>
    )
};

const Title = (props) => 
{
    //const title = 'Title: The Match'
    return (
        <div>
            <h2>{props.name}</h2>
            <p> {6+6}</p>
        </div>
    )
};

export default Booklist ;
