"use client"
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import data from '../../Data/feature1.json';
import About1 from "../About/About1";
import counter from '../../Data/counter.json';
import Image from "next/image";

const Feature1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="feature-section" data-background="/assets/images/resource/feature-bg.webp">
                <div className="container">
                    <div className="row dream-bg">
                        <div className="col-lg-12">
                            <div className="company-profile-design-section-title padding-lg">
                            <SectionTitle
                                    Title="Complete Company Profile Design <br> Services Under One Roof"
                                    Content="Get a professional company profile design starting at just ₹2500 from India’s leading profile design company. <br>  We create tailored profiles for businesses across all sectors."
                                ></SectionTitle>

                                <h3 className="text-center fs-2 pt-4 text-dark">Our Company Profile Design Process</h3>
                            </div>
                        </div>
                        <div className="dream-shape">
                            <Image src="/assets/images/resource/border2.png" alt="img" width={774} height={172}   />
                        </div>
                        <div className="dream-shape2">
                            <Image src="/assets/images/resource/icon.png" alt="img" width={41} height={41}   />
                        </div>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="feature-single-box">
                                <div className="feature-icon">
                                 <Image src={item.icon} alt="img" width={90} height={96}   />
                                </div>
                                <div className="feature-content">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <About1 
                        mainimage="/assets/images/slider/about-home.jpg"
                        title1="Get Complete Company Profile"
                        title2="Design Services Online"
                        content="Professionally designed profile or brochure is an excellent and informative tool that can convince your potential customers and encourage them to choose you.The company’s profile or creative brochure can achieve great conversions from customers and achieve more sales which can’t be achieved by any other means."
                        listTitle="Steps to get Profile Design Service Online :"
                        listItem={[ 
                            "Provide us necessary details about your company, your logo, and your domain.",
                            "Our professional content writers will prepare content about your company.",
                            "We will provide you content for review and approval.",
                            "We will select and prepare a design for your profile.",
                            "We will provide you 1st draft for review and approval.",
                            "Then we will discuss and synergize your ideology and our design.",
                            "Finally, on approval, we will provide you a copy for printing."
                        ]} 
                        btnName="Learn More About Us"
                        btnUrl="/about-companyprofiledesign"
                    ></About1>
 
                    <div className="row counter-bg">
                    {counter.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6">
                            <div className="single-counter-box">
                                <div className="counter-title">
                                    <span className="counter">{item.number}</span>
                                    <span className="counter-symbol">{item.symbol}</span>
                                </div>
                                <div className="counter-text">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        ))}

                        <div className="dream-shape3">
                        <Image src="/assets/images/resource/shape-1.png" alt="img" width={530} height={403}   />
                        </div>
                        <div className="dream-shape4">
                        <Image src="/assets/images/resource/shape-2.png" alt="img" width={46} height={46}   />
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Feature1;