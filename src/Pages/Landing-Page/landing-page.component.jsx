import React, {useEffect, useState} from "react";
import BlogCompact from "../../Components/Blog-compact/blog.component";
import { SearchBox } from "../../Components/Search-Box/searchBox.component";
import { getAllBlogs } from "../../services/blog.service";

import { ReactComponent as Logo } from './../../assets/undraw_publish_article_re_3x8h.svg';

import './landing-page.style.scss';

const LandingPage = () => {
    
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getAllBlogs().then(blogsData => setBlogs(blogsData))
    }, [])

    return(
        <div className="landing-page-box">
            <div className="showcase-box">
                <div className="text-box">
                    <h1>
                        Unleash your Zeal!
                    </h1>
                </div>
                <div className="icon-box">
                    <Logo className="logo"/>
                </div>
            </div>
            <div className="blogs-display-box">
                <div className="heading-box">
                    <h1>Blogs</h1>
                </div>
                <SearchBox/>
                <div className="blogs-box">
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

export default LandingPage;