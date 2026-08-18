import CompanyProfileSample from '@/app/Components/BlogDetails/CompanyProfileSample';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Details"
                title="Top 5 Inspiring Company Profile samples for business"
            />
            <CompanyProfileSample />
        </div>
    );
};

export default page;