import { IoMdPaperPlane } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";

const WhyChooseUs = () => {
    return (
        <div className="grid md:grid-cols-2    mt-20">
            <div className=" max-h-[850px] overflow-hidden">
                <style>
                    {`
          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
        `}
                </style>
                <img
                    className="w-full h-full object-cover animate-[zoomInOut_10s_ease-in-out_infinite]"
                    src="https://i.ibb.co/F4sYh98/michaela-rimakova-u9-LBq-SY6yw4-unsplash.jpg"
                    alt="Zooming Image"
                />
            </div>
            <div className="flex justify-between items-center p-5 md:px-7 bg-neutral-900">
                <div className="max-w-[430px]  text-[#757783]">
                    <p className="pacifico text-orange-500">Our benefit lists
                    </p>
                    <h2 className="text-4xl mb-4 text-white">Why Choose Travel</h2>
                    <p >Your safety is our top priority. We partner with trusted vendors and provide travel insurance options for a secure journey.</p>
                    <div className="flex gap-3 mb-4">
                        <IoMdPaperPlane className="text-9xl h-fit text-orange-500" />
                        <div>
                            <h3 className="mb-3 text-xl font-bold text-white">Professional and Certified
                            </h3>
                            <p>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        {/* <FaMapMarkedAlt className="text-9xl h-fit text-orange-500" /> */}
                        <GrMapLocation className="text-9xl h-fit text-orange-500" />
                        <div>
                            <h3 className="mb-3 text-xl font-bold text-white">Get Instant Tour Bookings
                            </h3>
                            <p>Lorem ipsum is simply free text dolor sit but the majority have suffered amet, consectetur notted.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;