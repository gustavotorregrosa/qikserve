import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store";
import { IRestaurantState } from "@/store/restaurant/slice";
import { IMenu, Item } from "@/store/menu/interfaces";
import { IFilterState, setProductToShow } from "@/store/filters/slice";
import { stringLimit } from "@/helpers/stringLimit";
import { price } from "@/helpers/getPrice";

export const ProductsList = () => {

    const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)
    const menu = useSelector<IState, IMenu>(state => state.menu)
    const filter = useSelector<IState, IFilterState>(state => state.filter)

    const selectedMenu = () => menu.sections.find(section => section.id.toString() == filter.sectionID)

    const dispatch = useDispatch()

    const menuItem = (item: Item) => {

        const image = item.images ? item.images[0].image : '/images/default-image.jpeg'

        return <div onClick={() => dispatch(setProductToShow(item))} className="flex mb-4 cursor-pointer">
                    <div className="w-2/3 md:w-3/4">
                        <p className="font-medium">
                            {/* <span style={{backgroundColor: restaurant.webSettings.navBackgroundColour}}  className=" text-white text-sm px-2 mr-1 rounded-sm">2</span> */}
                            {item.name}
                        </p>
                        <p>{item.description && stringLimit(item.description)}</p>
                        <p className="font-medium">{restaurant.currency} {price(item)}</p>
                    </div>
                    <div style={{
                            backgroundImage: `url(${image})`,
                        }} className="w-1/3  md:w-1/4 h-[90px] bg-center bg-cover rounded-md">
                    </div>
                </div>
    }

    if(!selectedMenu()) {
        return <></>
    }
    
    return <>
        <Accordion className="w-full" sx={{ border: 'none', boxShadow: 'none'}}>
            <AccordionSummary className="p-0" expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                <p className="font-medium text-2xl">{selectedMenu()?.name}</p>
            </AccordionSummary>
            <AccordionDetails className="p-0">
                {selectedMenu()?.items.map(item => menuItem(item))}
            </AccordionDetails>
        </Accordion>
    </>

}
