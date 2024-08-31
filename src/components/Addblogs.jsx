import React from "react";

import "./style.css";

const Addblogs = () => {
    return(
        <>
            <div className="add-blogs">
                <form action="#" className="form-container">
                    <input type="text" placeholder="Enter title" />
                    <textarea name="content" id="content" placeholder="Enter the content here...."></textarea>
                    <input type="submit" />
                </form>

            </div>

        </>
    )
}

export default Addblogs;