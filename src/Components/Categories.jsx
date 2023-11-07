import { useEffect, useState } from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Categories = () => {

    const [categories, setCategories] = useState([])
    console.log(categories);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])

    return (
        <div className="my-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto">

            {
                categories?.map(category => <div className="rounded-lg shadow-lg border-blue-950 " key={category._id}>

                    <img className="rounded-lg w-full" src={category?.image} alt="" />
                    <div className="flex justify-between items-center px-3 py-4 text-blue-700">
                        <p className="text-2xl font-bold">{category?.name}</p>
                        <Link to={'/login'}><BiSolidRightArrowAlt className="text-5xl font-bold hover:scale-125 duration-500"></BiSolidRightArrowAlt></Link>
                    </div>


                </div>)
            }

        </div>
    );
};

export default Categories;