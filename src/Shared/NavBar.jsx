import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import './NavBar.css'
import { AuthContext } from "./AuthProvider";

const NavBar = () => {

    const [menu, setMenu] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }




    return (
        <nav>
            <div className=" border-b-2 border-blue-950 gap-6 items-center flex justify-end px-5 py-1">
                {
                    user ? <div className="flex md:gap-2 ">
                        <button onClick={logOut} className="hover:bg-blue-950 btn btn-outline">Log Out</button>
                        <div className="flex items-center ">
                            <img className="w-[50px] rounded-full mx-auto border" src={user?.photoURL} alt="" />
                            <p>{user?.displayName}</p>
                        </div>
                    </div> :
                        <div className="flex md:gap-2">

                            <div className="flex items-center gap-2 ">
                                <Link to={'/signUp'}><button className="hover:bg-blue-950 btn btn-outline">Sign Up</button></Link>
                                <img className="w-[50px] rounded-full mx-auto border" src="https://i.ibb.co/wzgNG5m/user.png" alt="" />

                            </div>
                        </div>
                }

                <div>
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={handleToggle} className="toggle" />
                    </label>
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
                                menu === true ? <AiOutlineClose className="text-2xl"></AiOutlineClose> : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                            }



                        </div>
                        <ul className={` z-10 shadow-lg  md:shadow-lg lg:shadow-none lg:flex absolute lg:static gap-6 text-lg 
                        ${menu ? "top-18 right-8 text-white lg:text-black" : "-top-40 right-8"}`}>
                            <li className=" border-b-2 border-blue-950 bg-blue-800 lg:bg-transparent text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/'}>Home</NavLink></li>
                            <li className=" border-b-2 border-blue-950 bg-blue-800 lg:bg-transparent text-center lg:text-left lg:border-0 px-2  lg:px-0"><NavLink to={'/addbook'}>Add Book</NavLink></li>
                            <li className=" border-b-2 border-blue-950 bg-blue-800 lg:bg-transparent text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/allBooks'}>All Books</NavLink></li>
                            <li className=" border-b-2 border-blue-950 bg-blue-800 lg:bg-transparent text-center lg:text-left lg:border-0 px-2 lg:px-0"><NavLink to={'/borrowed'}>Borrowed
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