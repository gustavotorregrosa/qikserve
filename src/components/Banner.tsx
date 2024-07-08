export const Banner = () => {
    return <div className="h-[150px] w-full">

        <div className="flex justify-center">
            <div className="z-1 w-[50%] h-[150px] bg-center bg-cover opacity-50 flex justify-center p-[10px]" style={{
                backgroundImage: `url('/images/banner-image.jpg')`,
            }}><img src='/images/logo.png' className="h-[130px]"/></div>
        </div>
        <div className="z-2 absolute -mt-[150px] w-full h-[150px]" style={{
            background: `linear-gradient(90deg, rgba(54, 35, 28, 1) 0%,  rgba(54, 35, 28, 1) 25%,  rgba(54, 35, 28, 0) 50%,  rgba(54, 35, 28, 1) 75%,  rgba(54, 35, 28, 1) 100%`,
        }}></div>    

    </div>
}

