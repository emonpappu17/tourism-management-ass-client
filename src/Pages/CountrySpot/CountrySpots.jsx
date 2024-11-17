// import { useLoaderData, useParams } from "react-router-dom";
// import CountrySpot from "./CountrySpot";
// import { useEffect, useState } from "react";
// import Lottie from "lottie-react";
// import Loader from '../../assets/loader.json'

// const CountrySpots = () => {
//     const loadedSpots = useLoaderData();
//     const params = useParams()
//     const name = params.id
//     const [country, setCountry] = useState([])
//     // console.log(name);

//     useEffect(() => {
//         fetch(`https://tourism-management-ass-server.vercel.app/countries/${name}`)
//             .then(res => res.json())
//             .then(data => {
//                 setCountry(data)
//             })
//     }, [name])

//     if (!country.length) {
//         return <div className="flex items-center justify-center min-h-screen"><Lottie className="w-80" animationData={Loader}></Lottie></div>
//     }

//     return (
//         <div>
//             <div className="bg-base-200 px-3">
//                 <div className="md:columns-2 columns-1 container mx-auto md:py-16 py-10">
//                     <div className=" border ">
//                         <img className="w-full h-full rounded-2xl" src={country.image} alt="" />
//                     </div>
//                     <div className="items-center">
//                         {/* <h1>{country.country_Name}</h1> */}
//                         <h1 className="md:text-5xl text-3xl font-sans mb-3">{country.country_Name}</h1>
//                         <p>{country.description}</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
//                 {
//                     loadedSpots.map(spot => <CountrySpot key={spot._id} spot={spot}></CountrySpot>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default CountrySpots;


import { useLoaderData, useParams } from "react-router-dom";
import CountrySpot from "./CountrySpot";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Loader from '../../assets/loader.json';
import { Typewriter } from "react-simple-typewriter";

const CountrySpots = () => {
    const loadedSpots = useLoaderData();
    const params = useParams();
    const name = params.id;
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        setLoading(true); // Start loading when the request begins
        fetch(`https://tourism-management-ass-server.vercel.app/countries/${name}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data);
                setLoading(false); // Stop loading once data is received
            })
            .catch(() => setLoading(false)); // Stop loading on error
    }, [name]);

    if (loading || !country) { // Show loader while loading or if country data is null
        return <div className="flex items-center justify-center min-h-screen">
            <Lottie className="w-80" animationData={Loader}></Lottie>
        </div>;
    }

    return (
        <div>
            <div className="bg-base-200 px-3">
                <div className=" grid md:grid-cols-2 grid-cols-1 md:gap-10 columns-1 container mx-auto md:py-16 py-10">
                    <div className="mb-3">
                        <img className="w-full h-full rounded-2xl object-cover" src={country.image} alt="" />
                    </div>
                    <div className=" flex items-center">
                        <div>
                            <h1 className="md:text-5xl text-3xl font-sans mb-3">{country.country_Name}</h1>
                            <p>{country.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-center md:py-14 py-7 md:text-5xl text-3xl font-sans">Most Popular Tours of<br />
                <span className="text-orange-500">
                    <Typewriter
                        words={[`${country.country_Name}`]}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-3">
                {
                    loadedSpots.map(spot => <CountrySpot key={spot._id} spot={spot}></CountrySpot>)
                }
            </div>
        </div>
    );
};

export default CountrySpots;
