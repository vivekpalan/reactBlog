import React from "react";
import useFetch from "./useFetch";
import Blogslist from "./BlogsList";
// import { Link } from "react-router-dom"

import "./style.css";

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8005/blogs')

    return(
        <>
            {error && <div className="error-message">{error}</div>}
            {isPending && <div className="flex" style={{marginTop:'10px'}}>Loading....</div>}
            {blogs && <Blogslist blogs={blogs} title="All Blogs"/>}

        </>
    )
}

export default Home;