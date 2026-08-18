import React from 'react';
import BlogSidebar from './BlogSidebar';

const BlogLayout = ({ children }) => {
    return (
        <div className="blogs-section py-5">
            <div className="container">
                <div className="row">
                    <BlogSidebar />
                    <div className="col-lg-8">
                        <div className="single-blog-dtls-box">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogLayout;
