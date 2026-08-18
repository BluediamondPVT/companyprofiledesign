import GraphicDesignWebsitesGuide from '@/app/Components/BlogDetails/GraphicDesignWebsitesGuide';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Details"
                title="Looking for the Best Graphic Design Websites? Here’s What You Need to Know!"
                content="Complete Guide for Businesses"
            />
            <GraphicDesignWebsitesGuide />
        </div>
    );
};

export default page;