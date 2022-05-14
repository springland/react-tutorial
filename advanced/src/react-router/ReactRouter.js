import React from 'react'
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
import NavBar from './NavBar';
const ReactRouter = () =>

{
    
    return (
        <>
            <h2> React Router</h2>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element = {<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/people' element={<People/>}></Route>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/person/:id' element={<Person/>}></Route>
                    <Route path='*' element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
    
}

export default ReactRouter ;


