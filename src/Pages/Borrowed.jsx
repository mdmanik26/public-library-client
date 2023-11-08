import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Shared/AuthProvider";


const Borrowed = () => {
    const { user } = useContext(AuthContext)
    const [borrowedBooks, setBorrowedBooks] = useState([])
    console.log(borrowedBooks)
    useEffect(() => {
        fetch(`http://localhost:5000/borrowedBooks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBorrowedBooks(data)
            })
    }, [])

    return (
        <div className="overflow-x-auto max-w-[1440px] mx-auto px-10">
            <table className="table">

                <thead>
                    <tr>
                        <th><p>Image</p></th>
                        <th>Name/Category</th>
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
                                    <div className="font-bold">{book?.name}</div>
                                    <div className="text-sm opacity-50">{book?.category}</div>
                                </div>
                            </td>

                            <td>
                                <p>{book?.borrowedDate}</p>
                            </td>

                            <td>
                                <p>{book?.returnDate}</p>
                            </td>

                            <td>
                                <button className="btn btn-outline hover:bg-blue-900">Return</button>
                            </td>

                        </tr>)
                    }



                </tbody>

            </table>
        </div>
    );
};

export default Borrowed;