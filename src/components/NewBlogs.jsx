import React from 'react'

import './style.css'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const NewBlogs = ()=>{
    const {id} = useParams();

    const {data,isPending,error} = useFetch(`http://localhost:8005/blogs/${id}`);

    function handleDelete(e){
        fetch(`http://localhost:8005/blogs/${id}`,{
            method:"DELETE",
            content:"/application.json"
        })
        history.go(-1)
    }
    return(
        <>
            {error && <div>{error}</div>}
            {isPending && <div className='flex'>Loading....</div>}
            {data && <div>
                <article className="blog-view">
                <div className="img-container">
                            
                    <img src={data.img} alt={data.alt} />
                </div>
                    <h2>{data.title}</h2>
                    <h4>{data.date} {data.month}</h4>
                    
                    <h4 className="title">Written by: {data.author}</h4>
                    <p>{data.content}</p>
                <button className="delete-btn" onClick={(e) => handleDelete(e)}>Delete</button>
                </article>

            </div>
                 
            }

            
        </>
       
    )
}

export default NewBlogs;