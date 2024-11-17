import { useContext } from "react";
import Swal from "sweetalert2";
import { MyContext } from "../../MyContext";

const AddSpot = () => {

    const { user } = useContext(MyContext)

    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_name.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.average_cost.value;
        const average_cost = Number(cost)
        // const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const visitor = form.totalVisitorsPerYear.value;
        const totalVisitorsPerYear = Number(visitor)
        // const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const email = form.user_email.value;
        const name = form.user_name.value;

        const touristSpot = {
            image,
            tourists_spot_name,
            country_Name,
            location,
            description,
            average_cost,
            seasonality,
            travel_time,
            totalVisitorsPerYear,
            email,
            name,
        };

        // all 30 data here
        // const touristSpots = [
        //     {
        //         image: "https://images.pexels.com/photos/18974570/pexels-photo-18974570/free-photo-of-deer-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Sundarban",
        //         country_Name: "Bangladesh",
        //         location: "Khulna",
        //         description: "Largest mangrove forest in the world, home to the Bengal tiger.",
        //         average_cost: 200,
        //         seasonality: "Winter",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 300000,
        //         email: "robin@example.com",
        //         name: "Robin"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/19472850/pexels-photo-19472850/free-photo-of-boats-on-inani-beach-in-bangladesh.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Cox’s Bazar",
        //         country_Name: "Bangladesh",
        //         location: "Cox's Bazar District",
        //         description: "Longest unbroken sandy sea beach in the world.",
        //         average_cost: 150,
        //         seasonality: "Summer",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 2000000,
        //         email: "jane@example.com",
        //         name: "Jane"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/16947982/pexels-photo-16947982/free-photo-of-sunlit-trees-and-bushes-near-water.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Rangamati",
        //         country_Name: "Bangladesh",
        //         location: "Chittagong Hill Tracts",
        //         description: "Scenic hill district with lakes, rivers, and tribal cultures.",
        //         average_cost: 100,
        //         seasonality: "Winter",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 500000,
        //         email: "mark@example.com",
        //         name: "Mark"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/16710717/pexels-photo-16710717/free-photo-of-sunbeams-over-the-river-between-high-rocky-banks-in-the-forest.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Bandarban",
        //         country_Name: "Bangladesh",
        //         location: "Chittagong Hill Tracts",
        //         description: "Known for hills, rivers, and tribal communities.",
        //         average_cost: 120,
        //         seasonality: "Winter",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 600000,
        //         email: "emma@example.com",
        //         name: "Emma"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/7008958/pexels-photo-7008958.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Saint Martin’s Island",
        //         country_Name: "Bangladesh",
        //         location: "Bay of Bengal",
        //         description: "Only coral island in Bangladesh, known for clear blue waters.",
        //         average_cost: 180,
        //         seasonality: "Winter",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 400000,
        //         email: "liam@example.com",
        //         name: "Liam"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/8299700/pexels-photo-8299700.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Bangkok",
        //         country_Name: "Thailand",
        //         location: "Bangkok",
        //         description: "Vibrant city known for temples, markets, and nightlife.",
        //         average_cost: 500,
        //         seasonality: "Winter",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 22000000,
        //         email: "sophia@example.com",
        //         name: "Sophia"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/971034/pexels-photo-971034.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Chiang Mai",
        //         country_Name: "Thailand",
        //         location: "Chiang Mai Province",
        //         description: "Mountainous region known for temples and festivals.",
        //         average_cost: 300,
        //         seasonality: "Winter",
        //         travel_time: "4 days",
        //         totalVisitorsPerYear: 2500000,
        //         email: "mike@example.com",
        //         name: "Mike"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/327494/pexels-photo-327494.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Ayutthaya",
        //         country_Name: "Thailand",
        //         location: "Phra Nakhon Si Ayutthaya",
        //         description: "Ancient capital with historic ruins and temples.",
        //         average_cost: 200,
        //         seasonality: "Spring",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 1000000,
        //         email: "lucy@example.com",
        //         name: "Lucy"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/2867732/pexels-photo-2867732.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Phuket",
        //         country_Name: "Thailand",
        //         location: "Phuket",
        //         description: "Thailand’s largest island, known for beaches and resorts.",
        //         average_cost: 600,
        //         seasonality: "Summer",
        //         travel_time: "5 days",
        //         totalVisitorsPerYear: 9500000,
        //         email: "john@example.com",
        //         name: "John"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Phi Phi Islands",
        //         country_Name: "Thailand",
        //         location: "Krabi Province",
        //         description: "Famous island group known for beautiful beaches.",
        //         average_cost: 450,
        //         seasonality: "Summer",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 1500000,
        //         email: "olivia@example.com",
        //         name: "Olivia"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Bali",
        //         country_Name: "Indonesia",
        //         location: "Bali Island",
        //         description: "Popular island destination known for beaches and temples.",
        //         average_cost: 400,
        //         seasonality: "Summer",
        //         travel_time: "5 days",
        //         totalVisitorsPerYear: 6000000,
        //         email: "james@example.com",
        //         name: "James"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/12400526/pexels-photo-12400526.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Borobudur Temple",
        //         country_Name: "Indonesia",
        //         location: "Magelang",
        //         description: "Largest Buddhist temple in the world, an ancient marvel.",
        //         average_cost: 300,
        //         seasonality: "Spring",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 2500000,
        //         email: "mia@example.com",
        //         name: "Mia"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/3125852/pexels-photo-3125852.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Komodo National Park",
        //         country_Name: "Indonesia",
        //         location: "East Nusa Tenggara",
        //         description: "Home of the famous Komodo dragons and scenic islands.",
        //         average_cost: 500,
        //         seasonality: "Winter",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 150000,
        //         email: "ryan@example.com",
        //         name: "Ryan"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/18080802/pexels-photo-18080802/free-photo-of-majestic-coral-formations-in-raja-ampat-s-blue-ocean-seen-from-a-drone-serene-beauty-of-the-open-sea.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Raja Ampat Islands",
        //         country_Name: "Indonesia",
        //         location: "West Papua",
        //         description: "Diving paradise with diverse marine life and coral reefs.",
        //         average_cost: 700,
        //         seasonality: "Summer",
        //         travel_time: "7 days",
        //         totalVisitorsPerYear: 50000,
        //         email: "bella@example.com",
        //         name: "Bella"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/28916768/pexels-photo-28916768/free-photo-of-sword-on-parangtritis-beach-yogyakarta.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Yogyakarta",
        //         country_Name: "Indonesia",
        //         location: "Special Region of Yogyakarta",
        //         description: "Cultural heart of Java with rich traditions and history.",
        //         average_cost: 300,
        //         seasonality: "Spring",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 1000000,
        //         email: "alex@example.com",
        //         name: "Alex"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Kuala Lumpur",
        //         country_Name: "Malaysia",
        //         location: "Kuala Lumpur",
        //         description: "Malaysia's capital, known for iconic Petronas Towers.",
        //         average_cost: 400,
        //         seasonality: "Winter",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 12500000,
        //         email: "sarah@example.com",
        //         name: "Sarah"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/3426326/pexels-photo-3426326.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Langkawi",
        //         country_Name: "Malaysia",
        //         location: "Langkawi",
        //         description: "Island known for beaches, rainforests, and the Sky Bridge.",
        //         average_cost: 300,
        //         seasonality: "Summer",
        //         travel_time: "4 days",
        //         totalVisitorsPerYear: 3000000,
        //         email: "tom@example.com",
        //         name: "Tom"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/34401/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Penang",
        //         country_Name: "Malaysia",
        //         location: "George Town",
        //         description: "Island with rich heritage, street art, and food culture.",
        //         average_cost: 250,
        //         seasonality: "Spring",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 700000,
        //         email: "kate@example.com",
        //         name: "Kate"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/130576/pexels-photo-130576.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Cameron Highlands",
        //         country_Name: "Malaysia",
        //         location: "Pahang",
        //         description: "Cool highland region known for tea plantations and farms.",
        //         average_cost: 200,
        //         seasonality: "Summer",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 500000,
        //         email: "aaron@example.com",
        //         name: "Aaron"
        //     },
        //     {
        //         image: "https://images.pexels.com/photos/14434745/pexels-photo-14434745.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Mekong Delta",
        //         country_Name: "Vietnam",
        //         location: "Southern Vietnam",
        //         description: "Lush region of rivers, rice paddies, and floating markets.",
        //         average_cost: 250,
        //         seasonality: "Summer",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 2200000,
        //         email: "abigail@example.com",
        //         name: "Abigail"
        //     },
        //     { 
        //         image: "https://images.pexels.com/photos/58597/pexels-photo-58597.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Ha Long Bay",
        //         country_Name: "Vietnam",
        //         location: "Quang Ninh Province",
        //         description: "Scenic bay with limestone islands and emerald waters.",
        //         average_cost: 350,
        //         seasonality: "Summer",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 3000000,
        //         email: "chris@example.com",
        //         name: "Chris"
        //       },
        //       {
        //         image: "https://images.pexels.com/photos/1018478/pexels-photo-1018478.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Ho Chi Minh City",
        //         country_Name: "Vietnam",
        //         location: "Southern Vietnam",
        //         description: "Vibrant city with historical sites and French architecture.",
        //         average_cost: 400,
        //         seasonality: "Winter",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 5000000,
        //         email: "laura@example.com",
        //         name: "Laura"
        //       },
        //       {
        //         image: "https://images.pexels.com/photos/26805261/pexels-photo-26805261/free-photo-of-lantern-festival-in-hoi-an-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Hoi An Ancient Town",
        //         country_Name: "Vietnam",
        //         location: "Quang Nam Province",
        //         description: "Historic trading port with well-preserved buildings and lantern-lit streets.",
        //         average_cost: 250,
        //         seasonality: "Spring",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 1200000,
        //         email: "sam@example.com",
        //         name: "Sam"
        //       },
        //       {
        //         image: "https://images.pexels.com/photos/26762053/pexels-photo-26762053/free-photo-of-blue-ferry-boat-on-water-in-thailand.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Phong Nha Caves",
        //         country_Name: "Vietnam",
        //         location: "Quang Binh Province",
        //         description: "Famous for its stunning limestone caves and underground rivers.",
        //         average_cost: 300,
        //         seasonality: "Winter",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 800000,
        //         email: "sara@example.com",
        //         name: "Sara"
        //       },
        //       {
        //         image: "https://images.pexels.com/photos/2495575/pexels-photo-2495575.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Angkor Wat",
        //         country_Name: "Cambodia",
        //         location: "Siem Reap",
        //         description: "Largest religious monument in the world, renowned for its Khmer architecture.",
        //         average_cost: 250,
        //         seasonality: "Spring",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 2500000,
        //         email: "josh@example.com",
        //         name: "Josh"
        //       },
        //       {
        //         image: "https://images.pexels.com/photos/5769435/pexels-photo-5769435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        //         tourists_spot_name: "Siem Reap",
        //         country_Name: "Cambodia",
        //         location: "Siem Reap",
        //         description: "Gateway to Angkor Wat and known for its cultural landmarks.",
        //         average_cost: 200,
        //         seasonality: "Winter",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 1500000,
        //         email: "claire@example.com",
        //         name: "Claire"
        //       },
        //       {
        //         image: "https://images.pexels.com/photos/16018460/pexels-photo-16018460/free-photo-of-buildings-and-houses-in-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Phnom Penh",
        //         country_Name: "Cambodia",
        //         location: "Phnom Penh",
        //         description: "Capital of Cambodia, known for the Royal Palace and Silver Pagoda.",
        //         average_cost: 180,
        //         seasonality: "Summer",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 1200000,
        //         email: "daniel@example.com",
        //         name: "Daniel"
        //       },
        //       {
        //         image: "https://images.pexels.com/photos/9510221/pexels-photo-9510221.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Kep",
        //         country_Name: "Cambodia",
        //         location: "Kep Province",
        //         description: "Coastal city known for its seafood and quiet beaches.",
        //         average_cost: 150,
        //         seasonality: "Summer",
        //         travel_time: "2 days",
        //         totalVisitorsPerYear: 300000,
        //         email: "hannah@example.com",
        //         name: "Hannah"
        //       },
        //       {
        //         image: "https://images.pexels.com/photos/8979735/pexels-photo-8979735.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Bokor National Park",
        //         country_Name: "Cambodia",
        //         location: "Kampot Province",
        //         description: "National park featuring scenic views, waterfalls, and old French buildings.",
        //         average_cost: 200,
        //         seasonality: "Winter",
        //         travel_time: "3 days",
        //         totalVisitorsPerYear: 250000,
        //         email: "peter@example.com",
        //         name: "Peter"
        //       },
        //       {
        //         image: "https://images.pexels.com/photos/5473056/pexels-photo-5473056.jpeg?auto=compress&cs=tinysrgb&w=600",
        //         tourists_spot_name: "Taman Negara National Park",
        //         country_Name: "Malaysia",
        //         location: "Pahang",
        //         description: "Malaysia's oldest national park, known for its rainforest, wildlife, and canopy walkway.",
        //         average_cost: 300,
        //         seasonality: "Summer",
        //         travel_time: "4 days",
        //         totalVisitorsPerYear: 600000,
        //         email: "nancy@example.com",
        //         name: "Nancy"
        //       }
        // ];

        console.log(touristSpot, average_cost);

        fetch('https://tourism-management-ass-server.vercel.app/spots', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(touristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Tourist spot added successfully",
                        text: "Success!",
                        icon: "success"
                    });
                    e.target.reset()
                }
            })
    };

    return (
        <div className="bg-base-200 py-16 p-4">
            <div className="container mx-auto">
                <div className="card bg-base-100 w-full shadow-2xl mx-auto">
                    <h1 className="pacifico text-4xl text-neutral-900 text-center mt-5">Add Tourists Spot</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        {/* Row 1 */}
                        <div className="md:flex justify-between gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Image URL</span>
                                </label>
                                <input name="image" type="url" placeholder="Image URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Tourists Spot Name</span>
                                </label>
                                <input name="tourists_spot_name" type="text" placeholder="Spot Name" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className="md:flex justify-between gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Country Name</span>
                                </label>
                                <input name="country_name" type="text" placeholder="Country" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Location</span>
                                </label>
                                <input name="location" type="text" placeholder="Location" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Row 3 */}
                        <div className="md:flex justify-between gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Average Cost</span>
                                </label>
                                <input name="average_cost" type="number" placeholder="Average Cost" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Seasonality</span>
                                </label>
                                <input name="seasonality" type="text" placeholder="e.g., Summer, Winter" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Row 4 */}
                        <div className="md:flex justify-between gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Travel Time</span>
                                </label>
                                <input name="travel_time" type="text" placeholder="e.g., 7 days" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Total Visitors Per Year</span>
                                </label>
                                <input name="totalVisitorsPerYear" type="number" placeholder="Total Visitors" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Row 5 */}
                        <div className="md:flex justify-between gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">User Name</span>
                                </label>
                                <input name="user_name" type="text" placeholder="User Name" className="input input-bordered" value={user.displayName} required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">User Email</span>
                                </label>
                                <input name="user_email" type="email" placeholder="User Email" className="input input-bordered" value={user.email} required />
                            </div>
                        </div>
                        {/* Row 6 */}
                        <div className="md:flex justify-between gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Short Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Brief description of the tourist spot"
                                    className="input input-bordered"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button type="submit" className="w-full py-2 px-3 border border-[#263238] hover:border-none text-[#263238] rounded-xl hover:bg-orange-500">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSpot;


