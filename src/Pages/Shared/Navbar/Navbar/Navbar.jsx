import { FaRegHeart, FaSearch, FaShoppingBag } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="">
            <div className="navbar bg-orange-400 h-24 flex justify-evenly md:justify-between text-white">
                <div className="">
                    <a className="btn btn-ghost normal-case text-xl md:text-4xl">Shopping</a>
                </div>
                <form className="w-96 relative">
                    <div className="relative">
                        <input type="search" name="" id="" placeholder="Type here" className="w-24 md:w-96 h-14 p-4 rounded-sm" />
                        <button className="absolute right-1 top-1/2 -translate-y-6 p-4 bg-slate-500 rounded-full">
                            <FaSearch></FaSearch>
                        </button>

                    </div>


                </form>
                <div>
                    <div className="dropdown dropdown-end flex gap-11">
                        <div>
                            <FaRegHeart></FaRegHeart>
                        </div>
                        <div>
                            <FaShoppingBag></FaShoppingBag>
                        </div>

                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;