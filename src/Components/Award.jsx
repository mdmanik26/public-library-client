

const Award = () => {
    return (
        <div className="max-w-[1440px] mx-auto my-20">
            <h1 className="text-5xl text-blue-800 font-bold text-center">Award winning books of 2023</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">

                <div className="shadow-lg border-2 rounded-lg text-center lg:hover:scale-105 duration-500">
                    <img className="rounded-lg w-full" src="https://i.ibb.co/WvQWwPn/Bridge-Of-San-Luis-Rey.png" alt="" />
                    <div className="p-3 text-blue-900 font-semibold text-left">
                        <p>Name: Bridge</p>
                        <p>Author: Thornton Wilder</p>
                        <p>Category: Novel</p>
                    </div>
                    <button className="btn btn-outline mx-auto mb-3 hover:bg-blue-950">Read More</button>
                </div>

                <div className="shadow-lg border-2 rounded-lg text-center lg:hover:scale-105 duration-500">
                    <img className="rounded-lg w-full" src="https://i.ibb.co/d4bMGvr/Famished-Road.png" alt="" />
                    <div className="p-3 text-blue-900 font-semibold text-left">
                        <p>Name: Famished-Road</p>
                        <p>Author: Ben Okri</p>
                        <p>Category: Novel</p>
                    </div>
                    <button className="btn btn-outline mx-auto mb-3 hover:bg-blue-950">Read More</button>
                </div>

                <div className="shadow-lg border-2 rounded-lg text-center lg:hover:scale-105 duration-500">
                    <img className="rounded-lg w-full" src="https://i.ibb.co/0m8qFzC/Independent-People.png" alt="" />
                    <div className="p-3 text-blue-900 font-semibold text-left">
                        <p>Name: Independent-People</p>
                        <p>Author: Halldór Laxness</p>
                        <p>Category: Novel</p>
                    </div>
                    <button className="btn btn-outline mx-auto mb-3 hover:bg-blue-950">Read More</button>
                </div>

                <div className="shadow-lg border-2 rounded-lg text-center lg:hover:scale-105 duration-500">
                    <img className="rounded-lg w-full" src="https://i.ibb.co/VVBjSPm/Possessionbookjacket.png" alt="" />
                    <div className="p-3 text-blue-900 font-semibold text-left">
                        <p>Name: Possession-book-jacket</p>
                        <p>Author: A. S. Byatt</p>
                        <p>Category: Novel</p>
                    </div>
                    <button className="btn btn-outline mx-auto mb-3 hover:bg-blue-950">Read More</button>
                </div>

            </div>
        </div>
    );
};

export default Award;