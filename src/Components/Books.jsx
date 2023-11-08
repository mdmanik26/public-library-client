import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";


const Books = () => {
    const books = useLoaderData()
    console.log(books)

    return (
        <div className=" my-20 p-4 max-w-[1200px] mx-auto grid grid-cols lg:grid-cols-2 gap-6">

            {
                books?.map(book => <div key={book._id} className=" flex items-center gap-2 lg:gap-6 shadow-lg rounded-lg">
                    <div className="w-2/4">
                        <img className="rounded-lg" src={book?.image} alt="" />
                    </div>
                    <div className="space-y-3 flex-1">
                        <p className="text-3xl text-blue-950 font-bold ">{book?.name}</p>
                        <p className="text-md ">By {book?.author}</p>
                        <p className="text-xl font-bold ">Category: <span className="font-medium">{book?.category}</span></p>
                        <p className="text-xl font-medium "><Rating initialRating={book?.rating}/></p>
                        <Link to={`/book/${book._id}`}><button className="btn btn-outline hover:bg-blue-950">See Details</button></Link>
                    </div>
                </div>)
            }







        </div>
    );
};

export default Books;