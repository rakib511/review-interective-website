import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            
            <div className='footer-container bg-dark text-white'>
                <div className='row py-4'>
                    <div className='col-md-6'>
                        <p className='para'>Our web studio creates and promotes websites, we work for the result.</p>
                        <h3 className='footer-h3'>Follow us:</h3>
                        <div className='icon'>
                            <div className='icon'><i class="fab fa-facebook-square"></i>-Facebook</div>
                            <div className='icon'><i class="fab fa-twitter-square"></i>-twetter</div>
                            <div className='icon'><i class="fab fa-linkedin-in"></i>-linkdin</div>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div>
                            <h2>Information:</h2>
                            <h5>Company & Contact Info</h5>
                            <h5>Blog & Articles</h5>
                            <h5>Sitemap</h5>
                            <h5>Terms of Service</h5>
                            <h5>Privacy Policy</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;