import { useEffect, useState } from "react";
import Country from "./Country";
import Lottie from "lottie-react";
import Loader from '../../assets/loader.json'

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://tourism-management-ass-server.vercel.app/countries')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data)
            })
    }, [])

    if (!countries.length) {
        return <div className="flex items-center justify-center min-h-screen"><Lottie className="w-80" animationData={Loader}></Lottie></div>
    }

    return (
        <div>
            <h1 className="text-center md:py-14 py-7 md:text-5xl text-3xl font-sans">Explore Real Adventure</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 container mx-auto  justify-center gap-5">
                {
                    countries.map(country => <Country key={country._id} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;