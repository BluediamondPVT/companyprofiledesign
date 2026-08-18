"use client"
import { useEffect, useRef, useState } from "react";
import data from '../../Data/faq.json';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { ChevronDown } from "lucide-react";

const Faq = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);


    useEffect(() => {
        loadBackgroudImages();
      }, []);


    return (
        <div className="about-section style-three faq" data-background="/assets/images/resource/about-bg3.jpg">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="company-profile-design-section-title text-center padding-lg">
						<h1>Frequently Asked Questions</h1>
						<p className="mx-auto" style={{ maxWidth: '900px', width: '100%' }}>
							We have listed everything for the information for our customers, Still, if you find any doubt you can connect with us via Email or Social Media Network. Here are answers to some Frequently Asked Questions.
						</p>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 faq-pd">
					<div className="tab_container">
	                    <div id="tab1" className="tab_content">
	                         <ul className="accordion">
                             {data.slice(0, 4).map((item, index)=>(
		                        <li key={index} className={`cs_accordian ${index === openItemIndex ? "active" : "" }`}>
		                            <a onClick={() => handleItemClick(index)}><span> {item.title}</span> <ChevronDown size={18} style={{ display: 'inline-block', transition: 'transform 0.3s ease' }} className="faq-chevron" /></a>
		                            <p ref={accordionContentRef}>{item.desc}</p>
		                        </li>
                                ))}
		                    </ul>
	                    </div>
	                </div>
				</div>
				<div className="col-lg-6 col-md-6">
					<div className="tab_container">
	                    <div id="tab1" className="tab_content">
	                         <ul className="accordion">
                             {data.slice(4).map((item, index)=>{
                                const absoluteIndex = index + 4;
                                return (
                                    <li key={absoluteIndex} className={`cs_accordian ${absoluteIndex === openItemIndex ? "active" : "" }`}>
                                        <a onClick={() => handleItemClick(absoluteIndex)}><span> {item.title} </span> <ChevronDown size={18} style={{ display: 'inline-block', transition: 'transform 0.3s ease' }} className="faq-chevron" /></a>
                                        <p ref={accordionContentRef}>{item.desc}</p>
                                    </li>
                                );
                             })}
		                    </ul>
	                    </div>
	                </div>
				</div>
			</div>
			
			<div className="row mt-5">
				<div className="col-lg-12 text-center">
					<div className="faq-contact-box" style={{ 
						padding: '22px 45px', 
						background: 'rgba(255, 77, 0, 0.06)', 
						borderRadius: '16px', 
						display: 'inline-block',
						border: '1px solid rgba(255, 77, 0, 0.2)',
						boxShadow: '0 4px 15px rgba(0, 48, 97, 0.04)'
					}}>
						<h5 className="mb-0" style={{ fontSize: '18px', fontWeight: '600', color: 'var(--secondary-color)' }}>
							For More Query Contact us on : <a href="tel:+917718967729" style={{ color: 'var(--primary-color)', fontWeight: '700', textDecoration: 'none', marginLeft: '6px' }}>+91 77189 67729</a>
						</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Faq;