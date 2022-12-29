import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import CustomButton from "../custom-button/custom-buttom.component";

import './blog.style.scss';

const BlogCompact = ({blog}) => {
    const {title, likes, blogContent} = blog
    return(
        <div className="blog-compact">
            <div className="title">
                <span>{title}</span>
            </div>
            <ReactQuill
            value={blogContent}
            readOnly = {true}
            theme={'bubble'}
            className = 'blog'
            />
            <div className="likes-box">
                <CustomButton>
                    Like
                </CustomButton>
                <span>likes : {likes}</span>
            </div>
        </div>
    );
}

export default BlogCompact;