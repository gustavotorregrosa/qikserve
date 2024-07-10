import { IState } from "@/store"
import { IRestaurantState } from "@/store/restaurant/slice"
import { useSelector } from "react-redux"

export const Banner = () => {

    const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)

    return <div className="h-[150px] w-full bg-center bg-cover bg-no-repeat" style={{
         backgroundImage: `url('${restaurant.webSettings.bannerImage}')`
    }}>

    </div>
}

