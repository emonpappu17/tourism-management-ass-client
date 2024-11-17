import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const SortCard = ({ spot }) => {
    console.log(spot);
    const { image, tourists_spot_name, average_cost, totalVisitorsPerYear, travel_time, seasonality, _id } = spot
    return (
        <div>
            <div data-aos="fade-up" className="h-full">
                <div className="flex flex-col bg-white dark:bg-neutral-800  h-full rounded-xl hover:shadow-xl border group">
                    <div className="overflow-hidden rounded-xl">
                        <img
                            className="w-full md:h-48 h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                            src={image}
                            alt={tourists_spot_name} />
                    </div>
                    <div className="p-4 flex-1 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500">
                            {tourists_spot_name}
                        </h3>
                        <p className="mt-1 text-gray-500 dark:text-neutral-400  flex items-center gap-2">
                            <FaCalendar className="text-orange-500" />
                            <span>
                                Seasonality: <span className="font-bold"> {seasonality}</span>
                            </span>
                        </p>
                        <p className="mt-1 flex items-center gap-2 text-gray-500 dark:text-neutral-400 flex-grow">
                            <FaCircleDollarToSlot className="text-orange-500" />
                            <span>
                                Cost: <span className="font-bold"> ${average_cost}</span>
                            </span>
                        </p>
                    </div>
                    <div className="p-4  border-t flex flex-wrap gap-2 justify-between sm:px-5 dark:border-neutral-700">
                        <div className="flex gap-5">
                            <div className="flex items-center gap-2">
                                <IoTimeOutline className="text-orange-500" />
                                <p className="text-xs text-gray-500 dark:text-neutral-500">
                                    {travel_time}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <HiOutlineUserGroup className="text-orange-500" />
                                <p className="text-xs text-gray-500 dark:text-neutral-500">
                                    {totalVisitorsPerYear}
                                </p>
                            </div>
                        </div>
                        <div className=" hover:text-orange-500">
                            <Link className="gap-1 flex items-center" to={`/details/${_id}`}><span>View Details</span>  <GrLinkNext /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortCard;