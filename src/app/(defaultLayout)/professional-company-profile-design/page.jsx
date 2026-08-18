import ProfessionalCompanyProfileDesign from '@/app/Components/BlogDetails/ProfessionalCompanyProfileDesign';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Details"
                title="Professional Company Profile Design"
            />
            <ProfessionalCompanyProfileDesign />
        </div>
    );
};

export default page;