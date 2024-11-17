import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../MyContext";
import { Dialog } from "@material-tailwind/react";
import Swal from "sweetalert2";

const MyList = () => {

    const { user } = useContext(MyContext)

    const [added, setAdded] = useState([])

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const [index, setIndex] = useState(null)

    const [id, setId] = useState(null)

    useEffect(() => {

        fetch(`https://tourism-management-ass-server.vercel.app/spots/email/${user.email}`)
            .then(res => res.json())
            .then(data => {

                setAdded(data)

            })
    }, [user])

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
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const visitor = form.totalVisitorsPerYear.value;
        const totalVisitorsPerYear = Number(visitor)
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

        console.log(touristSpot);

        fetch(`https://tourism-management-ass-server.vercel.app/spots/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(touristSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setAdded(preAdded => {
                        const updatedArray = [...preAdded];
                        updatedArray[index] = { ...updatedArray[index], ...touristSpot };
                        return updatedArray
                    })
                    // Close the dialog
                    handleOpen();
                    Swal.fire({
                        title: "Tourist spot added successfully",
                        text: "Success!",
                        icon: "success"
                    });
                    e.target.reset()
                }
            })
    };

    const handleDelete = (cardId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourism-management-ass-server.vercel.app/spots/${cardId}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your User has been deleted.",
                                icon: "success"
                            });
                            const remaining = added.filter(card => card._id !== cardId)
                            setAdded(remaining)
                        }
                    })
            }
        });
    }

    if (!added.length) {
        return <div className="flex h-screen justify-center items-center"><div className=" text-center text-5xl ">No item added yet</div></div>
    }

    return (
        <div>
            <div className="overflow-x-auto mx-auto container h-screen">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Tourists_spot_name</th>
                            <th>Country_name</th>
                            <th>Travel_time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {added.map((card, i) =>
                            <tr key={card._id} className="hover">
                                <th><img className="size-20" src={card.image} alt="" /></th>
                                <td>{card.tourists_spot_name}</td>
                                <td>{card.country_Name}</td>
                                <td>{card.travel_time}</td>
                                <td>
                                    <button onClick={() => { handleOpen(); setIndex(i); setId(card._id) }} className="py-2 px-3 text-xs border border-[#263238] md:text-base  hover:border-none  rounded-xl hover:bg-orange-500 mb-2 text-[#263238] ">Update</button>
                                    <br />
                                    <button onClick={() => handleDelete(card._id)} className="py-2 px-[15px] text-xs border border-[#263238] md:text-base  hover:border-none  rounded-xl hover:bg-orange-500 mb-2 text-[#263238] ">Delete</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>

            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <div>
                    <div className="card bg-base-100 w-full shadow-2xl mx-auto">
                        <h1 className="pacifico text-4xl text-neutral-900 text-center mt-5">Update Tourists Spot</h1>
                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="md:flex justify-between gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Image URL</span>
                                    </label>
                                    <input defaultValue={added[index]?.image} name="image" type="url" placeholder="Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Tourists Spot Name</span>
                                    </label>
                                    <input defaultValue={added[index]?.tourists_spot_name} name="tourists_spot_name" type="text" placeholder="Spot Name" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="md:flex justify-between gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Country Name</span>
                                    </label>
                                    <input defaultValue={added[index]?.country_Name} name="country_name" type="text" placeholder="Country" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Location</span>
                                    </label>
                                    <input defaultValue={added[index]?.location} name="location" type="text" placeholder="Location" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="md:flex justify-between gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Average Cost</span>
                                    </label>
                                    <input defaultValue={added[index]?.average_cost} name="average_cost" type="number" placeholder="Average Cost" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Seasonality</span>
                                    </label>
                                    <input defaultValue={added[index]?.seasonality} name="seasonality" type="text" placeholder="e.g., Summer, Winter" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="md:flex justify-between gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Travel Time</span>
                                    </label>
                                    <input defaultValue={added[index]?.travel_time} name="travel_time" type="text" placeholder="e.g., 7 days" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Total Visitors Per Year</span>
                                    </label>
                                    <input defaultValue={added[index]?.totalVisitorsPerYear} name="totalVisitorsPerYear" type="number" placeholder="Total Visitors" className="input input-bordered" required />
                                </div>
                            </div>

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

                            <div className="md:flex justify-between gap-4">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold">Short Description</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        placeholder="Brief description of the tourist spot"
                                        className="input input-bordered"
                                        defaultValue={added[index]?.description}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="w-full py-2 px-3 border border-[#263238] hover:border-none text-[#263238] rounded-xl hover:bg-orange-500">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Dialog>
        </div >
    );
};

export default MyList;