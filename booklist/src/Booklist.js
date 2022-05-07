import React from 'react'

function Booklist() {
  return (
     <section className='booklist'>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>

    </section>
  )
}


function Book()
{
    return (

        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>

    )
}

function Image()
{
    return (
        <img src='https://m.media-amazon.com/images/I/516z-D3WmCL.jpg'></img>
    )
}

const Author = () => {
    return (
            <h4 style={{color:'#617d98' , fontSize:'0.75rem'}}>Author Harlan Coben</h4>
    )
};

const Title = () => 
{
    return (
            <h2>Title: The Match</h2>
    )
};

export default Booklist ;
