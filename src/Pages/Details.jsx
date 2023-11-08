import { useContext } from "react";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Shared/AuthProvider";
import Swal from "sweetalert2";



const Details = () => {
    const { user } = useContext(AuthContext)
    const book = useLoaderData()
    console.log(book)
    const { _id, name, category, image, rating, author, description, quantity } = book;


    const handleBorrow = e => {
        e.preventDefault()
        const form = e.target
        const borrowedDate = form.todaysDate.value
        const returnDate = form.returnDate.value
        const email = user?.email
        const displayName = user?.displayName
        

        const borrowedBook = {
            email, 
            displayName,
            borrowedDate,
            returnDate,
            _id,
            image,
            category,
            name,
        }

        fetch('http://localhost:5000/borrowedBooks',{
            method: 'POST',
            headers:{
                'content-type': 'application/json' 
            },
            body: JSON.stringify(borrowedBook)
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'You have borrowed the book successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
           
        })

    }


    return (
        <div className="max-w-[1200px] mx-auto px-2 lg:min-h-[600px] my-20">

            <div className="flex items-center justify-between gap-10 flex-col lg:flex-row">

                <div className="text-center lg:text-left min-w-[400px]">
                    <img src={image} className="w-full rounded-md" alt="" />
                </div>

                <div>
                    <p className="text-3xl text-blue-950 font-bold ">{name}</p>
                    <p className="text-md ">By {author}</p>
                    <p className="text-md font-semibold mt-2 ">Quantity: {quantity}</p>
                    <p className="text-xl font-bold mt-2">Short Description:</p>
                    <p className="text-justify">{description}</p>
                    <div className="text-xl font-bold flex items-center my-2"><span>Rating: </span> <Rating initialRating={rating}></Rating></div>
                    <div className="flex items-center gap-6 mt-4">
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="border-2 border-blue-950 rounded-lg py-2 px-4 font-semibold w-2/4 hover:bg-blue-950 hover:text-white">Borrow</button>

                        <Link to={`/read/${_id}`}><button className="border-2 border-blue-950 rounded-lg py-2 px-4 font-semibold w-full hover:bg-blue-950 hover:text-white">Read More</button></Link>
                    </div>
                </div>


            </div>






            <dialog id="my_modal_5" className=" modal modal-bottom sm:modal-middle">
               

                <div className="modal-box">

                    <p className="py-2 text-2xl font-medium text-center">Fill Up the Form</p>
                    <form onSubmit={handleBorrow} method="dialog">
                        <p className="text-xl">Todays Date:</p>
                        <input type="date" name="todaysDate" className="my-5 border border-blue-800 rounded-lg px-3 w-full py-3 focus:outline-blue-800" />

                        <p className="text-xl">Return Date:</p>
                        <input type="date" name="returnDate" className="my-5 border border-blue-800 rounded-lg px-3 w-full py-3 focus:outline-blue-800" />

                        <button className="btn w-full">Submit</button>
                    </form>
                </div>

            </dialog>








        </div>
    );
};

export default Details;