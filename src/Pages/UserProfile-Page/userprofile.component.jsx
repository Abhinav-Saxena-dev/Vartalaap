import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/custom-button/custom-buttom.component";
import UserImage from "../../Components/UserImage/userimage.component";

import BlogCompact from "../../Components/Blog-compact/blog.component";

import { useSelector } from "react-redux";

import { getUserBlogs } from "../../services/blog.service";

import './userprofile.style.scss';

const UserProfile = () => {
    
    const [blogs, setBlogs] = useState([]);

    const user = useSelector(state => state.user.currentUser)


    useEffect(() => {
        getUserBlogs(user.currentUser.id).then(blogsData => setBlogs(blogsData))
    }, [])

    return(
        <div>
            <div className="user-profile">
                <div className="identity-box">
                    <div className="identity">
                        <div className="image-box">
                            <UserImage/>
                        </div>
                        <div className="name-box">
                            <span className="name">Abhinav Saxena</span>
                        </div>
                        <div className="number-follow-box">
                            <div className="follow-button-box">
                                <Link to = '/editblog'>
                                    <CustomButton>Create Blog</CustomButton>
                                </Link>
                            </div>
                            <div className="followers-box">
                                <span className="number-followers">Followers : 99</span>
                            </div>
                        </div>
                    </div>
                    <div className="social-media">
                    </div>
                </div>
                <div className="blog-box">
                    {
                        blogs.length ? 
                        blogs.map(blog => 
                            <BlogCompact blog = {blog}/>
                            )
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
}

export default UserProfile;