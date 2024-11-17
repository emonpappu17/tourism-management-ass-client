import { useEffect, useState } from "react";
import Card from "./Card";
import { Typewriter } from 'react-simple-typewriter'
import Lottie from "lottie-react";

import Loader from '../../assets/loader.json'

import { Button, IconButton } from "@material-tailwind/react";

const Cards = () => {

    const [cards, setCards] = useState([])
    // const [page, setPage] = useState(1)
    const [active, setActive] = useState(1);

    useEffect(() => {
        fetch('https://tourism-management-ass-server.vercel.app/spots')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCards(data)
            })

        // adding country

        // const countries = [
        //     {
        //         country_Name: "Bangladesh",
        //         description: "Bangladesh is renowned for its lush, green landscapes dominated by paddy fields and rivers. As a country with a vibrant agricultural heritage, the paddy fields form a crucial part of its rural scenery. Bangladesh's agricultural heart is visible in the endless stretches of green that cover the flat plains, often intersected by rivers and small waterways. The monsoon season adds to the beauty, transforming the landscape into a verdant oasis. Rural villages, traditional houses, and local farmers harvesting rice fields are common sights that showcase the country's agrarian roots. Bangladesh’s landscapes reflect its resilience and natural beauty, making the paddy fields an iconic aspect of its identity.",
        //         image: "https://images.unsplash.com/photo-1585831781094-c8124c24b26e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D"
        //     },
        //     {
        //         country_Name: "Thailand",
        //         description: "Thailand is famous for its stunning temples, known for their golden spires, intricate details, and spiritual ambiance. Buddhist temples like Wat Phra Kaew and Wat Arun are marvels of Thai craftsmanship, filled with shimmering gold and vivid red and green hues. These temples often have pagodas surrounded by serene gardens and courtyards, making them centers of tranquility amidst bustling city life. Thailand’s temples represent the country’s deep-rooted Buddhist traditions and cultural heritage. The sound of monks chanting and the scent of incense create a peaceful atmosphere, attracting both worshippers and travelers looking to experience Thailand's spiritual essence.",
        //         image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
        //     },
        //     {
        //         country_Name: "Indonesia",
        //         description: "Indonesia, an archipelago of thousands of islands, is renowned for its breathtaking rice terraces, particularly in Bali and Java. These terraces are sculpted into the landscape, creating a stunning green expanse that follows the natural contours of the hills. Set against a backdrop of volcanic mountains, the rice terraces are both visually captivating and functionally ingenious, demonstrating traditional agricultural techniques that have been used for centuries. The combination of verdant rice paddies and volcanic peaks embodies Indonesia’s unique blend of natural beauty and human adaptation to the landscape, attracting nature lovers and photographers from around the world.",
        //         image: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SW5kb25lc2lhfGVufDB8fDB8fHww"
        //     },
        //     {
        //         country_Name: "Malaysia",
        //         description: "Malaysia’s capital, Kuala Lumpur, is home to the iconic Petronas Towers, the tallest twin towers in the world, symbolizing the country's rapid modernization and growth. Standing at an impressive 451.9 meters, the towers are connected by a sky bridge and illuminate the night sky with a mesmerizing glow. Kuala Lumpur’s skyline is a blend of modern skyscrapers, historic buildings, and lush green parks, reflecting Malaysia’s cultural diversity and its position as a hub of economic development in Southeast Asia. The Petronas Towers embody Malaysia’s ambition, progress, and its unique architectural identity, attracting tourists and symbolizing Malaysia’s pride.",
        //         image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1hbGF5c2lhfGVufDB8fDB8fHww"
        //     },
        //     {
        //         country_Name: "Vietnam",
        //         description: "Vietnam’s Ha Long Bay is famous for its mystical beauty, characterized by emerald waters and thousands of limestone karsts and islands topped with rainforests. Recognized as a UNESCO World Heritage site, Ha Long Bay is a paradise for boat tours, kayaking, and exploration, with caves, grottoes, and floating fishing villages scattered throughout. The scenic limestone pillars rising dramatically from the sea make Ha Long Bay a natural wonder that embodies Vietnam’s rich geological history. The bay’s tranquil beauty and surreal landscape provide a glimpse into the country’s scenic diversity and its deep connection to water-based life.",
        //         image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFZpZXRuYW18ZW58MHx8MHx8fDA%3D"
        //     },
        //     {
        //         country_Name: "Cambodia",
        //         description: "Cambodia’s Angkor Wat, one of the largest religious monuments in the world, is an architectural marvel that draws visitors from across the globe. Built in the 12th century, Angkor Wat was originally dedicated to the Hindu god Vishnu, later becoming a Buddhist temple. Its grand towers, intricate bas-reliefs, and alignment with the sun showcase the sophistication of the Khmer Empire’s architectural prowess. At sunrise, Angkor Wat is a breathtaking sight as the sun illuminates the temple’s reflection in a nearby pool, symbolizing Cambodia’s enduring heritage. Angkor Wat represents Cambodia’s cultural heart, echoing its history and spiritual significance.",
        //         image: "https://plus.unsplash.com/premium_photo-1661907933652-9f43a2a6031c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FtYm9kaWF8ZW58MHx8MHx8fDA%3D"
        //     }
        // ]

        // fetch('https://tourism-management-ass-server.vercel.app/countries', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(countries)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data,'country added');

        //     })

    }, [])

    if (!cards.length) {
        return <div className="flex items-center justify-center min-h-screen"><Lottie className="w-80" animationData={Loader}></Lottie></div>
    }

    // const handleSelectedPage = (selectedPage) => {
    //     if (selectedPage >= 1 &&
    //         selectedPage <= cards.length / 6 &&
    //         selectedPage !== page
    //     )
    //         // condition full filled holei nicher ta execute hobe
    //         setPage(selectedPage)
    // }

    const handleActive = (index) => {
        setActive(index)
    }

    const next = () => {
        if (active === Math.ceil(cards.length / 6)) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="bg-base-200 px-3">
            <h1 className="text-center md:py-14 py-7 md:text-5xl text-3xl font-sans">Amazing tour places around<br />
                <span className="text-orange-500">
                    <Typewriter
                        words={['Southeast Asia']}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
                {
                    cards.slice(active * 6 - 6, active * 6).map(card => <Card key={card._id} card={card}></Card>)
                }
            </div>
            {/* <div className="p-3 my-4 flex justify-center">
                <span onClick={() => handleSelectedPage(page - 1)} className={`py-2 px-4  border-black border cursor-pointer ${page > 1 ? '' : 'opacity-0'}`}>‣</span>
                {
                    [...Array(cards.length / 6)].map((_, i) => {
                        return <span
                            onClick={() => handleSelectedPage(i + 1)}
                            className={`py-2 px-4  border-black border cursor-pointer ${page === i + 1 ? 'bg-orange-500' : ''}`}
                            key={i}
                        >
                            {i + 1}
                        </span>
                    })
                }
                <span onClick={() => handleSelectedPage(page + 1)} className={`py-2 px-4  border-black border cursor-pointer ${page < cards.length / 6 ? '' : 'opacity-0'}`}>‣</span>
            </div> */}
            <div className="flex justify-center items-center py-7">
                <Button
                    variant="text"
                    className="flex items-center  rounded-full"
                    onClick={prev}
                    disabled={active === 1}
                >
                    Previous
                </Button>
                <div className="flex items-center">
                    {
                        [...Array(Math.ceil(cards.length / 6))].map((_, i) => {
                            return <IconButton
                                variant={active === i + 1 ? 'filled' : 'text'}
                                color="orange"
                                onClick={() => handleActive(i + 1)}
                                className="rounded-full text-black"
                                key={i}
                            >
                                {i + 1}
                            </IconButton>
                        })
                    }
                </div>
                <Button
                    variant="text"
                    className="flex items-center  rounded-full"
                    onClick={next}
                    disabled={active === Math.ceil(cards.length / 6)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Cards;