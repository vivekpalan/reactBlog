import React, { useState } from "react";

import "./style.css";

const CreateBlogs = () => {
    const [text,setText] = useState('');
    const [content,setContent] = useState('');
    const [author,setAuthor] = useState('');
    const [date,setDate] = useState('');
    const [month,setMonth] = useState('');
    const [category,setCategory] = useState('');
    const [image,setImage] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        const data = {text,content,author,date,month,category,image}
        fetch('http://localhost:8005/blogs',{
            method: "POST",
            content: "/application.json",
            body: JSON.stringify(data)
        })
        alert('Blog successfully added')
        history.go(-1)      
    }
    return(
        <>
            <div className="create-blogs">
                <form action="#">
                    <h3 style={{textAlign:"center"}}>Enter your blog</h3>
                    <input type="text" name="text" id="text" required value={text} placeholder="Enter Blog title" onChange={e => setText(e.target.value)}/>
                    <input type="text" name="author" id="author" required placeholder="Enter Blog author" value={author}  onChange={e => setAuthor(e.target.value)}/>
                    <input type="text" name="" id="" placeholder="Enter date" required value={date}  onChange={e => setDate(e.target.value)}/>

                    <select  style={{marginTop:"10px",padding:"10px 20px"}} name="month" required id="month" value={month} onChange={e => setMonth(e.target.value)}>

                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sept">Sept</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                    </select>



                    <select style={{marginTop:"10px",padding:"10px 20px"}} name="category" required id="category" value={category}  onChange={e => setCategory(e.target.value)}>
                        <option value="Tech">Tech</option>
                        <option value="Finance">Finance</option>
                        <option value="Mindfulness">Mindfulness</option>
                        <option value="Learning">Learning</option>
                        <option value="Fitness">Fitness</option>
                    </select>
                    <input type="url" name="Upload Image" id="image" required value={image} placeholder="Enter Image URL"  onChange={e => setImage(e.target.value)}/>

                    <textarea name="blog-content" id="blog-content" required placeholder="Enter the blog content" value={content}  onChange={e => setContent(e.target.value)}></textarea>
                    <input className="submit-btn" type="submit" value="Add" onClick={(e) => handleSubmit(e)} />
                </form>
            </div>

        </>
    )
}

export default CreateBlogs;