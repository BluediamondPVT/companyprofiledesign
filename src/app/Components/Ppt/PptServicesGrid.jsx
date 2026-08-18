"use client"
import React from 'react';
import { 
    HardHat, 
    Palette, 
    Shirt, 
    Pill, 
    Megaphone, 
    Sparkles, 
    Utensils, 
    Laptop, 
    Layers 
} from 'lucide-react';

const PptServicesGrid = () => {
    const services = [
        {
            icon: <HardHat size={40} color="#be185d" />,
            title: "Construction company profile ppt",
            desc: "We cover the company profile of the construction company, which provides a professional summary of the business and activities performed by them. It can use in several ways, such as informing people and stakeholders about its existence and purpose, raising capital, and generating valuable investors."
        },
        {
            icon: <Palette size={40} color="#be185d" />,
            title: "Interior design company profile ppt",
            desc: "We are a leading interior design company profile Power Point presentation making company based in Mumbai, India. So, whether your application is business, how-to, education, sales, marketing, BDIT is a great resource. And, best of all, most of its cool features are easy to use."
        },
        {
            icon: <Shirt size={40} color="#be185d" />,
            title: "Fashion company profile ppt",
            desc: "PowerPoint presentations are the best way to present information to your audience. Using a fashion company profile PowerPoint presentation presentation lets you demonstrate your ideas and show off your sense of style simultaneously. It enables you to have a professional-looking presentation about fashion without a lot of hard work."
        },
        {
            icon: <Pill size={40} color="#be185d" />,
            title: "Pharmaceutical company profile ppt",
            desc: "Pharmaceutical companies focus on the research, development, and distribution of drugs and medications. If you work in the pharmaceutical sector, a corporate pharmaceutical company profile PPT is needed to communicate your discoveries and new products to the world. Use the team slide, product categories slide, and other elements to showcase your company’s value clearly and concisely."
        },
        {
            icon: <Megaphone size={40} color="#be185d" />,
            title: "Digital marketing company profile ppt",
            desc: "Hiring digital marketing company profile PPT writers for your digital marketing business would be highly recommended. They can churn out crafty content that can turn your profile into a marketing tool. Your customers, stakeholders, and investors would find valuable information in your profile, enabling them to make informed decisions."
        },
        {
            icon: <Sparkles size={40} color="#be185d" />,
            title: "Housekeeping company profile ppt",
            desc: "If you are running a cleaning company, use these housekeeping company profile PowerPoint presentation Slides to grow your business and attract new customers. Present yourself and your skills with a neater and cleaner approach which is the key to acquiring new projects; with the help of this sample proposal letter for cleaning services PowerPoint complete deck."
        },
        {
            icon: <Utensils size={40} color="#be185d" />,
            title: "Food company profile ppt",
            desc: "This Food company profile PowerPoint presentation includes unique designs and results that you can use freely for your own presentation needs. Food Powerpoint Templates Design collection includes high-quality corporate templates, management technique presentations, and many business-associated PowerPoint templates."
        },
        {
            icon: <Laptop size={40} color="#be185d" />,
            title: "IT company profile ppt",
            desc: "The IT company profile ppt Template helps the user creates a company profile to present it as a promotional tool and prepare the cover letter for its shape. In addition, the user can customize the slide and change the background color for the company presentation."
        },
        {
            icon: <Layers size={40} color="#be185d" />,
            title: "Others",
            desc: "Hence, don’t waste time thinking; download the highly appreciated proposal as per your suitability and use. BDIT: The leading Company Profile PPT Company based in Mumbai, India now helps to save you from the hassle of creating a cleaning proposal from scratch."
        }
    ];

    return (
        <section className="ppt-services-section" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-10">
                        <h2 style={{ 
                            color: '#1c1f1c', 
                            fontSize: '36px', 
                            fontWeight: '700', 
                            fontFamily: 'var(--heading-font)',
                            marginBottom: '20px',
                            lineHeight: '1.3'
                        }}>
                            To Get Ahead, You have to get started with company profile ppt.
                        </h2>
                        <p style={{ color: '#55585b', fontSize: '17px', lineHeight: '1.8' }}>
                            Company Profile Presentation PPT services offered by BDIT can cover all of your business needs. A dynamic design could be the key to achieving success with your next presentation. Therefore, a professional company ppt presentation agency can make the difference between success and failure. Company profile ppts are a crucial element of businesses, so it is imperative to create them properly. A Company Profile Powerpoint Presentation Slides for your next business project can help you secure funding and customers.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {services.map((service, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6">
                            <div style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '12px',
                                padding: '35px 25px',
                                height: '100%',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)';
                            }}
                            >
                                <div style={{ marginBottom: '20px' }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ 
                                    color: '#0f172a', 
                                    fontSize: '20px', 
                                    fontWeight: '700',
                                    marginBottom: '15px'
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{ 
                                    color: '#475569', 
                                    fontSize: '15.5px', 
                                    lineHeight: '1.7',
                                    margin: 0
                                }}>
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PptServicesGrid;
