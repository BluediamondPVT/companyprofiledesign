import React from 'react';
import LogoHero from '@/app/Components/Logo/LogoHero';
import LogoWhyBest from '@/app/Components/Logo/LogoWhyBest';
import LogoServices from '@/app/Components/Logo/LogoServices';
import LogoProcess from '@/app/Components/Logo/LogoProcess';
import LogoWhyChoose from '@/app/Components/Logo/LogoWhyChoose';
import LogoTestimonial from '@/app/Components/Logo/LogoTestimonial';
import LogoFaq from '@/app/Components/Logo/LogoFaq';
import LogoCta from '@/app/Components/Logo/LogoCta';

export const metadata = {
  title: "Logo Design Company in India | Custom & Creative Logos",
  description: "Top logo design company offering custom, professional and creative logo design services for businesses worldwide."
};

const LogoDesignPage = () => {
    return (
        <div>
            <LogoHero />
            <LogoWhyBest /> 
            <LogoServices />
            <LogoProcess />
            <LogoWhyChoose />
            <LogoTestimonial />
            <LogoFaq />
            <LogoCta />
        </div>
    );
};

export default LogoDesignPage;
