import { PayloadAction, Slice, SliceCaseReducers, SliceSelectors, createSlice } from '@reduxjs/toolkit'
import { IRestaurantData } from './interfaces';

export interface IRestaurantState extends IRestaurantData {} 
export interface IRestaurantActions {
    setRestaurant: (state: IRestaurantState, action: PayloadAction<IRestaurantData>) => IRestaurantData
}

const initialState: IRestaurantState = {

    "id":7602,
    "name":"",
    "internalName":"",
    "description":null,
    "liveFlag":1,
    "demoFlag":1,
    "address1":"Rua XX-X, 1-11",
    "address2":"XXX",
    "address3":null,
    "city":"Bauru",
    "county":"BR",
    "postcode":"17012-360",
    "country":"BR",
    "timezoneOffset":"-03:00",
    "locale":"pt-BR",
    "timeZone":"America/Sao_Paulo",
    "webSettings":{
       "id":5854,
       "venueId":7602,
       "bannerImage":"https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png",
       "backgroundColour":"#ffffff",
       "primaryColour":"#4f372f",
       "primaryColourHover":"#4f372f",
       "navBackgroundColour":"#4f372f"
    },
    "ccy":"BRL",
    "ccySymbol":"R$",
    "currency":"R$"
 
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action: PayloadAction<IRestaurantState>) => {
            return action.payload
        }
    }
})

export const {setRestaurant} = restaurantSlice.actions

export default restaurantSlice.reducer