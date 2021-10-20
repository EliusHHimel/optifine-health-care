import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-5 footer bg-dark text-white">

            <div className='d-lg-flex d-md-flex justify-content-center'>
                <div className='me-5'>
                    <h5>Important Links</h5>
                    <div>
                        <ul className='text-start'>
                            <li>
                                <Link to='/about'>About Us</Link>
                            </li>
                            <li>
                                <Link to='/appointment'>Book an Appointment</Link>
                            </li>
                            <li>
                                <Link to='/home#services'>Our Services</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='ms-5 my-3'>
                    <h5 className='text-white'>Follow us on Social Media</h5>
                    <div className='social-media'>
                        <a href="https://facebook.com/EliusHHimel"><img src="https://i.ibb.co/mXLCjMZ/Facebook.png" alt="Facebook" border="0" /></a>
                        <a href="https://instagram.com/EliusHHimel"><img src="https://i.ibb.co/JsvvSsf/Insta-Gram.png" alt="Insta-Gram" border="0" /></a>
                        <a href="https://linkedin.com/in/hmeliushossainhimel"><img src="https://i.ibb.co/LkQypTq/Linkedin.png" alt="Linkedin" border="0" /></a>
                        <a href="https://pinterest.com/EliusHHimel"><img src="https://i.ibb.co/R2rpvtZ/Pinterest.png" alt="Pinterest" border="0" /></a>
                        <a href="https://twitter.com/EliusHHimel"><img src="https://i.ibb.co/9qgLvDc/Twitter.png" alt="Twitter" border="0" /></a>
                        <a href="https://youtube.com/HmEliusHossainHimel"><img src="https://i.ibb.co/KLJN0Lq/Youtube.png" alt="Youtube" border="0" /></a>
                    </div>
                </div>
            </div>
            <p className="text-white">All Rights Reserved © <span className="text-danger">Optifine</span> Health Care </p>
        </footer>
    );
};

export default Footer;