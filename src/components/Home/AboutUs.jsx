
import backgroundImage from '../../assets/Home/bg3.png';

const AboutUs = () => {
  return (
    <div>
       <h2 className="text-3xl font-medium mb-6 text-center">About Us</h2>
    <div className="relative h-auto lg:h-[500px] flex items-center font-italic bg-cover bg-center  lg:w-[90%] mx-auto rounded-2xl inset-1 bg-black" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className=" p-8 text-left max-w-3xl">
       
        <p className="text-white mb-4">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
        <p className="text-white mb-4">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
        <p className="text-white mb-4">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
        <p className="text-white mb-4">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
        <p className="text-white">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
      </div>
    </div>
    </div>
   
  );
};

export default AboutUs;
