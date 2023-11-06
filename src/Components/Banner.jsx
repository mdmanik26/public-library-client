

const Banner = () => {
    return (
        <div className=" hero min-h-[500px] " style={{ backgroundImage: 'url(https://i.ibb.co/17jCB5C/banner-bg.png)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="p-3 max-w-[1440px] flex gap-3 lg:gap-20 flex-col lg:flex-row items-center justify-between text-neutral-content">

                <div className="max-w-md text-center lg:text-left">
                    <h1 className="mb-5 text-6xl font-bold">Read Books</h1>
                    <p className="mb-5 font-medium">Increase the light of your knowledge and spread that light among people. Be remembered in people's minds for a lifetime.</p>
                    <button className="border-2 rounded-lg hover:bg-blue-950 py-2 px-4 bg-transparent text-white">Contact Us</button>
                </div>

                <div className="w-full">
                    <img src="https://i.ibb.co/Y8qhm0S/banner7.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;