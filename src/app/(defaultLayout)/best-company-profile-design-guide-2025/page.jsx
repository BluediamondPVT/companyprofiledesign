import BestCompanyProfileDesignGuide from '@/app/Components/BlogDetails/BestCompanyProfileDesignGuide';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Details"
                title="Best Company Profile Design Guide 2025"
            />
            <BestCompanyProfileDesignGuide />
        </div>
    );
};

export default page;