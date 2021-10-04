import React from 'react';
import { Link } from 'react-router-dom';
import "./Menubar.css";

const Menubar = () => {
    return (
        <div>
            <div className='menu-containar'>
                <div className='row bg-dark'>
                    <div className='col-md-12'>
                        <ul className='d-flex align-items-end justify-content-end'>
                            <Link className='items' to='/home'>Home</Link>
                            <Link className='items' to='/service'>service</Link>
                            <Link className='items' to='/about'>About</Link>
                            <Link className='items' to='/contact'>Contact</Link>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;