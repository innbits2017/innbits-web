"use client"

import Link from "next/link"

const Footer = () => {
  return (
    <>
   <div className="container"> 
   <div className="d-flex justify-content-center text-center my-4 flex-wrap">
    <Link href="/" className="footer-link me-3">Home</Link>
    <Link href="/" className="footer-link me-3">About Us</Link>
    <Link href="/" className="footer-link me-3">Services</Link>
    <Link href="/" className="footer-link me-3">Our Work</Link>
    <Link href="/" className="footer-link me-3">Blog</Link>
    <Link href="/" className="footer-link me-3">Contact Us</Link>
   </div>
   <hr />
   </div>
    <footer className="mt-4">
       <div className="container">
        <div className="row g-lg-5">
        <div className="col-12 col-sm-6 col-lg-3">
           <h3>Your Business Is Our Work</h3>
           <div className="mt-lg-5">
            <p>Work With:</p>
            <i class='bx bxl-windows fs-4 me-2'></i>
            <i class='bx bxl-chrome fs-4 me-2' ></i>
            <i class='bx bxl-apple fs-4 me-2' ></i>
            <i class='bx bxl-android fs-4 me-2' ></i>
           </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <h3>Contacts</h3>
         <div className="mt-lg-5">
         <p className="text-dark mb-0 pb-0">#956, 3rd Floor, 16th Main Road
            2nd Stage, BTM Layout,
            Bangalore - 560076
            </p>
            <p><b>Google Map</b></p>
         </div>
         <div className="mt-lg-5">
            <p className="mb-0 pb-0"> 
            <a className="text-dark text-decoration-none" href="tel:+919036082478">
            <i class='bx bx-phone footer-icons me-2'></i>
             +91-9036082478 (IN)
            </a>
             </p>
            <p> <i class='bx bx-envelope footer-icons me-2' ></i> 
            <a className="text-dark text-decoration-none" href="mailto:info@innbits.com">
            info@innbits.com
            </a>
            </p>
         </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 mt-lg-5 pt-lg-3">
            <div className="mt-lg-5">
            <p className="text-dark mb-0 pb-0">
                Mon - Fri: 8am - 7pm
            </p>
            <p>Weekend: Time off</p>
            </div>
            <div className="mt-lg-5 pt-lg-5">
             <a href="#" className="social-facebook"><i class='bx bxl-facebook fs-2 me-3' ></i></a>
             <a href="#" className="social-twitter"><i class='bx bxl-twitter fs-2 me-3'></i></a>
             <a href="#" className="social-instagram"><i class='bx bxl-instagram fs-2 me-3' ></i></a>
            </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
        <h3>Our Support</h3>
         <div className="mt-lg-5">
         <p className="mb-0 pb-0 contact-phone">
        +91 7353001000
        </p>
        <p>Looking for a digital Tranformation! You have reached the right place.</p>
         </div>
         <div className="mt-lg-5">
            <p>Need Help? <b>Contact Us</b></p>
         </div>
        </div>
        </div>

        <div className="row">
            <p className="text-center mt-4">
            © 2023 Innbits Technologies. All Rights Reserved.
            </p>
        </div>

       </div>
    </footer>


    </>
  )
}

export default Footer