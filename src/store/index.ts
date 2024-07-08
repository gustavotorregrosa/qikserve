import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer, { IRestaurantState } from "./restaurant/slice";

export interface IState {
    restaurant: IRestaurantState
}

export const makeStore = () => configureStore({
    reducer: {
        restaurant: restaurantReducer
    },
})

export type AppStore = ReturnType<typeof makeStore>