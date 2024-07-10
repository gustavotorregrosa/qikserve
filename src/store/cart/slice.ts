import { PayloadAction, Slice, SliceCaseReducers, SliceSelectors, createSlice } from '@reduxjs/toolkit'
import { ICart, ICartItem } from './interfaces';

export interface ICartState extends ICart{}

export interface IFilterActions {
    addProductToCart: (state: ICartState, action: PayloadAction<ICartItem>) => ICartItem
}

const initialState: ICartState = {
    items: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<ICartItem>) => {
 
            let items: ICartItem[] = JSON.parse(JSON.stringify(state.items))
            const currentItem = items.find(i => i.id == action.payload.id)
            const currentItemIndex = items.findIndex(i => i.id == action.payload.id)

            let newItem: ICartItem
            if(currentItem){
                newItem = {
                    ...currentItem,
                    quantity: currentItem.quantity + action.payload.quantity,
                    price: currentItem.price +  action.payload.price
                }

                if(newItem.quantity > 0) {
                    items[currentItemIndex] = newItem 
                }else {
                    items.splice(currentItemIndex, 1)
                }
           
            }else{

                items.push(action.payload)
            }


            return {
                ...state,
                items
            }
        },
    }
})

export const { addProductToCart} = cartSlice.actions

export default cartSlice.reducer
