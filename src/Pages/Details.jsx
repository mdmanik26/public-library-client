import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";


const Details = () => {

    const book = useLoaderData()
    console.log(book)
    const {_id, name, category, image, rating, author, description, quantity }= book;


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
                    <div className="text-xl font-bold flex items-center"><span>Rating: </span> <Rating initialRating={rating}></Rating></div>
                    <div className="flex items-center gap-6 mt-4">
                        <button className="border-2 border-blue-950 rounded-lg py-2 px-4 font-semibold w-2/4 hover:bg-blue-950 hover:text-white">Borrow</button>

                        <button className="border-2 border-blue-950 rounded-lg py-2 px-4 font-semibold w-2/4 hover:bg-blue-950 hover:text-white">Read More</button>
                    </div>
                </div>


            </div>






        </div>
    );
};

export default Details;