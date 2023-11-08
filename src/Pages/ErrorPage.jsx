import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        
            <div className="border h-screen flex justify-center items-center">
                <div className="text-center">
                    <img className="w-1/2 mx-auto" src="https://i.ibb.co/PQrrm76/istockphoto-1440541516-170667a.webp" alt="" />
                    <p className="text-5xl my-5 text-blue-500 ">404-PAGE NOT FOUND</p>
                    <p className="mb-5 text-xl ">Looks like this page went on vacation</p>
                    <Link to={'/'}>
                        <button className="px-5 btn font-semibold btn-outline hover:text-white hover:bg-blue-500 py-2 rounded-md">Go Home</button>
                    </Link>
                </div>
            </div>
        
    );
};

export default ErrorPage;