import HomeLayout from "../Layouts/HomeLayout.jsx";

function HomePage(){
    return (
        <HomeLayout>
            <div className="pt-10 flex item-center justify-center gap-10 mx-16 h-[85vh]">
                <div className="w-1/2 space-y-6 my-20">
                    <h1 className="text-5xl font-bold">Find out best <span className="text-yellow-500">Online Courses</span></h1>
                    <p className="text-xl">We have a large library of courses taught by highly skilled and qualified faculities at a very affordable cost.</p>
                    <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">Explore Courses</button>
                    <button className="border border-yellow-500 mx-3 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">Contact Us</button>
                </div>
            </div>
        </HomeLayout>
    )
}

export default HomePage;