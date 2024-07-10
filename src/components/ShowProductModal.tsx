import { Box, Button, Modal, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store";
import { IFilterState, setProductToShow } from "@/store/filters/slice";
import { IRestaurantState } from "@/store/restaurant/slice";
import { price } from "@/helpers/getPrice";


export const ShowProductModal = () => {

    const filter = useSelector<IState, IFilterState>(state => state.filter)
    const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)

    const dispatch = useDispatch()

    const image = filter.productToShow?.images ? filter.productToShow.images[0].image : '/images/default-image.jpeg'

    return <Modal className="flex justify-center" open={!!filter.productToShow} onClose={() => dispatch(setProductToShow(null))} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box className='max-w-[500px] bg-white relative max-h-[900px]'>
                <div onClick={() => dispatch(setProductToShow(null))} className='rounded-full p-2 absolute bg-white right-4 top-4 cursor-pointer'><CloseIcon className="text-black" /></div>

                <div className="w-full h-[25em] bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})`}}></div>
                <div className="p-4">
                    <Typography className="text-2xl font-bold" id="modal-modal-title" variant="h6" component="h2">
                        {filter.productToShow?.name}
                    </Typography>
                    <Typography className="text-xs min-w-[400px]" id="modal-modal-description" sx={{ mt: 2 }}>
                        {filter.productToShow?.description}
                    </Typography>
                    <Button style={{  backgroundImage: `url('${restaurant.webSettings.bannerImage}')`}} className="rounded-full w-full mt-4 text-white">Add to Order - {restaurant.currency} {filter.productToShow ? price(filter.productToShow) : null} </Button>
                </div>
               
            </Box>
        </Modal>
}