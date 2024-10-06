import img1 from "../../assets/Demo/1.png";
import img2 from "../../assets/Demo/2.png";
import img3 from "../../assets/Demo/3.png";
import img4 from "../../assets/Demo/4.png";

const Demo = () => {
  return (
    <div className="w-[80%] flex md:flex-row flex-col items-center justify-center mx-auto gap-8 my-20">
      {/* Left column with 3 images */}
      <div className="flex flex-col gap-4">
        <img src={img1} alt="Item 1" className="md:w-[200px] md:h-[200px] " />
        <img src={img2} alt="Item 2" className="md:w-[200px] md:h-[200px]" />
        <img src={img3} alt="Item 3" className="md:w-[200px] md:h-[200px]" />
      </div>
s
      {/* Right side with larger image */}
      <div>
        <img src={img4} alt="Hands with Jewelry" className="md:w-[350px] h-auto" />
      </div>
    </div>
  );
};

export default Demo;
