import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer, { IRestaurantState } from "./restaurant/slice";
import menuReducer, { IMenuState } from "./menu/slice";
import filterReducer, { IFilterState } from './filters/slice'

export interface IState {
    restaurant: IRestaurantState,
    menu: IMenuState,
    filter: IFilterState
}

export const makeStore = () => configureStore({
    reducer: {
        restaurant: restaurantReducer,
        menu: menuReducer,
        filter: filterReducer
    },
})

export type AppStore = ReturnType<typeof makeStore>