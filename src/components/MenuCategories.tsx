export const MenuCategories = () => {

    return <div className="flex flex-row">
        <div className="mr-5 md:mr-7 border-b-4 border-[#4F372F]">
            <div className="border-[#4F372F] border-2 p-0.5 rounded-full">
                <div className="w-[4em] h-[4em] md:w-[6em] md:h-[6em] rounded-full bg-center bg-cover cursor-pointer" style={{
                    backgroundImage: `url('/images/temp/burger.jpg')`,
                }}></div>
            </div>
            <p className="text-center mt-5 text-base font-semibold">Burgers</p>
        </div>

        <div className="mr-5 md:mr-7">
            <div className="p-0.5 rounded-full">
                <div className="w-[4em] h-[4em] md:w-[6em] md:h-[6em] rounded-full bg-center bg-cover cursor-pointer" style={{
                    backgroundImage: `url('/images/temp/drink.png')`,
                }}></div>
            </div>
            <p className="text-center mt-5 text-base">Drinks</p>
        </div>

        <div className="mr-5 md:mr-7">
            <div className=" p-0.5 rounded-full border-0">
                <div className="w-[4em] h-[4em] md:w-[6em] md:h-[6em] rounded-full bg-center bg-cover cursor-pointer" style={{
                    backgroundImage: `url('/images/temp/dessert.jpg')`,
                }}></div>
            </div>
            <p className="text-center mt-5 text-base">Desserts</p>
        </div>

    </div>

}