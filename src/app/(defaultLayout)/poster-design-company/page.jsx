import About4 from '@/app/Components/About/About4';
import Cta from '@/app/Components/Cta/Cta';
import Portfolio from '@/app/Components/Portfolio/Portfolio';
import WhyBestCatalogue from '@/app/Components/Feature/WhyBestCatalogue';
import React from 'react';

export const metadata = {
  title: "Poster Design Company in India | Professional Custom Poster Designs",
  description: "Looking for top poster design company? We craft eye-catching, high-impact marketing poster designs for events, products, and brand campaigns."
};

const PosterDesignPage = () => {
    const posterParagraphs = [
        "Your search for a perfect designer to design your promotional posters ends here!! We are India’s leading designers offering the most versatile and economical solutions for Posters. Companies in business cities like Mumbai, Chennai, Delhi, Bengaluru, Banglore, Lucknow and many more prefer our designing solutions every time for creative poster requirements. Furthermore, we also have worked with international companies to design the best promotional posters. Our design represents your motive explicitly to your customers, your motive will receive a great response with our designs. At the end of what matters to every company is the addition of new customers in their client list which can be done effectively with our creative Poster designs.",
        "Simple, precise and attractive this is what defines a perfect Poster. The Poster is the most economical and top used marketing tool which will always be the best medium for announcing your business in the market and offers to your customers. Posters can be distributed easily in the market with minimal or no cost at all.",
        "Further, there are no limitations in design and content, hence, Posters are proven to be the best tool for marketing offers. Go with the best Poster Design Company to get the latest creative trendy poster."
    ];

    const posterAdvantagesData = [
        {
            icon: "Palette",
            title: "Unique and catchy designs",
            desc: "Posters are usually used to attract customers. We have the freedom to design catchy Posters by using multilingual slang and content to attract customers. This makes Poster best for the consumer-based market."
        },
        {
            icon: "Maximize2",
            title: "Available in various shapes and sizes",
            desc: "A Poster doesn’t have to be any specific shape or size, you can choose any shape it can de design it in the shape of your product!! Yes!! These are some attention seeker techniques and similar techniques can be used to market your business."
        },
        {
            icon: "TrendingUp",
            title: "High Conversion Rate",
            desc: "Posters are very handy and hence they usually reach the masses very rapidly. Offer Posters directly impact your customer’s minds and generate curiosity about your company and offer. Hence, you receive a great footfall for every offer you put."
        }
    ];

    const posterWhyBestFeatures = [
        {
            id: 1,
            icon: "Award",
            title: "A leading Design Company",
            desc: "The ProfileDesignCompany is a leading poster design company in India, it is involved in various design services like Company Profile Design, Flyer & Brochure Design, Catalog, and Poster design. Trusted by a lot of companies in India and MNCs for various designing work."
        },
        {
            id: 2,
            icon: "UserCheck",
            title: "Creative Team",
            desc: "We have the best Creative Team who are experts in Designing creative and eye pleasing artwork to attract the huge amount of people for any targeted event. We have great experience in designing creative Posters for various companies and events which makes us the best poster design company."
        },
        {
            id: 3,
            icon: "Zap",
            title: "Economic Options",
            desc: "Our design solutions are very economical in the market as have a large customer base hence all our operational costs are just a fraction in every design solution. We use our quality to generate quality and minimise the investment of our customers."
        },
        {
            id: 4,
            icon: "Clock",
            title: "Delivery in Committed Time",
            desc: "Our Company believes that Time is the most important asset of any organization and We always save our customer’s time by delivering the content before the committed time."
        }
    ];

    return (
        <div>
            <About4 
                title="Leading Poster design Company"
                subTitle="Create your promotional Posters from the best design company in India"
                paragraphs={posterParagraphs}
                advantagesTitle="Why Professional Poster ?"
                advantagesContent="Professionally designed Poster gives you an added advantage in the market to highlight your business and offers to your customers, we have listed a few advantages of the poster that will help you to decide the best for you,"
                advantagesSubtext=""
                customData={posterAdvantagesData}
            />

            <Portfolio 
                title="Our Previous Work" 
                content="Companies in business cities like Mumbai, Chennai, Delhi, Bengaluru, Banglore, Lucknow and many more prefer our Poster Design company’s solutions every time for creative Poster requirements. Do check our latest designs to see our work and proficiency." 
            />

            <WhyBestCatalogue 
                title="Why Choose Us?"
                subtitle="" 
                customFeatures={posterWhyBestFeatures}
            />

            <Cta 
                title="Contact Us Now"
                content="Our designers use the whole Poster optimally and create a design that has everything flawless like attractive design, professional content, content placement. So whenever you want to attract maximum customer focus on your sale or product, consult Profile Design for your requirement and be assured to receive the best services. Companies in business cities like Mumbai, Chennai, Delhi, Bengaluru, Banglore, Lucknow and many more prefer our designing solutions every time for creative Poster requirements."

            />
        </div>
    );
};

export default PosterDesignPage;
