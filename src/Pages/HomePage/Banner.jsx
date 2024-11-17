import { Carousel, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import 'animate.css';
import { AttentionSeeker, Slide, Zoom } from "react-awesome-reveal";

const Banner = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('bannerData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setData(data)
            })
    }, [])

    return (
        <div>
            <Carousel
                className="relative rounded-xl"
                // navigation
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2 items-center">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 h-3 bg-orange-500" : "w-4 h-2 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
                // arrow
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 left-4 -translate-y-2/4 hidden md:block"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4 hidden md:block"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </IconButton>
                )}
                autoplay={true}
                autoplayDelay={4000}
                loop={true}
              
            >
                {
                    data.map(slide =>
                        <div key={slide.id} className="aspect-w-16 aspect-h-12 md:aspect-h-8 w-full">
                            <img
                                src={slide?.image}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute">
                                <div className="flex items-center justify-center  h-full">
                                    <div className="text-center md:space-y-5 space-y-2 md:max-w-[650px] max-w-72">
                                        <Zoom><h1 className="pacifico lg:text-6xl md:text-3xl text-2xl text-orange-500 ">{slide?.title}</h1></Zoom>
                                        <Slide direction="up" ><p className="text-gray-50 lg:text-3xl md:text-xl ">{slide?.subtitle}</p></Slide >
                                        <AttentionSeeker effect="rubberBand" delay={1000}> <button className="py-2 px-3 text-xs md:text-base border hover:border-none text-white rounded-xl hover:bg-orange-500 ">{slide?.buttonText}</button></AttentionSeeker>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </Carousel>
        </div>
    );
};

export default Banner;