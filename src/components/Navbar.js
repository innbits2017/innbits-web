"use client"

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState('');
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  const navBarClickHandler = () => screenWidth > '990' && (location.href = '/services');
  const solutionPageClickHandler = () => screenWidth > '990' && (location.href = '/solutions');
  const aboutUsPageClickHandler = () => screenWidth > '990' && (location.href = '/about-us');
  const aboutWorkPageClickHandler = () => screenWidth > '990' && (location.href = '/portfolio');


  return (
    <>
      <header className='header navbar navbar-expand-lg navbar-light bg-light navbar-sticky'>
        <div className='container px-3 py-2'>
          <a href='/' className='navbar-brand pe-3'>
        Innbits
          </a>
          <div id='navbarNav' className='offcanvas offcanvas-end'>
            <div className='offcanvas-header border-bottom'>
              <h5 className='offcanvas-title'>Menu</h5>
              <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center w-100'>
                <li className='nav-item dropdown'>
                  <a href='/about-us' className='nav-link  dropdown-toggle' data-bs-toggle='dropdown' onClick={aboutUsPageClickHandler}>
                    About Us
                  </a>
                  <div className='dropdown-menu p-0 '>
                    <div className='d-lg-flex' style={{ width: '45rem' }}>
                      <div
                        className='mega-dropdown-column bg-position-center bg-repeat-0 bg-size-cover rounded-3 rounded-end-0 d-none d-md-inline-block'
                        style={{ backgroundImage: ' url(/img/about/neet-team.png)', backgroundColor: 'grey', margin: '8px', borderRadius: '20px' }}
                      ></div>
                      <div className='mega-dropdown-column pt-lg-3 pb-lg-4 pt-sm-2'>
                        <ul className='list-unstyled mb-0'>
                          <li>
                            <a href='/about-us' className='dropdown-item'>
                              {' '}
                              Our Company
                            </a>
                          </li>
                          <li>
                            <a href='/how-we-work' className='dropdown-item'>
                              How we work
                            </a>
                          </li>
                          <li>
                            <a href='/distributed-agile-development' className='dropdown-item'>
                              Agile development
                            </a>
                          </li>
                          <li>
                            <a href='/engagement-models' className='dropdown-item'>
                              Engagement models
                            </a>
                          </li>
                          <li>
                            <a href='/careers' className='dropdown-item'>
                              Careers
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='mega-dropdown-column pt-lg-3 pb-lg-4 pt-sm-2'>
                        <div>
                          <a href='/full-cycle-app-development' className='h6 dropdown-item mb-0'>
                            Full cycle app development
                          </a>
                        </div>
                        <ul className='mb-0 ' style={{ 'list-style-type': 'disc' }}>
                          <li>
                            <a href='/mvp-development-services' className='dropdown-item text-decoration-none'>
                              MVP
                            </a>
                          </li>
                          <li>
                            <a href='/startup-app-development' className='dropdown-item'>
                              Startups
                            </a>
                          </li>
                          <li>
                            <a href='/enterprise-app-development' className='dropdown-item'>
                              Enterprise
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item dropdown'>
                  <a href='/services' className='nav-link  dropdown-toggle' data-bs-toggle='dropdown' onClick={navBarClickHandler}>
                    Services
                  </a>
                  <div className='dropdown-menu p-0'>
                    <div className='d-lg-flex'>
                      <div
                        className='mega-dropdown-column bg-position-center bg-repeat-0 bg-size-cover rounded-3 rounded-end-0'
                        style={{ backgroundImage: ' url(/img/services/dropdown.png)', backgroundColor: 'grey' }}
                      ></div>

                      <div className='mega-dropdown-column pt-lg-3 pb-lg-4 pb-3'>
                        <ul className='list-unstyled mb-0'>
                          <li>
                            <a href='/services/software-development' className='dropdown-item'>
                              Custom Software Development
                            </a>
                          </li>
                          <li>
                            <a href='/product-engineering-services' className='dropdown-item'>
                              Product Design & Development
                            </a>
                          </li>
                          <li>
                            <a href='/services/mobile-development' className='dropdown-item'>
                              Mobile App Development
                            </a>
                          </li>
                          <li>
                            <a href='/services/web-development' className='dropdown-item'>
                              Web App Development
                            </a>
                          </li>
                          <li>
                            <a href='/services/ui-ux-design-services' className='dropdown-item'>
                              UI/UX Design
                            </a>
                          </li>
                          <li>
                            <a href='/services/cloud-computing-services' className='dropdown-item'>
                              Cloud Computing
                            </a>
                          </li>
                          <li>
                            <a href='/services/devops' className='dropdown-item'>
                              DevOps Solutions
                            </a>
                          </li>
                          <li>
                            <a href='/software-testing-services' className='dropdown-item'>
                              QA / Testing Services
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='mega-dropdown-column pt-lg-3 pb-lg-4 pb-3'>
                        <ul className='list-unstyled mb-0'>
                          <li>
                            <a href='/saas-development-company' className='dropdown-item'>
                              SaaS Development Services
                            </a>
                          </li>
                          <li>
                            <a href='/full-stack-development' className='dropdown-item'>
                              Full Stack Development
                            </a>
                          </li>
                          <li>
                            <a href='/blockchain-development-company' className='dropdown-item'>
                              Blockchain Development
                            </a>
                          </li>
                          <li>
                            <a href='/iot-development' className='dropdown-item'>
                              IoT Development
                            </a>
                          </li>
                          <li>
                            <a href='/ai-ml-development-services' className='dropdown-item'>
                              AI & ML Services
                            </a>
                          </li>
                          <li>
                            <a href='/mvp-development-services' className='dropdown-item'>
                              MVP Development
                            </a>
                          </li>
                          <li>
                            <a href='/services/hire-dedicated-development-team' className='dropdown-item'>
                              Resource as a Service
                            </a>
                          </li>
                          <li>
                            <a href='/digital-marketing' className='dropdown-item'>
                              Digital Marketing Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item dropdown'>
                  <a href='' onClick={aboutWorkPageClickHandler} className='nav-link  dropdown-toggle' data-bs-toggle='dropdown'>
                    Our Work
                  </a>
                  <div className='dropdown-menu p-0'>
                    {/* <div className='d-lg-flex'>
                         <div
                        className='mega-dropdown-column bg-position-center bg-repeat-0 bg-size-cover rounded-3 rounded-end-0'
                        style={{ backgroundImage: 'url(/img/cloudIT/cloudIT.png)', backgroundColor: '#e4f2fd' ,  backgroundSize: 'contain !important'}}
                      ></div> */}

                    <div className='mega-dropdown-column pt-lg-3 pb-lg-4 pb-3'>
                      <ul className='list-unstyled mb-0'>
                        <li className='nav-item'>
                          <a href='/case-studies' className='nav-link'>
                            CaseStudies
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='/portfolio' className='nav-link'>
                            Portfolio
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* </div> */}
                </li>
                <li className='nav-item' style={{ marginRight: '15px' }}>
                  <a href='/blog' className='nav-link'>
                    Blog
                  </a>
                </li>
                <li className='nav-item contact-new-item'>
                  <a href='/contact-us' className='btn btn-warning shadow-warning btn-md'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button type='button' className='navbar-toggler' data-bs-toggle='offcanvas' data-bs-target='#navbarNav' 
          aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>
      </header>
    </>
  );
};
export default Navbar;
