import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <h1>Follow for contact:</h1>
        <hr />
        <div className="cart">
        <div className="card" style={{"width": "18rem","textAlign":"center"}}>
          <div className="card-header">
          <p>For more updates you can follow our site and our service all time open for you.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><a href="www.facebook.com"><i className="fab fa-facebook-square"></i></a> -Facebook</li>
            <li className="list-group-item"><a href="www.twetter.com"><i className="fab fa-twitter-square"></i></a> -twetter</li>
            <li className="list-group-item"> <a href="www.linkdin.com"><i className="fab fa-linkedin-in"></i></a> -linkdin</li>
            <li className="list-group-item"><i className="fas fa-phone-volume"></i> -+91113644</li>
          </ul>
        </div>
        </div>
    </div>
  );
};

export default Contact;
