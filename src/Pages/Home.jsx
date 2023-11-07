import Banner from "../Components/Banner";
import Books from "../Components/Books";
import Details from "./Details";
import Update from "./Update";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Books></Books>
            <Details></Details>
            <Update></Update>
        </div>
    );
};

export default Home;