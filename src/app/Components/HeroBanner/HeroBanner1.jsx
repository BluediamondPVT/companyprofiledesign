"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image"; 
import { ArrowRight } from "lucide-react";

const HeroBanner1 = ({ bgmage, Title1, Title2, content, btnName, btnName2, btnUrl, btnUrl2, heroShape1, heroShape2, heroShape3 }) => {

	useEffect(() => { 
		loadBackgroudImages();
	}, []);

    return (
        <div className="hero-section d-flex align-items-center" data-background={bgmage}>
		<div className="container">
			<div className="row hero-bg">
				<div className="col-lg-12">
					<div className="hero-content">
						<h1> {Title1} </h1>
						<h2> {Title2} </h2>
						<div className="hero-content-text-btn">
							<p>{content}</p>
							<div className="hero-button">
								<Link className="hero-btn-primary" href={btnUrl}> {btnName} <ArrowRight size={16} style={{ marginLeft: '6px', display: 'inline-block' }} /></Link>
								<Link className="hero-btn-secondary text-white" target="_blank" href={btnUrl2}> {btnName2} <ArrowRight size={16} style={{ marginLeft: '6px', display: 'inline-block' }} /></Link>
							</div>
						</div> 
						<div className="hero-all-shape">
							<div className="hero-shape">
								<Image src={heroShape1} alt="img" width={500} height={467}   />
							</div>
							<div className="hero-shape2">
								<Image src={heroShape2} alt="img" width={436} height={442}   />
							</div>
							<div className="hero-shape3">
								<Image src="/assets/images/slider/hero-shp4.png" alt="img" width={796} height={74}   />
							</div>
							<div className="hero-shape4">
								<Image src="/assets/images/slider/hero-shp.png" alt="img" width={150} height={250}   />
							</div>
							<div className="hero-shape5">
								<Image src={heroShape3} alt="img" width={70} height={70}   />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

export default HeroBanner1;