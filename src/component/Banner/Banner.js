import React from 'react';
import Menubar from '../Menubar/Menubar';
import './Banner.css'

const Banner = () => {
    return (
        <div className='header-container'>
            <div className=''>
                <div className='row d-flex banner align-items-center justify-contenet-center'>
                    <Menubar></Menubar>

                    <div className='col-md-6 content'>
                        <h1 className='title'>
                            Web stodio with <br /> ambition
                        </h1>
                        <p>We guarantee an exclusive design. We do our best to attract the attention of our customers using the world’s leading strategies</p>
                    </div>
                    <div className='col-md-6'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;