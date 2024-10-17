import React, {useState} from "react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black shadow-md">
            <div className="container mx-auto px-3 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        className="text-white focus:outline-none mr-3"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i className="fas fa-bars text-1xl"></i>
                    </button>

                    <div className="flex flex-col items-center">
                        <img
                            src="/src/assets/logo.png"
                            alt="Logo"
                            className="h-9 w-26"
                        />
                        <span className="font-myriadpro text-white font-semibold text-sm tracking-tight">
                          Ice Cream Junction
                        </span>
                    </div>

                </div>

                <div className="relative hidden md:block flex-grow ml-4">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <i className="fas fa-search text-gray-400"></i>
                        </div>
                        <input
                            type="text"
                            placeholder="SEARCH"
                            className="input-search-background text-gray-400 p-0 pl-9 mr-6 rounded-sm focus:outline-none placeholder-gray-400 w-full pr-5"
                        />
                    </div>
                </div>

                <div className="hidden md:flex space-x-6 items-center text-white">
                    <a href="#" className="hover:text-gray-300">ABOUT US</a>
                    <a href="#" className="hover:text-gray-300">BLOG</a>
                    <a href="#" className="hover:text-gray-300">CATEGORIES</a>
                    <a href="#" className="hover:text-gray-300">
                        <i className="far fa-user text-xl"></i>
                    </a>
                </div>
            </div>

            <div className={`md:hidden ${menuOpen ? "block" : "hidden"} mt-4 pl-3`}>
                <div className="relative margin-right mt-7">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <i className="fas fa-search text-gray-400 mb-8"></i>
                        </div>
                        <input
                            type="text"
                            placeholder="SEARCH"
                            className="input-search-background text-gray-400 p-0 pl-9 mr-6 rounded-sm focus:outline-none placeholder-gray-400 w-full pr-5 mb-8"
                        />
                    </div>
                </div>
                <a href="#" className="block text-white py-2 hover:text-gray-300">ABOUT US</a>
                <a href="#" className="block text-white py-2 hover:text-gray-300">BLOG</a>
                <a href="#" className="block text-white py-2 hover:text-gray-300">CATEGORIES</a>
                <a href="#" className="block text-white py-2 hover:text-gray-300">USER</a>
            </div>

        </nav>
    );
}

export default NavBar;



