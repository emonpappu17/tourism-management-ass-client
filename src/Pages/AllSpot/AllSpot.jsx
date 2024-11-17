// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import SortCard from "./SortCard";
// import Loader from '../../assets/loader.json'
// import { Button, IconButton } from "@material-tailwind/react";
// import Lottie from "lottie-react";
// import { Typewriter } from "react-simple-typewriter";

// const AllSpot = () => {
//     const loadedSpot = useLoaderData();
//     console.log(loadedSpot);

//     const [sort, setSort] = useState([])
//     const [isSorted, setSorted] = useState(false)
//     const [active, setActive] = useState(1);

//     useEffect(() => {
//         fetch(`https://tourism-management-ass-server.vercel.app/sort/`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setSort(data)
//             })
//     }, [])

//     const dataToDisplay = isSorted ? sort : loadedSpot;

//     if (!dataToDisplay.length) {
//         return <div className="flex items-center justify-center min-h-screen"><Lottie className="w-80" animationData={Loader}></Lottie></div>
//     }

//     const handleActive = (index) => {
//         setActive(index)
//     }

//     const next = () => {
//         if (active === Math.ceil(dataToDisplay.length / 6)) return;

//         setActive(active + 1);
//     };

//     const prev = () => {
//         if (active === 1) return;

//         setActive(active - 1);
//     };

//     return (
//         <div className="bg-base-200 px-3">
//             <h1 className="text-center md:py-14 py-7 md:text-5xl text-3xl font-sans">Amazing tour places around<br />
//                 <span className="text-orange-500">
//                     <Typewriter
//                         words={['Southeast Asia']}
//                         loop={5}
//                         cursor
//                         cursorStyle='|'
//                         typeSpeed={70}
//                         deleteSpeed={50}
//                         delaySpeed={1000}
//                     />
//                 </span>
//             </h1>

//             <div className="container mx-auto mb-4">
//                 <details className="dropdown  mx-auto container">
//                     <summary className="px-3 py-1 rounded-xl text-white text-sm bg-orange-500 inline-block cursor-pointer">Sort</summary>
//                     <ul className="menu dropdown-content bg-base-100  z-[1] w-40  shadow   rounded-lg  p-5 space-y-3">
//                         <li onClick={() => setSorted(true)} className={`cursor-pointer hover:text-orange-500 ${isSorted ? 'text-orange-500' : ''}`}>Cost high to low</li>
//                         <li onClick={() => setSorted(true)} className={`cursor-pointer hover:text-orange-500 ${isSorted ? 'text-orange-500' : ''}`}>Cost low to high</li>
//                         <li onClick={() => setSorted(false)} className={`cursor-pointer hover:text-orange-500 ${isSorted ? '' : 'text-orange-500'}`}>Normal</li>
//                     </ul>
//                 </details>
//             </div>

//             <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
//                 {
//                     dataToDisplay.slice(active * 6 - 6, active * 6).map(spot => <SortCard key={spot._id} spot={spot}></SortCard>)
//                 }
//             </div>

//             <div className="flex justify-center items-center py-7">
//                 <Button
//                     variant="text"
//                     className="flex items-center  rounded-full"
//                     onClick={prev}
//                     disabled={active === 1}
//                 >
//                     Previous
//                 </Button>
//                 <div className="flex items-center">
//                     {
//                         [...Array(Math.ceil(dataToDisplay.length / 6))].map((_, i) => {
//                             return <IconButton
//                                 variant={active === i + 1 ? 'filled' : 'text'}
//                                 color="orange"
//                                 onClick={() => handleActive(i + 1)}
//                                 className="rounded-full text-black"
//                                 key={i}
//                             >
//                                 {i + 1}
//                             </IconButton>
//                         })
//                     }
//                 </div>
//                 <Button
//                     variant="text"
//                     className="flex items-center  rounded-full"
//                     onClick={next}
//                     disabled={active === Math.ceil(dataToDisplay.length / 6)}
//                 >
//                     Next
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default AllSpot;


import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SortCard from "./SortCard";
import Loader from '../../assets/loader.json'
import { Button, IconButton } from "@material-tailwind/react";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";

const AllSpot = () => {
    const loadedSpot = useLoaderData();
    console.log(loadedSpot);

    const [sort, setSort] = useState([]);
    const [isSorted, setSorted] = useState(false);
    const [sortOrder, setSortOrder] = useState(1); // 1 for descending, -1 for ascending
    const [active, setActive] = useState(1);

    useEffect(() => {
        if (isSorted) {
            fetch(`https://tourism-management-ass-server.vercel.app/sort/${sortOrder}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setSort(data);
                })
                .catch((err) => console.error("Error fetching sorted data:", err));
        }
    }, [isSorted, sortOrder]); // Refetch when sorting or order changes

    const dataToDisplay = isSorted ? sort : loadedSpot;

    if (!dataToDisplay.length) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Lottie className="w-80" animationData={Loader}></Lottie>
            </div>
        );
    }

    const handleSort = (order) => {
        setSortOrder(order);
        setSorted(true);
    };

    const handleActive = (index) => {
        setActive(index);
    };

    const next = () => {
        if (active === Math.ceil(dataToDisplay.length / 6)) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    return (
        <div className="bg-base-200 px-3">
            <h1 className="text-center md:py-14 py-7 md:text-5xl text-3xl font-sans">
                Amazing tour places around<br />
                <span className="text-orange-500">
                    <Typewriter
                        words={['Southeast Asia']}
                        loop={5}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>

            <div className="container mx-auto mb-4">
                <details className="dropdown mx-auto container">
                    <summary className="px-3 py-1 rounded-xl text-white text-sm bg-orange-500 inline-block cursor-pointer">
                        Sort
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 z-[1] w-40 shadow rounded-lg p-5 space-y-3">
                        <li
                            onClick={() => handleSort(1)} // High to low (descending)
                            className={`cursor-pointer hover:text-orange-500 ${isSorted && sortOrder === 1 ? "text-orange-500" : ""
                                }`}
                        >
                            Cost low to high
                        </li>
                        <li
                            onClick={() => handleSort(-1)} // Low to high (ascending)
                            className={`cursor-pointer hover:text-orange-500 ${isSorted && sortOrder === -1 ? "text-orange-500" : ""
                                }`}
                        >
                            Cost high to low
                        </li>
                        <li
                            onClick={() => setSorted(false)}
                            className={`cursor-pointer hover:text-orange-500 ${!isSorted ? "text-orange-500" : ""
                                }`}
                        >
                            Normal
                        </li>
                    </ul>
                </details>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                {dataToDisplay
                    .slice(active * 6 - 6, active * 6)
                    .map((spot) => (
                        <SortCard key={spot._id} spot={spot}></SortCard>
                    ))}
            </div>

            <div className="flex justify-center items-center py-7">
                <Button
                    variant="text"
                    className="flex items-center rounded-full"
                    onClick={prev}
                    disabled={active === 1}
                >
                    Previous
                </Button>
                <div className="flex items-center">
                    {[...Array(Math.ceil(dataToDisplay.length / 6))].map((_, i) => (
                        <IconButton
                            variant={active === i + 1 ? "filled" : "text"}
                            color="orange"
                            onClick={() => handleActive(i + 1)}
                            className="rounded-full text-black"
                            key={i}
                        >
                            {i + 1}
                        </IconButton>
                    ))}
                </div>
                <Button
                    variant="text"
                    className="flex items-center rounded-full"
                    onClick={next}
                    disabled={active === Math.ceil(dataToDisplay.length / 6)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default AllSpot;
