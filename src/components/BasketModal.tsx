import { Box, Button, Modal, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store";
import { closeBasketModal, IFilterState, setProductToShow } from "@/store/filters/slice";
import { IRestaurantState } from "@/store/restaurant/slice";
import { price } from "@/helpers/getPrice";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { addProductToCart } from "@/store/cart/slice";
import { ICartItem } from "@/store/cart/interfaces";
import { Basket } from "./Basket";


export const BasketModal = () => {

    const filter = useSelector<IState, IFilterState>(state => state.filter)
    const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)
    const [itemCount, setItemCount] = useState<number>(1)

    useEffect(() => {
        setItemCount(1)
    }, [filter.productToShow])

    const dispatch = useDispatch()

    const image = filter.productToShow?.images ? filter.productToShow.images[0].image : '/images/default-image.jpeg'

    const _addProductToCart = () => {

        if(!filter.productToShow){
            return
        }

        const product: ICartItem = {
            id: filter.productToShow.id,
            name: filter.productToShow.name,
            description: filter.productToShow.description || undefined,
            quantity: itemCount,
            price: (itemCount * Number(price(filter.productToShow)))
        }

        dispatch(addProductToCart(product))
        dispatch(setProductToShow(null))

    }

    return <Modal className="flex justify-center" open={filter.showBasketModal} onClose={() => dispatch(closeBasketModal())} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className='w-full bg-white relative '>
                <div onClick={() => dispatch(closeBasketModal())} className='rounded-full p-2 absolute bg-white right-4 top-4 cursor-pointer'><CloseIcon className="text-black" /></div>
                <Basket />
            </Box>
        </Modal>
}