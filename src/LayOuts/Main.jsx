import { Outlet } from 'react-router-dom';
// import UpNavBar from '../Pages/Shared/Navbar/UpNavBar/UpNavBar';
import Navbar from '../Pages/Shared/Navbar/Navbar/Navbar';
import SubNavBar from '../Pages/Shared/Navbar/SubNavBar/SubNavBar';

const Main = () => {
    return (
        <div>
            {/* <UpNavBar></UpNavBar> */}
            <Navbar></Navbar>
            <SubNavBar></SubNavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;