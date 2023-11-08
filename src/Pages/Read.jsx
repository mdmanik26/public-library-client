import { useLoaderData } from "react-router-dom";


const Read = () => {

    const data = useLoaderData()
    console.log(data)

    const {  name, category, author , content} = data;


    return (
        <div className="">
            <div className="max-w-[1200px] mx-auto border rounded-lg p-10 my-10">
                <p className="text-xl font-semibold my-2">Name: {name}</p>
                <p className="text-xl font-semibold my-2">Author: {author}</p>
                <p className="text-xl font-semibold my-2">Category: {category}</p>
                <p className="p-10 text-xl text-justify">{content}</p>
            </div>
        </div>
    );
};

export default Read;