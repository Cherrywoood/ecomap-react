import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main/Main";
import Guides from "../pages/Guides";
import AddPoint from "../pages/AddPoint";
import Contacts from "../pages/Contacts";

const Router = () => {
    return (
        <Routes>
            <Route path='*' element={<Main/>}/>
            <Route path='/guides' element={<Guides/>}/>
            <Route path='/addPoints' element={<AddPoint/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
    )
};

export default Router;