import Banner from "../Banner/Banner";
import BeInstructor from "../BeInstructor";
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
            <BeInstructor></BeInstructor>
        </div>
    );
};

export default Home;