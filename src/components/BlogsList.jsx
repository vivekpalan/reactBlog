import React from "react";
import {Link} from "react-router-dom"

import "./style.css";

const Blogslist = ({blogs , title}) => {
    return(
        <>
            <div className="blogs-list flex-column" >
                <h2>{title}</h2>
                <div className="blog-container flex-column" >
                    {blogs.map(b => 
                    
                    <li key={b.id} className="blogs-item"> 
                            <div className="date">
                                <h4>{b.month}</h4>
                                <h2>{b.date}</h2>
                            </div>
                            <div className="img-container">
                                <img src={b.img} alt={b.alt} />
                            </div>
                            <div className="user-details blog-content">
                                <div className="details">
                                    <h3>{b.title}</h3>
                                    <h4 className="title">Written by: {b.author}</h4>
                                </div>
                                    
                                <p className="blog-body">{b.content}</p>  

                                <Link to={`/blogs/${b.id}`}> <h4 className="view-blog">View</h4> </Link>
                            </div>
                            <h4 className="content-type" style={{color:'white', backgroundColor: b.contentColor,borderRadius:'5px',padding:'2px 10px'}}>{b.contentType}</h4>
                    </li> )}
                </div>
            </div>
            

        </>
    )
}

export default Blogslist;