import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogData from '../../Data/blog.json';

const BlogSidebar = () => {
    return (
        <div className="col-lg-4 responsive">
            <div className="widget_search upper mb-4">
                <form action="#" method="get">
                    <input type="text" name="s" defaultValue="" placeholder="Search Here" title="Search for:" />
                    <button type="submit" className="icons" aria-label="Search articles">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </div>

            <div className="widget-sidebar-box mb-4">
                <h4 className="sidebar-title mb-4"> Recent Posts </h4>
                {blogData.slice(0, 4).map((post, idx) => (
                    <div key={idx} className="widget-recent-post d-flex mb-3 align-items-center">
                        <div className="rpost-thumb me-3 flex-shrink-0" style={{ width: '80px', height: '65px', overflow: 'hidden', borderRadius: '8px' }}>
                            <Link href={post.link || '#'}>
                                <Image 
                                    src={post.img} 
                                    alt={post.title} 
                                    width={80} 
                                    height={65} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            </Link>
                        </div>
                        <div className="rpost-content">
                            <div className="rpost-title">
                                <h5 style={{ fontSize: '14px', lineHeight: '1.4', margin: 0, fontWeight: '600' }}>
                                    <Link href={post.link || '#'} style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>
                                        {post.title}
                                    </Link>
                                </h5>
                                <span style={{ fontSize: '12px', color: '#777' }}>12 Aug, 2025</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="widget-sidebar-box mb-4">
                <h4 className="sidebar-title upp mb-3">Categories</h4>
                <ul className="sidebar-menu list-unstyled">
                    <li className="py-2"><Link href="#" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Company Profile Design</Link></li>
                    <li className="py-2"><Link href="#" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Brochure Design</Link></li>
                    <li className="py-2"><Link href="#" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Corporate Branding</Link></li>
                    <li className="py-2"><Link href="#" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Content Writing</Link></li>
                    <li className="py-2"><Link href="#" className="text-decoration-none text-dark"><i className="bi bi-chevron-double-right text-primary me-2"></i> Graphic Design</Link></li>
                </ul>
            </div>

            <div className="widget-sidebar-box">
                <h4 className="sidebar-title mb-3">Popular Tags</h4>
                <div className="tag-item">
                    <ul className="d-flex flex-wrap gap-2 list-unstyled">
                        <li><Link href="#" className="badge bg-light text-dark p-2 text-decoration-none">#CompanyProfile</Link></li>
                        <li><Link href="#" className="badge bg-light text-dark p-2 text-decoration-none">#BrochureDesign</Link></li>
                        <li><Link href="#" className="badge bg-light text-dark p-2 text-decoration-none">#BrandingIndia</Link></li>
                        <li><Link href="#" className="badge bg-light text-dark p-2 text-decoration-none">#BusinessGrowth</Link></li>
                        <li><Link href="#" className="badge bg-light text-dark p-2 text-decoration-none">#GraphicDesign</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
