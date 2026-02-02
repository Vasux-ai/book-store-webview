import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import AvatarIcon from "../assets/avatar.png";


const listNavigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check out", href: "/checkout" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const currentUser = true;
   
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* left side */}
                <div className="flex items-center md:gap-16 gap-4">
                    <Link to="/">
                        <HiMiniBars3CenterLeft className="size-6" />
                    </Link>


                    {/* Search input */}
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <GrSearch className="absolute inline-block left-3 inset-y-2" />
                        <input type="text" placeholder="Search books..." className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
                    </div>
                </div>




                {/* right side */}
                <div className="flex items-center md:space-x-3 space-x-2">
                    <div className="relative">
                        {currentUser ? (
                            <>
                                <button onClick={() => setIsOpen(!isOpen)}><img src={AvatarIcon} alt="avatar" className={`size-6 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} /></button>
                                {/* show dropdown menu */}
                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                        <ul className="py-2">
                                            {listNavigation.map((item) => (
                                                <li key={item.name} onClick={()=>setIsOpen(false)}>
                                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">{item.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : <Link to="/login"><HiOutlineUser className="size-6" /></Link>}
                    </div>
                    <button className="hidden sm:block" >
                        <HiOutlineHeart className="size-6" />
                    </button>

                    <Link to="/cart" className="bg-yellow-500 p-1 sm:px-6 px-2 flex items-center rounded-sm">
                        <HiOutlineShoppingCart className="size-6" />
                        <span className="text-xs font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar