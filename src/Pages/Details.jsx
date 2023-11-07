import { AiOutlineShoppingCart } from "react-icons/ai";

const Details = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-2 lg:min-h-[600px] my-20">
            <h1 className="text-center font-bold text-5xl text-purple-600 my-10">About </h1>


            <div className="flex items-center justify-between gap-10 flex-col lg:flex-row">

                <div className="text-center lg:text-left min-w-[400px]">
                    <img src="https://i.ibb.co/q5t6ng5/grant.png" className="w-full rounded-md" alt="" />


                </div>

                <div>
                    <p className="text-3xl text-blue-950 font-bold ">Grant</p>
                    <p className="text-md ">By Ron Chernow</p>
                    <p className="text-md font-semibold mt-2 ">Quantity: 5</p>
                    <p className="text-xl font-bold mt-2">Short Description:</p>
                    <p className="text-justify">Pulitzer Prize winner Ron Chernow - author of Hamilton, which inspired the musical - offers a sweeping and dramatic portrait of one of America's most compelling Civil War generals and presidents, Ulysses S. Grant. With lucidity, breadth, and meticulousness, Chernow finds the threads that bind Grant's disparate stories together, shedding new light on the man whom poet Walt Whitman described as "nothing heroic...and yet the greatest hero.</p>
                    <p className="text-xl font-bold">rating</p>
                    <div className="flex items-center gap-6 mt-4">
                        <button className="border-2 border-blue-950 rounded-lg py-2 px-4 font-semibold w-2/4 hover:bg-blue-950 hover:text-white">Borrow</button>

                        <button className="border-2 border-blue-950 rounded-lg py-2 px-4 font-semibold w-2/4 hover:bg-blue-950 hover:text-white">Read More</button>
                    </div>
                </div>


            </div>






        </div>
    );
};

export default Details;