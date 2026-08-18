import CompanyProfileContent from '@/app/Components/BlogDetails/CompanyProfileContent';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Details"
                title="what should a company profile content"
                content="Complete Guide for Businesses"
            />
            <CompanyProfileContent />
        </div>
    );
};

export default page;