import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-b from-gray-900 to-black  text-[#757783] py-16 ">
                <div className="container mx-auto px-6">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
                        {/* About Section */}
                        <div>
                            {/* <h2 className="text-2xl font-bold text-orange-400 mb-4 pacifico">Travel</h2> */}
                            <div className="flex items-center">
                                <img className="w-20" src="/logo.png" alt="" />
                                <h3 className="pacifico text-3xl text-orange-500">Travel</h3>
                            </div>
                            <p className="text-sm leading-relaxed">
                                Your gateway to exploring the beauty of the world. Plan your next adventure with ease and confidence.
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex justify-around md:justify-start md:space-x-16">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a className="hover:text-orange-500 cursor-pointer">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:text-orange-500 cursor-pointer">
                                            All tourist spot
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:text-orange-500 cursor-pointer">
                                            Add tourist spot
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:text-orange-500 cursor-pointer">
                                            My list
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-200 mb-4">Support</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a className="hover:text-orange-500 cursor-pointer">
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:text-orange-500 cursor-pointer">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:text-orange-500 cursor-pointer">
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li>
                                        <a className="hover:text-orange-500 cursor-pointer">
                                            Sitemap
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter Subscription */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-200 mb-4">Stay Updated</h3>
                            <p className="text-sm mb-4">
                                Subscribe to our newsletter to get the latest travel updates and exclusive deals.
                            </p>
                            <form className="flex flex-col lg:flex-row">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="flex-1 px-4 py-2 text-sm text-gray-900 rounded-t-md sm:rounded-t-none sm:rounded-l-md focus:outline-none"
                                />
                                <button

                                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm text-white rounded-b-md sm:rounded-b-none sm:rounded-r-md"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © 2024 <span className="text-orange-500 font-semibold">Travel</span>. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <a

                                className="text-orange-500 hover:text-orange-300 text-2xl cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </a>
                            <a

                                className="text-orange-500 hover:text-orange-300 text-2xl cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitter />
                            </a>
                            <a

                                className="text-orange-500 hover:text-orange-300 text-2xl cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                            <a

                                className="text-orange-500 hover:text-orange-300 text-2xl cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;