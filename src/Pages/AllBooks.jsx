

const AllBooks = () => {
    return (
        <div className=" my-20 p-4 max-w-[1200px] mx-auto grid grid-cols lg:grid-cols-2 gap-6">

            <div className=" flex items-center gap-2 lg:gap-6 shadow-lg rounded-lg ">
                <div className="w-2/4">
                    <img className="rounded-lg" src="https://i.ibb.co/q5t6ng5/grant.png" alt="" />
                </div>
                <div className="space-y-3 flex-1">
                    <p className="text-3xl text-blue-950 font-bold ">Grant</p>
                    <p className="text-md ">By Ron Chernow</p>
                    <p className="text-xl font-bold ">Category: <span className="font-medium">History</span></p>
                    <p className="text-md ">Quantity: 5</p>
                    <p className="text-xl font-medium ">rate rate rate rate</p>
                    <button className="btn btn-outline px-6 hover:bg-blue-950">Update</button>
                </div>
            </div>

            <div className=" flex items-center gap-2 lg:gap-6 shadow-lg rounded-lg">
                <div className="w-2/4 ">
                    <img className="rounded-lg" src="https://i.ibb.co/q5t6ng5/grant.png" alt="" />
                </div>
                <div className="space-y-3 flex-1">
                    <p className="text-3xl text-blue-950 font-bold ">Grant</p>
                    <p className="text-md ">By Ron Chernow</p>
                    <p className="text-xl font-bold ">Category: <span className="font-medium">History</span></p>
                    <p className="text-md ">Quantity: 5</p>
                    <p className="text-xl font-medium ">rate rate rate rate</p>
                    <button className="btn btn-outline px-6 hover:bg-blue-950">Update</button>
                </div>
            </div>

        </div>
    );
};

export default AllBooks;