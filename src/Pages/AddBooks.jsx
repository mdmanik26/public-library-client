import Swal from "sweetalert2";


const AddBooks = () => {

    const addBook = (e) => {

        e.preventDefault();
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const quantity = form.quantity.value
        const author = form.author.value
        const category = form.category.value
        const description = form.description.value
        const rating = form.rating.value
        const content = form.content.value

        const newBook = { image, name, quantity, author, category, description, rating, content }



        fetch('https://public-library-server.vercel.app/addBooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Book added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                form.reset()
            })
    }


    return (
        <div className='px-2'>
            <div className=" rounded-lg border-2 border-blue-950 py-3 md:py-6 md:my-20 px-4 max-w-[1000px] mx-auto">
                <h1 className="text-5xl text-center font-bold">Add Book</h1>
                <form onSubmit={addBook}>
                    <div className=' md:flex justify-between items-center gap-4 mt-4 space-y-4 md:space-y-0'>
                        <div className='flex-1'>
                            <p className="text-lg font-semibold  text-left">Image</p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="image" required placeholder="Image URL" />
                        </div>
                        <div className='flex-1'>
                            <p className="text-lg font-semibold  text-left">Name</p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white  bg-blue-950' type="text" name="name" required placeholder="Name" />

                        </div>
                    </div>
                    <div className=' md:flex justify-between items-center gap-4 mt-4 space-y-4 md:space-y-0'>
                        <div className='flex-1'>
                            <p className="text-lg font-semibold  text-left">Quantity</p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="quantity" required placeholder="Quantity" />
                        </div>
                        <div className='flex-1'>
                            <p className="text-lg font-semibold  text-left">Author Name
                            </p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="author" required placeholder="Author Name
" />
                        </div>

                    </div>
                    <div className=' md:flex justify-between items-center gap-4 mt-4 space-y-4 md:space-y-0'>

                        <div className='flex-1'>
                            <p className="text-lg font-semibold  text-left">Category</p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="category" required placeholder="Category" />
                        </div>

                        <div className='flex-1'>
                            <p className="text-lg font-semibold  text-left">Short description</p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="description" required placeholder="Short description" />

                        </div>

                    </div>
                    <div className=' md:flex justify-between  gap-4 mt-4 space-y-4 md:space-y-0'>

                        <div className='flex-1'>
                            <p className="text-lg font-semibold  text-left">Rating</p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="rating" required placeholder="Rating" />
                        </div>




                        <div className='flex-1'>
                            <p className="text-lg font-semibold  text-left">Books Content</p>
                            <input className='text-white  focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="content" required placeholder="Content" />
                        </div>



                    </div>

                    <div>
                        <div>

                            <input className=' bg-white hover:cursor-pointer w-full px-3 py-3 md:mt-7 outline-0  hover:bg-blue-950 border-2 border-blue-950  rounded-lg text-black hover:text-white font-semibold' type="submit" name="" value="Add Book" />

                        </div>
                    </div>

                </form>




            </div>





        </div>
    );
};

export default AddBooks;