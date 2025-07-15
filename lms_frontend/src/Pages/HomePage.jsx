import HomeLayout from "../Layouts/HomeLayout.jsx";

function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 flex flex-col lg:flex-row items-center justify-center gap-10 px-4 md:px-10 lg:mx-16 h-auto min-h-[85vh]">
                <div className="w-full lg:w-1/2 space-y-6 my-10 lg:my-20 text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Find our best <span className="text-yellow-500">Online Courses</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                            Explore Courses
                        </button>
                        <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 hover:text-white transition-all ease-in-out duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
                <img src="Images\homePageMainImage.png" alt="" />
            </div>
        </HomeLayout>
    );
}

export default HomePage;
