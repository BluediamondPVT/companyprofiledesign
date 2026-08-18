"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const WhyChooseUs = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <div className="service-section service" data-background="/assets/images/resource/service-bg.jpg">
		<div className="container">
			<div className="row dream1-bg">
				<div className="col-lg-12">
					<div className="company-profile-design-section-title white text-center padding-lg1 mb-5">
						<h1 className="sections">Why Choose Us as Your Profile Design Company</h1>
						<p className="mx-auto pb-1" style={{ maxWidth: '1100px', width: '100%' }}>
							The services we offer to our exclusive customers are unmatchable in this industry, we provide a comprehensive range of services under same roof.
						</p>
						<p className="mx-auto p-2 mt-2" style={{ maxWidth: '1100px', width: '100%' }}>
							We offer the best and high-quality designer company profile at the most competitive rate, We have listed services that you get along with our design service.
						</p>
					</div>
				</div>
				
				<div className="col-lg-12">
					<div className="row g-4">
						<div className="col-12 col-md-6">
							<div className="single-service-box" style={{
								backgroundImage: 'url(/assets/images/resource/why-choose-bg1.png)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								height: 'auto',
								minHeight: '340px'
							}}>
								<div className="service-content">
									<h3 className="service-title">Designs As Per Your Domain</h3>
									<p className="service-desc">
										We have a good and efficient team to design a perfect theme for your Company Profile. Our designers first understand your business and then only creates suitable themes that will attract your customers. It is very important to link your business in the theme itself as it creates and magnifies the impact that you want to see on your customers.
									</p>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-6">
							<div className="single-service-box" style={{
								backgroundImage: 'url(/assets/images/resource/why-choose-bg2.png)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								height: 'auto',
								minHeight: '340px'
							}}>
								<div className="service-content">
									<h3 className="service-title">Professionally Well-written Content</h3>
									<p className="service-desc">
										If the design is a body, then the content is its soul; Hence, they always go hand in hand. It is always advisable to create good, concise and grammatically error-free content for your Company Profile. We have a dedicated team of professional content writers and editors who can create the most suitable content for your company.
									</p>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-6">
							<div className="single-service-box" style={{
								backgroundImage: 'url(/assets/images/resource/why-choose-bg3.png)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								height: 'auto',
								minHeight: '340px'
							}}>
								<div className="service-content">
									<h3 className="service-title">Strategic Designs</h3>
									<p className="service-desc">
										In addition to theme selection and professional content, it is important to make a full-proof strategy that how and at what place customers need to focus his or her attention. With years of experience, we better understand the science of content placement in design that will surely attract your customers and you will appropriate response.
									</p>
								</div>
							</div>
						</div>

						<div className="col-12 col-md-6">
							<div className="single-service-box" style={{
								backgroundImage: 'url(/assets/images/resource/why-choose-bg4.png)',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								height: 'auto',
								minHeight: '340px'
							}}>
								<div className="service-content">
									<h3 className="service-title">Post Design Assistance</h3>
									<p className="service-desc">
										Backed by the years of experience, we will provide you tips and tricks to you and your company for your printing work. We know every type of quality available in the market and hence we will guide you to select the best service that will fit your pocket. We want our customers to get full services under one roof to save valuable time.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="service-shape">
					<div className="serivce-shape">
						<Image src="/assets/images/resource/shap-2.png" alt="img" width={40} height={40} />
					</div>
					<div className="serivce-shape2">
						<Image src="/assets/images/resource/shape-1.png" alt="img" width={70} height={69} />
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default WhyChooseUs;
