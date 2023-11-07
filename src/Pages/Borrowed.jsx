

const Borrowed = () => {
    return (
        <div className="overflow-x-auto max-w-[1440px] mx-auto px-10">
            <table className="table">

                <tbody className="">

                    <tr>

                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-24 h-24">
                                    <img src="https://i.ibb.co/q5t6ng5/grant.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>

                        <td>
                            <div>
                                <div className="font-bold">Name</div>
                                <div className="text-sm opacity-50">Category</div>
                            </div>
                        </td>

                        <td>
                            <p>Borrowed Date</p>
                        </td>

                        <td>
                            <p>Return Date</p>
                        </td>

                        <td>
                            <button className="btn btn-outline hover:bg-blue-900">Return</button>
                        </td>

                    </tr>

                </tbody>

            </table>
        </div>
    );
};

export default Borrowed;