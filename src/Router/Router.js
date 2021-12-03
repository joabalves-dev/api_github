import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from '../Page/Home';
import NotFound from '../Page/NotFound'
import Repos from '../Page/Repos';


const Router = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='repos' element={<Repos/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;