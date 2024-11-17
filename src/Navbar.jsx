import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser, FaUserPlus } from "react-icons/fa";
import { PiUserCircleThin } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";

import { MyContext } from "./MyContext";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const { user, logOut } = useContext(MyContext)

    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold border-b-orange-500 border-b-2 pb-2" : "text-[#757783] font-sans hover:text-orange-500"
        }>Home</NavLink></li>
        <li><NavLink to="/allSpot" className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold border-b-orange-500 border-b-2 pb-2" : "text-[#757783] font-sans hover:text-orange-500"
        }>All spot </NavLink></li>
        <li><NavLink to="/addSpot" className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold border-b-orange-500 border-b-2 pb-2" : "text-[#757783] font-sans hover:text-orange-500"
        }>Add spot</NavLink></li>
        <li><NavLink to="/myList" className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold border-b-orange-500 border-b-2 pb-2" : "text-[#757783] font-sans hover:text-orange-500"
        }>My list</NavLink></li>
    </>

    const [isOpen, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!isOpen);
    }

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout it!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: "Logout!",
                            text: "Your account has been logout.",
                            icon: "success"
                        });
                    })
                    .catch(err => console.log(`logout err ${err}`))
            }
        });
    }

    return (
        <div className="text-[#757783] bg-white  sticky top-0 z-50 ">
            <div className="navbar mx-auto container">
                <div className="navbar-start">
                    <div className="flex items-center">
                        <img className="w-20" src="/logo.png" alt="" />
                        <h3 className="pacifico text-3xl text-neutral-900">Travel</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-9 ">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={toggleOpen} />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer">
                                    <div tabIndex={0} role="button" className="mr-4 lg:hidden group">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-7 group-hover:text-orange-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h8m-8 6h16" />
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            <div className="drawer-side z-[50]">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <div className="bg-base-200 text-base-content min-h-full w-80">
                                    <div className=" bg-base-300 px-3">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <img className="w-20" src="/logo.png" alt="" />
                                                <h3 className="pacifico text-3xl text-neutral-900">Travel</h3>
                                            </div>
                                            <button onClick={toggleOpen} className="group btn btn-ghost"> <svg
                                                className="swap-on fill-current group-hover:text-orange-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 512 512">
                                                <polygon
                                                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                            </svg></button>
                                        </div>
                                    </div>
                                    <ul className="p-4 space-y-5">
                                        {
                                            links
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* profile */}
                    <div>
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="m-1">
                                <div className="avatar">
                                    <div className="w-12 rounded-full bg-base-200 group">

                                        {
                                            // user ?
                                            //     <img src={user.photoURL} />
                                            //     : <PiUserCircleThin className="w-full h-full group-hover:text-orange-500" />
                                            user ?
                                                user?.photoURL ? <img src={user?.photoURL} /> : <div className="avatar placeholder">
                                                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                                        <span>{user?.displayName?.charAt(0)?.toUpperCase()}</span>
                                                    </div>
                                                </div>
                                                : <PiUserCircleThin className="w-full h-full group-hover:text-orange-500" />
                                        }
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content  bg-base-100 rounded-lg z-[50] w-44 p-5 shadow space-y-3">
                                {
                                    user ? <>
                                        <li className="hover:text-orange-500 flex items-center gap-3"><FaRegUser />
                                            {user?.displayName}
                                        </li>
                                        <li onClick={handleLogout} className="hover:text-orange-500 flex items-center gap-3 cursor-pointer"><FiLogOut />
                                            Logout
                                        </li></> : <>

                                        <li >
                                            <Link to="/login" className="hover:text-orange-500 flex items-center gap-3"><FaRegUser />
                                                Login
                                            </Link>
                                        </li>
                                        <li><Link to="/register" className="hover:text-orange-500 flex items-center gap-2"><FaUserPlus className="text-xl" />
                                            Register</Link>
                                        </li></>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

