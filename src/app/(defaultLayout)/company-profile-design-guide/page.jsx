import CompanyProfileDesignGuide from '@/app/Components/BlogDetails/CompanyProfileSample';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Details"
                title="Company Profile Design Complete Guide for Businesses"
            />
            <CompanyProfileDesignGuide />
        </div>
    );
};

export default page;