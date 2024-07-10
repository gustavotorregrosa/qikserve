import { PayloadAction, Slice, SliceCaseReducers, SliceSelectors, createSlice } from '@reduxjs/toolkit'
import { Item } from '../menu/interfaces'


export interface IFilterState{
   sectionID: string,
   productToShow: Item | null

} 
export interface IFilterActions {
    setSectionID: (state: IFilterState, action: PayloadAction<string>) => IFilterState
}

const initialState: IFilterState = {
   sectionID: '',
   productToShow: null
   
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSectionID: (state, action: PayloadAction<string>) => {
                return {
                    ...state,
                    sectionID: action.payload
                }
        },

        setProductToShow: (state, action: PayloadAction<Item | null>) => {
            return {
                ...state,
                productToShow: action.payload
            }
        }
    }
})

export const { setSectionID, setProductToShow } = filterSlice.actions

export default filterSlice.reducer


