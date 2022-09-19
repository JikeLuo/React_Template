import React from 'react';
import {HashRouter as Router, Route, Routes} from "react-router-dom";

import Home from './component/Home.jsx'
import Redirect from "./Redirect.jsx";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />

                <Route path='*' element={<Redirect />} />
            </Routes>
        </Router>
    );
};

export default App;

