import React from "react";
import "./Blog.css";
import BlogImage from "./BlogImage";
import BlogImageTwo from "./BlogImageTwo";
import BlogImageThree from "./BlogImgThree";
function Blog() {
    return (
        <section id="blog">
            <div className="text-center">
                <br /><br /><br /><br />
                <h1>Blog Of React</h1>
                <br /><br />
                <div className="blog-container">
                    <BlogImage />
                    <BlogImageTwo />
                    <br /><br />
                    <BlogImageThree />
                </div>
            </div>
        </section>
    )
}
export default Blog;