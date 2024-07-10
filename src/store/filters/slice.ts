import { PayloadAction, Slice, SliceCaseReducers, SliceSelectors, createSlice } from '@reduxjs/toolkit'
import { Item } from '../menu/interfaces'


export interface IFilterState{
   sectionID: string,
   productToShow: Item | null,
   searchText: string,
   showBasketModal: boolean

} 

export interface IFilterActions {
    setSectionID: (state: IFilterState, action: PayloadAction<string>) => IFilterState
}

const initialState: IFilterState = {
   sectionID: '',
   productToShow: null,
   searchText: '',
   showBasketModal: false
   
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        openBasketModal: (state) => {
            return {
                ...state,
                showBasketModal: true
            }
        },

        closeBasketModal: (state) => {
            return {
                ...state,
                showBasketModal: false
            }
        },

        setSearchText: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                searchText: action.payload
            }

        },
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

export const { setSectionID, setProductToShow, setSearchText, openBasketModal, closeBasketModal } = filterSlice.actions

export default filterSlice.reducer


