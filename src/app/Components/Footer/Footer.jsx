"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";

const Footer = () => {

      const OurServices = [
        {title: 'Catalogue Design Company', link: '/catalogue-design-company'},
       
        {title: 'Brochure Design Company', link: '/brochure-design-company'},
        {title: 'Flyer Design Company', link: '/flyer-design-company'}
      ];

      const QuickLinks = [
        {title: 'Company Profile Writing', link: '/company-profile-writing'},
        {title: 'Company Profile Maker', link: '/company-profile-maker'},
        {title: 'Company Profile PPT', link: '/company-profile-ppt'},
        {title: 'Construction Company Profile', link: '/construction-company-profile-design'},
        {title: 'Graphic Design Company in India', link: '/graphic-design-company-in-india'},
        {title: 'Product Packaging Design Company', link: '/product-packaging-design-company'},
        {title: 'Logo Design Company in India', link: '/logo-design-company-in-india'}
      ];

      const AboutUsLinks = [
        {title: 'Home', link: '/'},
        {title: 'About', link: '/about-companyprofiledesign'},
        {title: 'Portfolio', link: '/portfolio'},
        {title: 'Terms and Conditions', link: '/terms-and-conditions'},
        {title: 'Privacy Policies', link: '/privacy-policies'},
        {title: 'Refund Policy', link: '/refund-policy'}
      ];

      useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="footer-section" data-background="/assets/images/resource/footer-bg.webp"> 
		<div className="container-fluid px-sm-3 px-lg-5 px-xl-5">
			<div className="row">
				
                {/* Column 1 */}
				<div className="col-lg-3  col-md-6 col-12 mb-4">
					<div className="widget widget-nav-menu">
						<h4 className="widget-title custom-widget-title">Contact Info</h4>
						<div className="menu-quick-info-content">
							<ul className="footer-info custom-footer-text">
								<li>Wafa Park, Tetavli, Thane, Mumbai, Maharashtra 400612</li>
								<li>Phone: +91-7700091613</li>
								<li>Mobile: +91-7700090159</li>
								<li>Email: info@companyprofiledesign.in</li>
                                <li>Web: www.companyprofiledesign.in</li>
							</ul>
						</div>
					</div>					
				</div>

                {/* Column 2 */}
				<div className="col-lg-2 col-md-6 col-12 mb-4">
					<div className="widget widget-nav-menu">
						<h4 className="widget-title custom-widget-title">Our Services</h4>
						<div className="menu-quick-link-content">
							<ul className="footer-menu custom-footer-list">
                            {OurServices.map((item, i) => (
								<li key={i}><Link href={item.link} >&gt; {item.title}</Link></li>
                            ))}
							</ul>
						</div>
					</div>
				</div>	

                {/* Column 3 */}
				<div className="col-lg-2 col-md-6 col-12 mb-4">
					<div className="widget widget-nav-menu">
						<h4 className="widget-title custom-widget-title">Quick Links</h4>
						<div className="menu-quick-info-content">
							<ul className="footer-menu custom-footer-list">
                            {QuickLinks.map((item, i) => (
								<li key={i}><Link href={item.link}>&gt; {item.title}</Link></li>
                            ))}
							</ul>
						</div>
					</div>
				</div>

                {/* Column 4 */}
				<div className="col-lg-2 col-md-6 col-12 mb-4">
					<div className="widget widget-nav-menu">
						<h4 className="widget-title custom-widget-title">About Us</h4>
						<div className="menu-quick-info-content">
							<ul className="footer-menu custom-footer-list">
                            {AboutUsLinks.map((item, i) => (
								<li key={i}><Link href={item.link}>&gt; {item.title}</Link></li>
                            ))}
							</ul>
						</div>
					</div>
				</div>

                {/* Column 5 */}
				<div className="col-lg-3 col-md-12 col-12 mb-4">
					<div className="widget widget-nav-menu">
						<h4 className="widget-title custom-widget-title">About Us</h4>
						<div className="menu-quick-info-content custom-footer-text" style={{ fontSize: '13.5px', lineHeight: '1.9' }}>
							<p>We are a Profile design company for the companies of subsidiaries of Blue Diamond Infotech, we are professional in designing the company profile and we have designers brochures at the highest level of experience, efficiency and creativity, we guarantee you design profiles that fit with the nature of your business to express them strongly and attract customers and are a reason to achieve your goals and successes.</p>
						</div>
					</div>
				</div>

			</div>
			
            {/* Bottom Footer */}
            <div className="row mt-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
				<div className="col-lg-12 text-center">
					<div className="footer-bottom-content-copy custom-footer-text">
						<p style={{ fontSize: '13px' }}>© Copyright 2012 - 2026 | Company Profile Design | All Rights Reserved | A Blue Diamond Infotech Pvt Ltd Website</p>
					</div>
				</div>
			</div>
		</div>

        {/* Inline styles for custom hover and text appearance to match design */}
        <style jsx>{`
            .custom-widget-title {
                color: #0a0a0aff !important;
                font-size: 16px !important;
                font-weight: 700 !important;
                text-transform: uppercase;
                margin-bottom: 25px;
                letter-spacing: 0.5px;
            }
            .custom-footer-text {
                color: #363636 !important;
                font-size: 15px;
            }
            .custom-footer-text li {
                margin-bottom: 8px;
                line-height: 1;
            }
            .custom-footer-text p {
                color: #363636 !important;
				
                margin-bottom: 0;
            }
            .custom-footer-list {
                padding-left: 0;
                list-style: none;
				font-size: 14px;
            }
            .custom-footer-list li {
                border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                padding-bottom: 8px;
                margin-bottom: 8px;
            }
            .custom-footer-list li:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }
            .custom-footer-list a {
                color: #363636 !important;
                font-size: 14px;
                transition: transform 0.2s ease, color 0.2s ease;
                text-decoration: none;
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                will-change: transform;
            }
            .custom-footer-list a:hover {
                color: #000000 !important;
                font-weight: 600;
                transform: translateX(5px);
            }
        `}</style>
	</div>	
    );
};

export default Footer;