import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import './NavBar.css'

const NavBar = () => {

    const [menu, setMenu] = useState(false)

    return (
        <nav>
            <div className=" border-b-2 border-blue-950 gap-6 items-center flex justify-end px-5 py-1">

                {/* <div>
                    <label className="swap swap-rotate">


                        <input type="checkbox" onChange={handleToggle} />


                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div> */}

                {/* { 
                    user ? <div className="flex md:gap-2 ">
                        <button onClick={logOut} className="bg-slate-400 rounded-md py-2  px-4 text-white text-sm md:text-normal font-semibold">Log Out</button>
                        <div className="flex items-center ">
                            <img className="w-[50px] rounded-full mx-auto border" src={user?.photoURL} alt="" />
                            <p>{user?.displayName}</p>
                        </div>
                    </div> :
                        <div className="flex md:gap-2">

                            <div className="flex items-center gap-2 ">
                                <Link to={'/signUp'}><button className="bg-slate-400 rounded-md py-2 px-4 text-white text-sm md:text-normal font-semibold">Sign Up</button></Link>
                                <img className="w-[50px] rounded-full mx-auto border" src="/user.png" alt="" />

                            </div>
                        </div>
                } */}

                <div className="flex md:gap-2">

                    <div className="flex items-center gap-2 ">
                        <Link className="border border-blue-950 flex items-center font-bold rounded-lg px-2 py-2 hover:bg-blue-950 hover:text-white" to={'/signUp'}><AiOutlineUser className="text-3xl font-bold"></AiOutlineUser>Sign Up</Link>
                        <img className="w-[50px] rounded-full mx-auto border" src="https://i.ibb.co/DtmYPLc/user.png" alt="" />

                    </div>
                </div>

            </div>




            <div className="max-w-[1440px] mx-auto flex justify-between mt-2  items-center">

                <div className="flex-1  flex flex-row lg:flex-row gap-6 justify-between items-center  px-3 py-5">

                    <div className="flex items-center">
                        <img src="https://i.ibb.co/BVy8W2r/logo.png" className="w-[100px]" alt="" />
                        <div>
                            <h1 className="text-xl font-bold text-blue-700">Public</h1>
                            <span className="text-3xl md:text-5xl font-bold text-blue-900">Library</span>
                        </div>
                    </div>

                    <div>
                        <div className="lg:hidden" onClick={() => setMenu(!menu)}>
                            {
                                menu === true ? <AiOutlineClose className="text-2xl"></AiOutlineClose>: <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                            }

                            {/* // <VscChromeClose className="text-2xl" />
                            //         : <VscMenu className="text-2xl" /> */}

                        </div>
                        <ul className={` z-10 shadow-lg  md:shadow-lg lg:shadow-none lg:flex absolute lg:static gap-6 text-lg 
                        ${menu ? "top-18 right-8 text-white lg:text-black" : "-top-40 right-8"}`}>
                            <li className=" border-b-2 border-blue-950 bg-blue-800 lg:bg-transparent text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/'}>Home</NavLink></li>
                            <li className=" border-b-2 border-blue-950 bg-blue-800 lg:bg-transparent text-center lg:text-left lg:border-0 px-2  lg:px-0"><NavLink to={'/addBook'}>Add Book</NavLink></li>
                            <li className=" border-b-2 border-blue-950 bg-blue-800 lg:bg-transparent text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/allBooks'}>All Books</NavLink></li>
                            <li className=" border-b-2 border-blue-950 bg-blue-800 lg:bg-transparent text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/borrowedBooks'}>Borrowed
Books</NavLink></li>
                            <li className=" rounded-b-md lg:rounded-b-0 bg-blue-800 lg:bg-transparent text-center lg:text-left px-2 lg:px-0"><NavLink to={'/login'}>Login</NavLink></li>
                        </ul>
                    </div>
                </div>








            </div>
        </nav>
    );
};

export default NavBar;