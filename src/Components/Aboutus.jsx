

const Aboutus = () => {
    return (
        <div className="hero py-4 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/kq4CsNf/about1-1.png"  />
                <div className="">
                    <h1 className="text-5xl font-bold text-blue-900">About US</h1>
                    <p className="py-6 text-justify font-medium text-slate-700">We have many facilities here. Here you will find books for reading from children to the very old. We have many types of books including Drama, Novel, Thriller, Horror, Comedy, Cartoon, Poetry, History.

                        You can read the book subject to conditions from us. <br />
                        How to borrow books from here: <br />
                        1. You can borrow any one book for a specific period of time. <br />
                        2. After reading the book you have to return the book within the time.
                    </p>
                    <button className="btn btn-outline hover:bg-blue-950">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;