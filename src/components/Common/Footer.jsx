import React from "react";
import { Email, Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <hr className="w-[80%] border-t-2 border-[#997500] mx-auto" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mt-12">
        <div>
          <h2 className="text-lg font-bold">CONTACT</h2>
          <p>Email: support@swarnasquare.com</p>
          <p>Phone: +91 7854-612xxx</p>
          <p>Address: Bangalore, Karnataka, India [Pincode]</p>
        </div>

        <div>
          <h2 className="text-lg font-bold">COMPANY</h2>
          <p>Privacy</p>
          <p>Terms and Conditions</p>
        </div>

        <div>
          <h2 className="text-lg font-bold">LINKS</h2>
          <p>link</p>
          <p>link.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold">SOCIAL MEDIA</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="mailto:support@swarnasquare.com"
              className="text-[#FFE49F]"
            >
              <Email fontSize="large" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFE49F]"
            >
              <Facebook fontSize="large" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFE49F]"
            >
              <Instagram fontSize="large" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-[#FFE49F]">
        Swarnasquare Private Limited
      </div>
    </footer>
  );
};

export default Footer;
