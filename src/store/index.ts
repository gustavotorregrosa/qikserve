import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer, { IRestaurantState } from "./restaurant/slice";
import menuReducer, { IMenuState } from "./menu/slice";
import filterReducer, { IFilterState } from './filters/slice'
import cartReducer, { ICartState } from './cart/slice'

export interface IState {
    restaurant: IRestaurantState,
    menu: IMenuState,
    filter: IFilterState
    cart: ICartState
}

export const makeStore = () => configureStore({
    reducer: {
        restaurant: restaurantReducer,
        menu: menuReducer,
        filter: filterReducer,
        cart: cartReducer
    },
})

export type AppStore = ReturnType<typeof makeStore>