import bg from "../../assets/common/footer-bg.png";
import facebook from "../../assets/common/Footer/facebook.png";
import linkedin from "../../assets/common/Footer/linkedin.png";
import twitter from "../../assets/common/Footer/twitter.png";
import instagram from "../../assets/common/Footer/instagram.png";


const Footer = () => {
  return (
    <div
      className="flex items-center justify-center flex-col gap-5"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px", // Set your desired height
        width: "100%", // Set your desired width
      }}
    >
      <div className="flex items-center justify-center list-none gap-4  md:text-xl text-base font-medium cursor-pointer">
        <li>Products</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Meet Us</li>
      </div>
      <div className="flex items-center justify-center gap-5">
         
        <img src={facebook} className="w-6 h-6 hover:cursor-pointer" />
        <img src={linkedin}  className="w-6 h-6 hover:cursor-pointer"/>
        <img src={twitter}  className="w-6 h-6 hover:cursor-pointer"/> 
        <img src={instagram} className="w-6 h-6 hover:cursor-pointer" />
       
      </div>
    </div>
  );
};

export default Footer;
