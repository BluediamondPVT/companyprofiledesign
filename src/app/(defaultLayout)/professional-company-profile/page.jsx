import BlogDetails from '@/app/Components/BlogDetails/CompanyProfileSample';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Details"
                title="How can you make a professional company profile?"
                content="Complete Guide for Businesses"
            />
            <BlogDetails />
        </div>
    );
};

export default page;