
import backgroundImage from '../../assets/Home/bg3.png';

const AboutUs = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className=" p-8 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-gray-700 mb-4">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
        <p className="text-gray-700 mb-4">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
        <p className="text-gray-700 mb-4">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
        <p className="text-gray-700 mb-4">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
        <p className="text-gray-700">
          Dancing Script is a flowing cursive font that brings an air of playfulness to your designs with curves that loop along to connect the letters.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
