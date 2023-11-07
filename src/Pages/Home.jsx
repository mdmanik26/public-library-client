import Aboutus from "../Components/Aboutus";
import Award from "../Components/Award";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";



const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <h1 className="text-center font-bold text-blue-600 text-5xl my-10">Pick your Favorite Category</h1>
            <Categories></Categories>
            <Aboutus></Aboutus>
            <Award></Award>
        </div>
    );
};

export default Home;