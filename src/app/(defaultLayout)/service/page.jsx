import React from 'react';
import SectionTitle from '@/app/Components/Common/SectionTitle';
import Cta from '@/app/Components/Cta/Cta';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Our Professional Design Services | Company Profile Design",
  description: "Explore our range of specialized design services: Catalogue Design, Poster Design, Brochure Design, Flyer Design, and Product Packaging Design."
};

const servicesData = [
  {
    id: 1,
    title: "Catalogue Design Company",
    desc: "High-quality, sales-driven product catalogue designs crafted for both print and digital distribution to showcase your products and boost revenue.",
    icon: "/assets/images/resource/1icon.png",
    link: "/catalogue-design-company"
  },
  
  {
    id: 3,
    title: "Brochure Design Company",
    desc: "Professionally formatted bi-fold, tri-fold, and multi-page business brochure designs that present your corporate story with elegance and authority.",
    icon: "/assets/images/resource/3icon.png",
    link: "/brochure-design-company"
  },
  {
    id: 4,
    title: "Flyer Design Company",
    desc: "Action-driven promotional flyer designs crafted for direct response marketing, event announcements, special offers, and commercial mailers.",
    icon: "/assets/images/resource/4icon.png",
    link: "/flyer-design-company"
  },
  {
    id: 5,
    title: "Product Packaging Design Company",
    desc: "Shelf-ready product box packaging, bottle labels, pouch artwork, and 3D packaging design solutions for leading consumer and retail brands.",
    icon: "/assets/images/resource/5icon.png",
    link: "/product-packaging-design-company"
  }
];

const ServicesPage = () => {
  return (
    <div>
      <div className="feature-section style-two" style={{ paddingTop: '90px', paddingBottom: '90px', backgroundColor: '#f8f9fb' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <div className="company-profile-design-section-title">
                <SectionTitle
                  Title="Our Professional Design Services"
                  Content="We offer end-to-end branding and design solutions tailored for businesses across India. Explore our specialized design services below:"
                />
              </div>
            </div>
          </div>

          <div className="row g-4">
            {servicesData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 d-flex">
                <div className="feature-single-box h-100 w-100 mb-0 d-flex flex-column justify-content-between p-4 text-center" style={{ borderRadius: '24px', backgroundColor: '#ffffff', transition: 'all 0.4s ease' }}>
                  <div>
                    <div className="feature-icon mb-3 d-flex justify-content-center align-items-center">
                      <Image src={item.icon} alt={item.title} width={80} height={85} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className="feature-content">
                      <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#1c1f1c', marginBottom: '14px', fontFamily: 'var(--heading-font)' }}>
                        {item.title}
                      </h2>
                      <p style={{ color: '#55585b', fontSize: '15px', lineHeight: '1.65' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <Link 
                      href={item.link} 
                      className="company-profile-design-button d-inline-flex align-items-center gap-2"
                      style={{ fontSize: '14px', padding: '10px 24px', borderRadius: '8px' }}
                    >
                      View Service Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Cta 
        title="Looking for Custom Design Solutions?" 
        content="Our team of senior graphic designers is ready to transform your brand communication. Contact us today for personalized quotes, samples, and design consultations!"
      />
    </div>
  );
};

export default ServicesPage;