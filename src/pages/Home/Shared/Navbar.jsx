import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png'

const Navbar = () => {


    const navLinks = <>
        <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2 ">
            <NavLink to='/'>Home</NavLink>
        </li>
        <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2">
            <NavLink to='/'>All Classes</NavLink>
        </li>

        <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2">
            <NavLink to='/'>Teach On MentorsHub</NavLink>
        </li>

        
        {
            // !user &&
            <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2">
            <NavLink to='/'>Login</NavLink>
        </li>
        }
    </>
    return (
        <div className="navbar flex flex-col md:flex-row bg-[#aca7a7]  px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-grey-700 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-0 items-center">
                    <img className="h-10 p-0" src={logo} alt="logo" />
                    <h3 className="text-[#9c1313] font-bold text-4xl ">Mentors<span className="text-white">Hub</span></h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {navLinks}
                </ul>
            </div>

            
        </div>
    );
};

export default Navbar;