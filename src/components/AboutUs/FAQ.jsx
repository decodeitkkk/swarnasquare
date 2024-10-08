
import { FaQuestionCircle } from 'react-icons/fa'; 
import img from "../../assets/AboutUs/faq.png"

const FAQSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-secondary bg-opacity-70 p-12 rounded-xl max-w-4xl w-full mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget gravida velit orbi venenatis.
          </p>
          <ul className="space-y-6">
            {/* FAQ Item 1 */}
            <li className="flex items-start space-x-4">
              <FaQuestionCircle className="text-2xl text-gray-700" />
              <div>
                <h3 className="font-semibold text-lg">Lorem ipsum dolor sit amet</h3>
                <p className="text-gray-600">
                  consectetur adipiscing elit. Nullam eget gravida velit. Morbi venenatis sed velit ac fringilla.
                </p>
              </div>
            </li>

            {/* FAQ Item 2 */}
            <li className="flex items-start space-x-4">
              <FaQuestionCircle className="text-2xl text-gray-700" />
              <div>
                <h3 className="font-semibold text-lg">Lorem ipsum dolor sit amet</h3>
                <p className="text-gray-600">
                  consectetur adipiscing elit. Nullam eget gravida velit. Morbi venenatis sed velit ac fringilla.
                </p>
              </div>
            </li>

            {/* FAQ Item 3 */}
            <li className="flex items-start space-x-4">
              <FaQuestionCircle className="text-2xl text-gray-700" />
              <div>
                <h3 className="font-semibold text-lg">Lorem ipsum dolor sit amet</h3>
                <p className="text-gray-600">
                  consectetur adipiscing elit. Nullam eget gravida velit. Morbi venenatis sed velit ac fringilla.
                </p>
              </div>
            </li>

            {/* FAQ Item 4 */}
            <li className="flex items-start space-x-4">
              <FaQuestionCircle className="text-2xl text-gray-700" />
              <div>
                <h3 className="font-semibold text-lg">Lorem ipsum dolor sit amet</h3>
                <p className="text-gray-600">
                  consectetur adipiscing elit. Nullam eget gravida velit. Morbi venenatis sed velit ac fringilla.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
