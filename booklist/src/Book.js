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

export default Book ;