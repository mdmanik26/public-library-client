import { useEffect } from "react";
import { useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";



const AllBooks = () => {
    const [books, setBooks] = useState([])
    console.log(books)
    useEffect(() => {
        fetch('https://public-library-server.vercel.app/allBooks')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className=" my-20 p-4 max-w-[1200px] mx-auto grid grid-cols lg:grid-cols-2 gap-6">

            {
                books?.map(book => <div key={book._id} className=" flex items-center gap-2 lg:gap-6 shadow-lg rounded-lg ">
                    <div className="w-2/4">
                        <img className="rounded-lg" src={book?.image} alt="" />
                    </div>
                    <div className="space-y-3 flex-1">
                        <p className="text-3xl text-slate-400 font-bold ">{book?.name}</p>
                        <p className="text-md ">By {book?.author}</p>
                        <p className="text-xl font-bold ">Category: <span className="font-medium">{book?.category}</span></p>
                        <p className="text-md ">Quantity: {book?.quantity}</p>
                        <p className="text-xl font-medium "><Rating className="text-red-500 font-lg" initialRating={book?.rating}></Rating> </p>
                        <Link to={`/update/${book._id}`}><button className="btn btn-outline my-3 px-6 hover:bg-blue-950">Update</button></Link>
                    </div>
                </div>)
            }






        </div>
    );
};

export default AllBooks;