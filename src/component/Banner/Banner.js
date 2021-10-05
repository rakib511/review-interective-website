import React from 'react';
import Menubar from '../Menubar/Menubar';
import './Banner.css'
import img from '../../img2.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='header-container'>
            <div className=''>
                <div className='row d-flex banner align-items-center justify-contenet-center'>
                    <Menubar></Menubar>

                    <div className='col-md-6 contents my-4'>
                        <h1 className='title'>
                            Web stodio with <br /> ambition
                        </h1>
                        <p>We guarantee an exclusive design. We do our best to attract the attention of our customers using the world’s leading strategies</p>
                        <Link to='/about'><button className='btn btn-success'>About Us </button></Link>
                    </div>
                    <div className='col-md-6 my-4'>
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;