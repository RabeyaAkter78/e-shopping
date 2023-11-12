import "./SubNavBar.css"

const SubNavBar = () => {
    return (
        <div>
            <div className="navbar bg-white  shadow-sm shadow-slate-600 flex ">
                <div className="navbar-end w-1/5 border-r border-gray-400 px-6">

                </div>
                <div className="navbar-start w-1/5 border-r border-gray-400 px-6">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">All Category</a>
                    {/* <hr className="vertical-line bg-black "></hr> */}
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end w-1/2 border-r border-gray-400 px-6">
                    <a className="btn">Buttonnnnnn</a>
                </div>

                <div className="navbar-end w-1/4 border-r border-gray-400 px-6">
                    <p className="text-lg font-bold text-orange-500 text-center">WINTER OFFER <br /><span className="text-black font-normal text-sm " >Get 23% off!</span></p>
                </div>
                <div className="navbar-end w-1/5 border-r border-gray-400 px-6">

                </div>
            </div>
        </div>
    );
};

export default SubNavBar;