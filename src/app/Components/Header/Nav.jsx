import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
        Home  
        </Link>
      </li>   
      <li>
        <Link href="/about-companyprofiledesign" onClick={() => setMobileToggle(false)}>
        About  
        </Link>
      </li>   
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/catalogue-design-company" onClick={() => setMobileToggle(false)}>
                Catalogue Design Company
              </Link>
            </li>
          
            <li>
              <Link href="/brochure-design-company" onClick={() => setMobileToggle(false)}>
                Brochure Design Company
              </Link>
            </li>
            <li>
              <Link href="/flyer-design-company" onClick={() => setMobileToggle(false)}>
                Flyer Design Company
              </Link>
            </li> 
            <li>
              <Link href="/product-packaging-design-company" onClick={() => setMobileToggle(false)}>
                Product Packaging Design Company
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>            
      <li>
        <Link href="/portfolio" onClick={() => setMobileToggle(false)}>
          Portfolio
        </Link>
      </li>
      {/* <li className="menu-item-has-children">
        <Link href="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about-companyprofiledesign" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>                        
            <li>
              <Link href="/pricing" onClick={() => setMobileToggle(false)}>
              Pricing
              </Link>
            </li> 
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
            <li>
              <Link href="/contact-us" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>              */}
      {/* <li className="menu-item-has-children">
        <Link href="/our-blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/our-blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>            
            <li>
              <Link
                href="/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> */}
      <li>
        <Link href="/our-blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact-us" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
