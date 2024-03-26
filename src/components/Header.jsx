import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 navbar bg-base-100 my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/listed-books">Listed Books</NavLink>
                    <NavLink to='/pages-read'>Pages to Read</NavLink>
                    <NavLink to='/team'>Our Team</NavLink>
                    <NavLink to='/contact'>Contact Us</NavLink>

                    </ul>
                </div>
                <Link to='/' className="text-xl md:text-3xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 *:mx-3 *:text-[16px] *:font-semibold">
                <NavLink className='hover:bg-[#23BE0A] hover:text-white py-2 px-4 rounded-lg' to="/">Home</NavLink>
                <NavLink className='hover:bg-[#23BE0A] hover:text-white py-2 px-4 rounded-lg' to="/listed-books">Listed Books</NavLink>
                <NavLink className='hover:bg-[#23BE0A] hover:text-white py-2 px-4 rounded-lg' to='/pages-read'>Pages to Read</NavLink>
                <NavLink className='hover:bg-[#23BE0A] hover:text-white py-2 px-4 rounded-lg' to='/team'>Our Team</NavLink>
                <NavLink className='hover:bg-[#23BE0A] hover:text-white py-2 px-4 rounded-lg' to='/contact'>Contact Us</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden md:flex">
                    <a className="btn text-lg text-white bg-[#23BE0A] hover:bg-[#40df28] me-2">Sign In</a>
                    <a className="btn text-lg text-white bg-[#59C6D2] hover:bg-[#12daf0]">Sign Up</a>
                </div>


                <div className="flex md:hidden">
                    <a className="btn btn-sm text-sm text-white bg-[#23BE0A] hover:bg-[#40df28] me-2">Sign In</a>
                    <a className="btn btn-sm text-sm  text-white bg-[#59C6D2] hover:bg-[#12daf0]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;