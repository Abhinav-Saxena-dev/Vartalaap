import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBlogDocument } from "../../services/blog.service";
import CustomButton from './../../Components/custom-button/custom-buttom.component';

import './editblog.style.scss'

const WriteBlog = () => {

  const navigate = useNavigate();

  const user = useSelector(state => state.user.currentUser)
  
  useEffect(() => {
    if(!user){
      navigate('/')
    }
  }, [])

  const [blog, setBlog] = useState("");
  const [blogDet, setBlogDet] = useState({
    By : user.currentUser.displayName,
    title : "",
    likes : 0,
    comments : [],
  })
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setBlogDet(prev => ({
      ...prev,
      [name] : value,
    }))
  }
  
  const handleSubmit = async () => {
    try{
      await createBlogDocument(user, {blogContent : blog, ...blogDet})
      setBlog("");
      setBlogDet({
        title : "",
        likes : 0,
        comments : [],
        isPublished : false,
      })
    }catch(err){
      console.log(err);
    }
  }

  const toolbar = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    ["link", "image"],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  return (
    <div className="blog-box">
      <form >
        <label>Title : </label>
        <input type="text" name = "title" value={blogDet.title} onChange = {handleChange}/>
      </form>
      <ReactQuill
        className="blog"
        theme="snow"
        value={blog}
        onChange={setBlog}
        modules={{ toolbar }}
      />

      <CustomButton onClick = {handleSubmit}>Create Blog</CustomButton>
    </div>
  );
};

export default WriteBlog;
