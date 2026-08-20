import Image from "next/image";
import Link from "next/link";
import { CheckCheck, ArrowRight } from "lucide-react";

const About1 = ({mainimage,title1,title2,content,listTitle,listItem,btnName,btnUrl}) => {
    return (
        <div className="row about-bg pt-0  align-items-center">
       
        <div className="col-lg-6 ps-5"> 
            <div className="company-profile-design-section-title">
                <h1>{title1}</h1>
                <h1>{title2}</h1>
                <p>{content}</p>
            </div>
            <div className="about-item-list">
                {listTitle && <h5 className="fw-bold text-dark mb-3">{listTitle}</h5>}
                <ul>
                {listItem?.map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><CheckCheck size={18} className="text-success" style={{ flexShrink: 0 }} /> {item} </li>
                ))}
                </ul>
            </div>
            {btnUrl && (
                <div className="about-button2">
                    <Link href={btnUrl} className="company-profile-design-button">{btnName} <ArrowRight size={16} style={{ marginLeft: '6px', display: 'inline-block' }} /> </Link>
                </div>
            )}
        </div>
         <div className="col-lg-6 d-flex justify-content-end">
            <div className="about-thumb ">
                <Image src={mainimage} alt="img" width={600} height={500}   />
            </div>
        </div>
    </div>
    );
};

export default About1;