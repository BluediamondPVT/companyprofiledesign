import React from 'react';

const BlogCommentForm = () => {
    return (
        <div className="contact-form-box2 mt-5 p-4 bg-light rounded-3">
            <div className="sidebar-title mb-2">
                <h3 className="fw-bold" style={{ color: 'var(--secondary-color)' }}>Leave a Comment</h3>
            </div>
            <div className="sidebar-description mb-4 text-muted">
                <p className="small mb-0">Your email address will not be published. Required fields are marked *</p>
            </div>
            <form action="#" method="POST" id="dreamit-form">
                <div className="row g-3">
                    <div className="col-lg-6">
                        <h6 className="form-title small fw-bold">Name *</h6>
                        <div className="form-box">
                            <input type="text" className="form-control" placeholder="Enter Your Name" required />
                        </div>
                    </div>
                    <div className="col-lg-6"> 
                        <h6 className="form-title small fw-bold">Your E-Mail *</h6>
                        <div className="form-box">
                            <input type="email" className="form-control" placeholder="Enter E-Mail" required />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-box">
                            <h6 className="form-title small fw-bold">Comment *</h6>
                            <textarea name="massage" className="form-control" rows={5} placeholder="Write Comment..." required></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <button type="submit" className="btn text-white fw-bold px-4 py-2" style={{ background: 'var(--primary-color)' }}>
                            Submit Comment
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BlogCommentForm;
