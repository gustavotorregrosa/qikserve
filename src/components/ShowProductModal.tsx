import { Box, Button, Modal, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store";
import { IFilterState, setProductToShow } from "@/store/filters/slice";
import { IRestaurantState } from "@/store/restaurant/slice";
import { price } from "@/helpers/getPrice";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { addProductToCart } from "@/store/cart/slice";
import { ICartItem } from "@/store/cart/interfaces";


export const ShowProductModal = () => {

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

    return <Modal className="flex justify-center" open={!!filter.productToShow} onClose={() => dispatch(setProductToShow(null))} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className='max-w-[500px] bg-white relative max-h-[900px]'>
                <div onClick={() => dispatch(setProductToShow(null))} className='rounded-full p-2 absolute bg-white right-4 top-4 cursor-pointer'><CloseIcon className="text-black" /></div>

                <div className="w-full h-[25em] bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})`}}></div>
                <div className="p-4">
                    <Typography className="text-2xl font-bold" id="modal-modal-title" variant="h6" component="h2">
                        {filter.productToShow?.name}
                    </Typography>
                    <Typography className="text-xs min-w-[350px]" id="modal-modal-description" sx={{ mt: 2 }}>
                        {filter.productToShow?.description}
                    </Typography>
                    <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-between w-1/3">
                            <div onClick={() => setItemCount(count => count > 1 ? --count : count)}  style={{backgroundColor: restaurant.webSettings.navBackgroundColour}} className='rounded-full p-0 bg-white right-4 top-4 cursor-pointer'><RemoveIcon className="text-white" /></div>
                                <div>{itemCount}</div>
                            <div onClick={() => setItemCount(count => ++count)} style={{backgroundColor: restaurant.webSettings.navBackgroundColour}} className='rounded-full p-0 bg-white right-4 top-4 cursor-pointer'><AddIcon className="text-white" /></div>
                        </div>
                    </div>
                    <Button onClick={() => _addProductToCart()} sx={{backgroundColor: restaurant.webSettings.navBackgroundColour, color: 'white'}} className="rounded-full w-full mt-4">Add to Order - {restaurant.currency} {filter.productToShow ? (itemCount * Number(price(filter.productToShow))).toFixed(2) : null} </Button>
                </div>
               
            </Box>
        </Modal>
}