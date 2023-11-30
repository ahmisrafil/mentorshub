import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Shared/Navbar";
import Footer from "../../pages/Home/Shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;