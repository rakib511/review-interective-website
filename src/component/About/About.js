import React from "react";
import './About.css'
import img from '../../img1.jpg';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className='row my-5 mx-5'>
        <div className="col-md-5 bg">
          <h3>about us-</h3>
        <p>we work for poeple who interested web devlopment. Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services</p>

        <Link to='/contact'><button className='btn btn-success'>contact</button></Link>
        </div>
        <div className="col-md-7">
          <img className='img-fluid' src={img} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default About;
