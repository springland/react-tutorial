import React , {useState , useEffect} from 'react'

const MultipleReturns = () => {

    const url = 'https://api.github.com/users/QuincyLarson' ;
    const [isLoading , setIsLoading] = useState(true);
    const [isError , setIsError] = useState(false);
    const [ errorMsg , setErrorMsg] = useState('');
    const [ user , setUser] = useState({})


    useEffect ( () => {
        fetch(url).then(
            (resp) => 
            
            {
                if(resp.status < 200 || resp.status >= 400)
                {
                    setIsError(true);
                    throw new Error("http response is " + resp.status)
                }
                else
                {
                    return resp.json();
                } 
            }    
        ).then(
            (user) => {
                setUser(user);
                setIsLoading(false)
            }   
        ). catch(
            error => {
                console.log(error);
                setErrorMsg(error.message);
            }
        ) } , [] );


    

    console.log(user);

    if(isLoading) {
        return <h1> Loading ....</h1>
    }
    else if ( isError)
    {
        return (
            <div>
            <h1> {errorMsg}</h1>
            
            </div>
        );
    }

    return (
        <>
            <h1> Multiple Returns</h1>

            <div>
                <img src={user.avatar_url} />
                <h4> {user.login}</h4>
                <a href={user.html_url}>profile</a>
            </div>
        </>


    )

}

export default MultipleReturns;