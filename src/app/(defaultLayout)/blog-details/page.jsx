import BlogDetails from '@/app/Components/BlogDetails/CompanyProfileSample';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Details"
                title="Company Profile Design in India"
                content="Complete Guide for Businesses"
            />
            <BlogDetails />
        </div>
    );
};

export default page;