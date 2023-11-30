import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";
import Partners from "../Partners";
import PopularClass from "../PopularClasses/Popularclass";
import TotalCount from "../TotalCount";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <PopularClass></PopularClass>
            <Feedback></Feedback>
            <TotalCount></TotalCount>
        </div>
    );
};

export default Home;