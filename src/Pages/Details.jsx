import { BiWorld } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendar } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const loadedSpot = useLoaderData();
    const params = useParams();
    const id = params.id;
    console.log(loadedSpot, id);
    const { average_cost, country_Name, description, email, image, location, name, seasonality, totalVisitorsPerYear, tourists_spot_name, travel_time } = loadedSpot

    return (
        <div className="bg-base-200 px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto md:gap-10 md:py-16 py-10">
                <div>
                    <img className="w-full max-h-[430px] rounded-2xl object-cover" src={image} alt="" />
                </div>
                <div className="space-y-3">
                    <h1 className="  md:text-5xl text-3xl font-sans">{tourists_spot_name}</h1>
                    <p>{description}</p>
                    <p className="mt-1 flex items-center gap-2 text-gray-500 dark:text-neutral-400 flex-grow">
                        <FaCircleDollarToSlot className="text-orange-500" />
                        <span>
                            Cost: <span className="font-bold"> ${average_cost}</span>
                        </span>
                    </p>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400  flex items-center gap-2">
                        <FaCalendar className="text-orange-500" />
                        <span>
                            Seasonality: <span className="font-semibold"> {seasonality}</span>
                        </span>
                    </p>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400  flex items-center gap-2">
                        <BiWorld className="text-orange-500" />
                        <span>
                            Country: <span className="font-semibold"> {country_Name}</span>
                        </span>
                    </p>

                    <p className="mt-1 text-gray-500 dark:text-neutral-400  flex items-center gap-1 ">
                        <CiLocationOn className="text-orange-500 text-xl" />
                        <span>
                            Location: <span className="font-semibold"> {location}</span>
                        </span>
                    </p>

                    <p className="mt-1 text-gray-500 dark:text-neutral-400  flex items-center gap-2">
                        <HiOutlineUserGroup className="text-orange-500" />
                        <span>
                            Visitor: <span className="font-semibold"> {totalVisitorsPerYear}</span>
                        </span>
                    </p>

                    <p className="mt-1 text-gray-500 dark:text-neutral-400  flex items-center gap-2">
                        <IoTimeOutline className="text-orange-500" />
                        <span>
                            Time: <span className="font-semibold"> {travel_time}</span>
                        </span>
                    </p>
                    <p> Name: <span className="font-semibold"> {name}</span></p>
                    <p> Email: <span className="font-semibold"> {email}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Details;