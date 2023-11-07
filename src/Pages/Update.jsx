

const Update = () => {
    return (
        <div className='px-2'>
            <div className=" rounded-lg border-2 border-blue-950 py-3 md:py-6 md:my-20 px-4 max-w-[1000px] mx-auto">
                <h1 className="text-5xl text-center font-bold">Update Book</h1>
                <form>
                    <div className=' md:flex justify-between items-center gap-4 mt-4 space-y-4 md:space-y-0'>
                        <div className='flex-1'>
                            <p className="text-lg font-semibold text-blue-950 text-left">Image</p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="image" required placeholder="Image URL" />
                        </div>
                        <div className='flex-1'>
                            <p className="text-lg font-semibold text-blue-950 text-left">Name</p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white  bg-blue-950' type="text" name="name" required placeholder="Name" />

                        </div>
                    </div>
                    <div className=' md:flex justify-between items-center gap-4 mt-4 space-y-4 md:space-y-0'>

                        <div className='flex-1'>
                            <p className="text-lg font-semibold text-blue-950 text-left">Author Name
                            </p>
                            <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="type" required placeholder="Author Name
" />
                        </div>

                        <div className='flex-1'>
                            <p className="text-lg font-semibold text-blue-950 text-left">Category</p>
                            

                            <select className="py-3 bg-blue-950 text-white w-full text-center">

                                <option>History</option>
                                <option>Drama</option>
                                <option>Novel</option>
                                <option>Thriller</option>
                            </select>

                        </div>

                        </div>

                        <div className=' md:flex justify-between  gap-4 mt-4 space-y-4 md:space-y-0'>

                            <div className='flex-1'>
                                <p className="text-lg font-semibold text-blue-950 text-left">Rating</p>
                                <input className='text-white focus:text-black focus:border-l-8 focus:border-blue-950 focus:bg-white focus:rounded-r-lg w-full mb-3 px-3 py-3 outline-0 border border-white bg-blue-950' type="text" name="rating" required placeholder="Rating" />
                            </div>

                            <div className='flex-1'>

                                <input className='hover:cursor-pointer w-full px-3 py-3 md:mt-7 outline-0  hover:bg-blue-950 border-2 border-blue-950  rounded-lg text-black hover:text-white font-semibold' type="submit" name="" value="Update Book" />

                            </div>

                        </div>



                </form>




            </div>





        </div>
    );
};

export default Update;