import Navbar from "./Navbar";
import Blogslist from "./BlogsList";
import useFetch from "./useFetch";
import Home from './Home';
import CreateBlogs from './CreateBlogs';
import NewBlogs from './NewBlogs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './style.css'
import Hero from "./Hero";

const ToDo = ()=>{
    return(
        <>
            <Router>
                <div className="top-section">
                    <Navbar/> 
                    <Hero/>     

                </div>
                    <Routes>
                        <Route exact path='/' element={ <Home/>}></Route>
                        <Route path='/create' element={<CreateBlogs/>}> </Route>
                        <Route path='/blogs/:id' element={<NewBlogs/>}></Route>
                    </Routes>    
            </Router>
        </>
       
    )
}

export default ToDo;