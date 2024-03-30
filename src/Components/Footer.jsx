import React from 'react';

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between px-5 pt-3 bg-white text-dark">
      <div>
        <h3 className="fw-normal">Company</h3>
        <ul className="list-unstyled">
          <li>Innovations</li>
          <li>Business Services</li>
          <li>Financial services</li>
          <li>Lejhro Recruiter</li>
        </ul>
      </div>
      <div>
        <h3 className="fw-normal">About</h3>
        <ul className="list-unstyled">
          <li>Blogs</li>
          <li>Programs</li>
          <li>Lejhro Bootcamp</li>
        </ul>
      </div>
      <div>
        <h3 className="fw-normal">Support</h3>
        <ul className="list-unstyled">
          <li>Contact</li>
          <li>Terms of Use</li>
          <li>Privacy Statement</li>
        </ul>
      </div>
      <div>
        <h3 className="fw-normal">Connect with us</h3>
      </div>
    </footer>
  );
}

export default Footer;