"use client"
import React from 'react';
import { Check } from 'lucide-react';

const ConstructionChecklist = () => {
    const listItems = [
        {
            title: "Company Introduction and Overview:",
            desc: "Indicate how long the company has been in business, whether it is a builders and developers company profile, a private company, or a public corporation. Also, provide the number of employees and the turnover of the company. Provide a list of the types of work the company undertakes. Examples include private and public housing, factories, offices, retail buildings, schools, hospitals, public buildings, civil engineering, and infrastructure. In addition, indicate whether the company handles refurbishment of existing structures."
        },
        {
            title: "Include awards and recognition:",
            desc: "The next section of your profile should describe any awards or recognition the company has received. This will enable you to demonstrate the company’s value and prestige within its industry and community."
        },
        {
            title: "Include the company’s mission statement:",
            desc: "Your company’s mission statement can be included in the next section of the profile. A mission statement explains a company’s purpose and values. Here are some elements of a strong mission statement:",
            subItems: [
                {
                    title: "Target audience:",
                    desc: "A strong mission statement describes the key consumer market the company targets."
                },
                {
                    title: "Product or service:",
                    desc: "Mission statements also can make clear what product or service the company offers."
                },
                {
                    title: "Distinction:",
                    desc: "Lastly, a mission statement can describe what makes its product unique in its market."
                }
            ]
        },
        {
            title: "Describe products and services:",
            desc: "You can then describe in detail the products and services the company offers. This can be an exhaustive list, a summary of the company’s best-selling products, or a more general description of the types of products the company offers."
        },
        {
            title: "Incorporate testimonials:",
            desc: "In your company profile, you may include a section for testimonials from customers and employees that show the company delivers a positive culture to employees or satisfies customers. The testimonial can be a simple statement about the person’s experience with the company, along with their name and title. You can also include photos with the testimonials."
        },
        {
            title: "Samples of Construction Company Profiles:",
            desc: "To get a better sense of the expertise and abilities we developed during our journey while working with our clients from diverse sectors worldwide, please view our most recent general building design projects."
        }
    ];

    return (
        <section className="construction-checklist-section" style={{ padding: '0 0 80px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={{ marginBottom: '35px' }}>
                            <h2 style={{ 
                                color: '#0f172a', 
                                fontSize: '28px', 
                                fontWeight: '700', 
                                fontFamily: 'var(--heading-font)',
                                marginBottom: '16px',
                                lineHeight: '1.3'
                            }}>
                                What should your construction company profile contain?
                            </h2>
                            <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                                It is an essential component of a construction company’s bid documents and general communications material, such as corporate brochures, websites, and annual reports. Besides basic information, such as location and year of establishment, a practical construction company profile should contain information explaining the type of work the company handles, its capabilities and resources, and its financial stability.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {listItems.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <div style={{ color: '#0ea5e9', marginTop: '4px', flexShrink: 0 }}>
                                        <Check size={20} strokeWidth={3} />
                                    </div>
                                    <div style={{ color: '#475569', fontSize: '16px', lineHeight: '1.75' }}>
                                        <p style={{ margin: 0 }}>
                                            <span style={{ color: '#0f172a', fontWeight: '700', marginRight: '6px' }}>
                                                {item.title}
                                            </span>
                                            {item.desc}
                                        </p>
                                        {item.subItems && (
                                            <ul style={{ 
                                                listStyleType: 'circle', 
                                                paddingLeft: '24px', 
                                                marginTop: '8px', 
                                                marginBottom: 0,
                                                display: 'flex', 
                                                flexDirection: 'column', 
                                                gap: '6px' 
                                            }}>
                                                {item.subItems.map((sub, sIdx) => (
                                                    <li key={sIdx} style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6' }}>
                                                        <span style={{ color: '#0f172a', fontWeight: '700', marginRight: '6px' }}>
                                                            {sub.title}
                                                        </span>
                                                        {sub.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConstructionChecklist;
