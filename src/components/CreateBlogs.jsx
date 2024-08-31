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
        history.pushState("/")
        
    }
    return(
        <>
            <div className="create-blogs">
                <form action="#">
                    <input type="text" name="text" id="text" required value={text} placeholder="Enter Blog title" onChange={e => setText(e.target.value)}/>
                    <textarea name="blog-content" id="blog-content" required placeholder="Enter the blog content" value={content}  onChange={e => setContent(e.target.value)}></textarea>
                    <input type="text" name="author" id="author" required placeholder="Enter Blog author" value={author}  onChange={e => setAuthor(e.target.value)}/>
                    <input type="text" name="" id="" placeholder="Enter date" required value={date}  onChange={e => setDate(e.target.value)}/>
                    <input type="text" name="" id="" placeholder="Enter month" required value={month}  onChange={e => setMonth(e.target.value)} />

                    <select name="category" required id="category" value={category}  onChange={e => setCategory(e.target.value)}>
                        <option value="Tech">Tech</option>
                        <option value="Finance">Finance</option>
                        <option value="Mindfulness">Mindfulness</option>
                        <option value="Learning">Learning</option>
                        <option value="Fitness">Fitness</option>
                    </select>
                    <input type="file" name="Upload Image" id="image" required value={image}  onChange={e => setImage(e.target.value)}/>

                    <input type="submit" value="Add" onClick={(e) => handleSubmit(e)} />
                </form>
            </div>

        </>
    )
}

export default CreateBlogs;