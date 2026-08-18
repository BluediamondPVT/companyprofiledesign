import About4 from '@/app/Components/About/About4';
import Portfolio from '@/app/Components/Portfolio/Portfolio';
import WhyBestCatalogue from '@/app/Components/Feature/WhyBestCatalogue';
import GraphicWhyMatters from '@/app/Components/Graphic/GraphicWhyMatters';
import GraphicFaq from '@/app/Components/Graphic/GraphicFaq';
import GraphicCtaCard from '@/app/Components/Graphic/GraphicCtaCard';
import React from 'react';

export const metadata = {
  title: "Graphic Design Company in India | Creative Graphic Designers",
  description: "Top graphic design company offering custom, professional and creative graphic design services for your business."
};

const GraphicDesignPage = () => {
    const graphicParagraphs = [
        "Are you searching for a Graphic Design Company in India that delivers visually striking, brand-focused, and highly creative design solutions? You’ve come to the right place. We are a leading graphic design agency offering premium-quality designs that help businesses build a strong brand identity and communicate effectively with their audience.",
        "Whether you need branding, marketing materials, social media creatives, packaging, or corporate designs, our expert designers bring your ideas to life with precision and creativity."
    ];

    const graphicAdvantagesData = [
        {
            icon: "Palette",
            title: "Highly Skilled & Creative Designers",
            desc: "Our team consists of experienced graphic designers who understand branding, marketing, and visual communication deeply."
        },
        {
            icon: "Sparkles",
            title: "Customized Designs for Every Brand",
            desc: "We create unique, concept-driven designs tailored to your brand personality, audience, and business goals."
        },
        {
            icon: "Layers",
            title: "End-to-End Graphic Design Solutions",
            desc: "From logo design to packaging, we offer a full suite of creative services under one roof."
        },
        {
            icon: "Zap",
            title: "Fast Turnaround Time",
            desc: "Professional designs delivered quickly without compromising quality."
        },
        {
            icon: "CircleDollarSign",
            title: "Affordable Design Packages",
            desc: "Premium-quality designs at competitive Indian pricing—perfect for startups, SMEs, and enterprises."
        },
        {
            icon: "RotateCcw",
            title: "Unlimited Revisions",
            desc: "We refine your favorite design until it aligns perfectly with your brand vision."
        },
    ];

    const graphicWhyBestFeatures = [
        {
            id: 1,
            icon: "Sparkles",
            title: "Logo Design & Brand Identity",
            desc: "Creative and memorable logos that define your brand."
        },
        {
            id: 2,
            icon: "FileText",
            title: "Print Design",
            desc: "Brochures, flyers, business cards, posters, banners, packaging inserts, etc."
        },
        {
            id: 3,
            icon: "Package",
            title: "Packaging Design",
            desc: "Professional packaging artwork for FMCG, cosmetics, food, health, and retail brands."
        },
        {
            id: 4,
            icon: "Send",
            title: "Social Media Design",
            desc: "High-quality creatives for Instagram, Facebook, LinkedIn, and ads."
        },
        {
            id: 5,
            icon: "Laptop",
            title: "Website Graphics & UI Elements",
            desc: "Web banners, icons, layouts, and user-friendly digital visuals."
        },
        {
            id: 6,
            icon: "Target",
            title: "Advertising Creatives",
            desc: "Creative ad banners, campaign graphics, and promotional materials."
        },
        {
            id: 7,
            icon: "Palette",
            title: "Infographics & Illustrations",
            desc: "Engaging visuals and custom illustrations for storytelling and brand communication."
        }
    ];

    return (
        <div>
            <About4 
                title="Graphic Design Company in India"
                subTitle="Creative, Modern & Professional Design Services"
                paragraphs={graphicParagraphs}
                advantagesTitle="Why We Are the Best Graphic Design Company in India?"
                advantagesContent="Choosing the right design partner can significantly impact your brand’s success. Here’s why clients across India and worldwide trust us:"
                advantagesSubtext=""
                customData={graphicAdvantagesData}
                imgSrc="/assets/images/resource/graphic-firstpage.png"
            />

            <Portfolio 
                title="Our Previous Work" 
                content="As a trusted graphic design company, we have delivered creative and professional design services to top companies across major cities including Mumbai, Delhi, Chennai, Bangalore, Bengaluru, and Lucknow, as well as to many international clients. Explore the work showcased below to get ideas and understand the quality standards we maintain as a leading graphic design company." 
            />

            <WhyBestCatalogue 
                title="Our Graphic Design Services in India"
                subtitle="We offer comprehensive graphic design solutions to support all your branding and marketing needs."
                customFeatures={graphicWhyBestFeatures}
            />

            {/* Why Good Graphic Design Matters */}
            <GraphicWhyMatters />

            {/* FAQs Section */}
            <GraphicFaq />

            {/* CTA Card */}
            <GraphicCtaCard />
        </div>
    );
};

export default GraphicDesignPage;
