import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Shared/AuthProvider";
import Swal from "sweetalert2";


const Borrowed = () => {
    const { user } = useContext(AuthContext)
    const [borrowedBooks, setBorrowedBooks] = useState([])

    useEffect(() => {
        fetch(`https://public-library-server.vercel.app/borrowedBooks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBorrowedBooks(data)
            })
    }, [])


    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to return the book!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I want!'
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://public-library-server.vercel.app/borrowedBooks/${_id}`, {
                        method: 'delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Returned!',
                                    'You have returned the book successfully.',
                                    'success'
                                )
                            }

                            const remaining = borrowedBooks.filter(cartItem => cartItem._id !== _id)
                            setBorrowedBooks(remaining)
                        })

                }
            })

    }


    return (
        <div className="overflow-x-auto max-w-[1440px] mx-auto px-10">
            <table className="table">

                <thead>
                    <tr>
                        <th><p>Image</p></th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Borrowed Date</th>
                        <th>Return Date</th>
                        <th>Return</th>
                    </tr>
                </thead>

                <tbody className="">



                    {
                        borrowedBooks?.map(book => <tr key={book._id}>

                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-24 h-24">
                                        <img src={book?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>
                                    <p className="">{book?.name}</p>

                                </div>
                            </td>
                            <td>
                                <p className="">{book?.category}</p>
                            </td>

                            <td>
                                <p>{book?.borrowedDate}</p>
                            </td>

                            <td>
                                <p>{book?.returnDate}</p>
                            </td>

                            <td>
                                <button onClick={() => handleDelete(book?._id)} className="btn btn-outline hover:bg-blue-900">Return</button>
                            </td>

                        </tr>)
                    }



                </tbody>

            </table>
        </div>
    );
};

export default Borrowed;