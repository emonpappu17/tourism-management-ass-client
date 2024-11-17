import { useNavigate } from "react-router-dom";

const Country = ({ country }) => {

    const { country_Name, image } = country
    const navigate = useNavigate()
    const handleNavigate = (name) => {
        navigate(`/countrySpots/${name}`)
    }

    return (
        <div>
            <div onClick={() => handleNavigate(country_Name)} className="relative  h-80 w-full overflow-hidden  rounded-3xl group cursor-pointer">
                <figure>
                    <img
                        className="absolute inset-0  h-full w-full rounded-3xl  bg-cover bg-center"
                        src={image}
                        alt="Shoes" />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full rounded-3xl hover:bg-gradient-to-t from-black/80 via-black/50" />
                </figure>
                <div className="absolute top-4 right-3 px-3 py-1 rounded-xl text-white text-sm bg-orange-500">5 TOURS</div>
                <div className="absolute bottom-0 left-7 text-white ">
                    <div className="translate-y-14 group-hover:-translate-y-10 duration-150 delay-150">
                        <p className="text-orange-500">Travel to</p>
                        <h2 className="text-3xl font-bold">{country_Name}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;