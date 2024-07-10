import { IState } from "@/store"
import { ICartState } from "@/store/cart/slice"
import { openBasketModal } from "@/store/filters/slice"
import { IRestaurantState } from "@/store/restaurant/slice"
import { useDispatch, useSelector } from "react-redux"

export const BasketButton = () => {
    
    const dispatch = useDispatch()

    const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)
    const cart = useSelector<IState, ICartState>(state => state.cart)

    return <div className="p-4 w-full bg-[#EEEEEE] md:hidden justify-center flex">
        <button onClick={() => dispatch(openBasketModal())} style={{backgroundColor: restaurant.webSettings.navBackgroundColour}} className="p-4 w-full px-2 rounded-full text-white">Your basket { !!cart.items.length && <span> - {cart.items.length} items</span>}</button>
    </div>
}
