import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main/Main";
import About from "../pages/About";
import EcoEvents from "../pages/EcoEvents";
import EcoProducts from "../pages/EcoProducts";
import RecyclingPlaces from "../pages/RecyclingPlaces";

const Router = () => {
    return (
        <Routes>
            <Route path='*' element={<Main/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/events' element={<EcoEvents/>}/>
            <Route path='/products' element={<EcoProducts/>}/>
            <Route path='/points' element={<RecyclingPlaces/>}/>
        </Routes>
    )
};

export default Router;