import {AiFillCloseCircle} from "react-icons/ai";
import {FiMenu} from "react-icons/fi";

import Footer from "../components/Footer";

function HomeLayout({children}){

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }
    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 0;
    }
    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit">
                <input type="checkbox" className="drawer-toggle" id="my-drawer"  />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu onClick={changeWidth} size={"32px"} className="text-3xl text-primary m-4" />
                    </label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
                        <li className="w-fit absolute right-2 z-50"><button onClick={hideDrawer}> <AiFillCloseCircle size={"24px"} /> </button></li>
                        <li><a href="/about" className="text-xl">Home</a></li>
                        <li><a href="/services" className="text-xl">Courses</a></li>
                        <li><a href="/services" className="text-xl">About Us</a></li>
                        <li><a href="/contact" className="text-xl">Contact</a></li>
                    </ul>
                </div>
            </div>

            {children}

            <Footer />
        </div>
    );
}

export default HomeLayout;