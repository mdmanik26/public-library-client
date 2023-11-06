import { FcGoogle  } from "react-icons/fc";
import {  AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto border-2 py-4 my-10  px-4 lg:px-20 rounded-lg">
                <h1 className="text-5xl text-center md:text-left text-blue-900 font-bold mb-10">Sign In</h1>
                <div className="flex flex-col-reverse md:flex-row justify-between my-10">
                    <div className="flex-1">
                        <form>


                            <div className="flex pb-2 gap-1 mt-6  items-center border-b-2 border-blue-950">
                                <AiOutlineMail className="text-2xl font-bold"></AiOutlineMail>
                                <input className="w-3/4 px-2  focus:outline-none" type="email" name="email" placeholder="Your Email" />
                            </div>

                            <div className="flex pb-2 gap-1 mt-6  items-center border-b-2 border-blue-950">
                                <AiOutlineLock className="text-2xl font-bold"></AiOutlineLock>
                                <input className="w-3/4 px-2  focus:outline-none" type="password" name="password" placeholder="Your Password" />
                            </div>



                            <div className="block md:hidden mt-6">
                                <p className="flex  mx-auto md:mt-6">Don't have an account <Link to={'/signup'} className="text-blue-600  font-semibold ml-2"> Sign Up</Link></p>
                            </div>
                            <input className="  border border-blue-950 flex items-center text-md font-medium rounded-lg px-4 mt-8 py-2 hover:bg-blue-950 hover:text-white" type="submit" value="Sign In" />
                        </form>

                        <div className="flex items-center gap-2 mt-4 lg:mt-10">
                            <p className="text-xl font-semibold">Or Login with </p>
                            <Link><FcGoogle className="text-2xl font-bold"></FcGoogle></Link>
                        </div>
                    </div>


                    <div className="flex-1 md:flex flex-col text-center my-6 hidden">
                        <img className="mx-auto" src="https://i.ibb.co/BVy8W2r/logo.png" alt="" />
                        <p className="flex mx-auto md:mt-4">Don't have an account <Link to={'/signup'} className="text-blue-600  font-semibold ml-2"> Sign Up</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;