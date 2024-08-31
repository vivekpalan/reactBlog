import React from 'react';

import './style.css'

const BlogDetails = ()=>{

    const { id } = useParams()
    return(
        <>
            <h3 className='blogdetails-h3'>Blog value accessed : {id}</h3>
        </>
    )
   
}

export default BlogDetails;