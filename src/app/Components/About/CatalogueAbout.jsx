"use client"
import { useEffect } from 'react';
import data from '../../Data/services2.json';
import SectionTitle from '../Common/SectionTitle';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, CircleDollarSign, Award, HelpCircle, Palette, Maximize2, Layers, Sparkles, Target, Zap, BarChart3, Shapes, Package, FileText, BookOpen, Search, Users, Printer, RotateCcw, Clock, CheckCircle } from 'lucide-react';

const iconMap = {
    TrendingUp,
    CircleDollarSign,
    Award,
    Palette,
    Maximize2,
    Layers,
    Sparkles,
    Target,
    Zap,
    BarChart3,
    Shapes,
    Package,
    FileText,
    BookOpen,
    Search,
    Users,
    Printer,
    RotateCcw,
    Clock,
    CheckCircle
};

const CatalogueAbout = ({
    title = "India’s Top Catalogue Design Company",
    subTitle,
    subtitle,
    paragraphs,
    advantagesTitle = "Get Perfect Results with the Best Catalogue Design Company",
    advantagesContent = "Partner with the best catalogue design company to create professionally designed catalogues that showcase your products and services with clarity and impact. Our expert catalogue design solutions help businesses present detailed information in a visually engaging format, improving brand credibility and driving better customer engagement across print and digital platforms.",
    advantagesSubtext = "Here are a few advantages to having catalogues with the best catalogue design company:",
    customData,
    imgSrc,
    image,
    aboutImage
}) => {
    const mainImage = imgSrc || image || aboutImage || "/assets/images/resource/catalogue-design-about.jpg";
    const defaultParagraphs = [
        "As a leading catalogue design company, we help businesses create visually powerful, professionally structured, and sales-driven product catalogues that strengthen brand identity and boost conversions. A well-designed catalogue plays a crucial role in presenting your products clearly while influencing customer buying decisions, which is why choosing the right catalogue design company is essential.",
        "We specialize in designing custom print and digital catalogues that are visually engaging, easy to share, and optimized for marketing and sales performance. As a trusted catalogue design company in India, we understand how to combine creative layouts, compelling visuals, clear typography, and structured content to deliver catalogues that leave a lasting impression.",
        "From initial concept development and creative strategy to final market-ready execution, our catalogue design company manages the complete design process. Whether you are launching a new product line, updating an existing catalogue, or creating a digital catalogue for online distribution, we deliver tailored design solutions that align with your business goals.",
        "If you are looking for a reliable catalogue design company that delivers creativity, quality, and measurable results, we are your ideal partner for high-impact catalogue design solutions."
    ];

    const displayParagraphs = paragraphs || defaultParagraphs;
    const cardsData = customData || data;

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="about-section style-three" data-background="/assets/images/resource/about-bg3.jpg">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-5 col-md-12">
					<div className="about-left-thumb">
					<Image src={mainImage} alt={title || "img"} width={580} height={493} priority />
					</div>
				</div>
				<div className="col-lg-7">
					<div className="company-profile-design-section-title">
						<h1>{title}</h1>
						{(subTitle || subtitle) && <h2>{subTitle || subtitle}</h2>}
						{displayParagraphs.map((pText, pIndex) => (
							<p key={pIndex} className='my-1 py-1'>{pText}</p>
						))}
					</div>
					<div className="about-button">
						<Link className="company-profile-design-button" href="/contact-us">Learn More <i className="bi bi-arrow-right-short"></i> </Link>
					</div>
				</div>
			</div>
			{/* <div className="row counter-bg">
            {counter.map((item, i) => (
				<div key={i} className="col-lg-3">
					<div className="single-counter-box">
						<div className="counter-title">
							<h1 className="counter">{item.number}</h1>
							<h1>{item.symbol}</h1>
						</div>
						<div className="counter-text">
							<p>{item.desc}</p>
						</div>
					</div>
				</div>
                ))}

			</div> */}
			<div className="row">
				<div className="col-lg-12">
					<div className="company-profile-design-section-title text-center padding-lg">
                        <SectionTitle
                            Title={advantagesTitle}
                            Content={advantagesContent}
                        ></SectionTitle>

						{advantagesSubtext && <p className='w-75 text-start'>{advantagesSubtext}</p>}
					</div> 
				</div>
                {cardsData.map((item, i) => {
					const IconComponent = iconMap[item.icon] || HelpCircle;
					return (
						<div key={i} className="col-lg-4 col-md-6 mb-4 d-flex">
							<div className="single-choose-us-box h-100 w-100 mb-0">
								<div className="choose-icon d-inline-flex align-items-center justify-content-center">
									<IconComponent size={34} color="#ffffff" />
								</div>
								<div className="choose-content">
									<h3> {item.title} </h3>
									<p> {item.desc} </p>
								</div>
							</div>
						</div>
					);
                })}
				
			</div>
		</div>
	</div>
    );
};

export default CatalogueAbout;
