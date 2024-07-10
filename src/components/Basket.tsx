import { IState } from "@/store"
import { ICartItem } from "@/store/cart/interfaces"
import { addProductToCart, ICartState } from "@/store/cart/slice"
import { IRestaurantState } from "@/store/restaurant/slice"
import { useDispatch, useSelector } from "react-redux"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IMenu, Item } from "@/store/menu/interfaces"

export const Basket = () => {

    const cart = useSelector<IState, ICartState>(state => state.cart)
    const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)
    const menu = useSelector<IState, IMenu>(state => state.menu)

    const dispatch = useDispatch()

    const cartItemLine = (item: ICartItem) => {

        let productItem: Item
        menu.sections.map(section => {
            section.items.map(product => {
                if(product.id == item.id){
                    productItem = product
                }
            })
        })

        const _addProductToCart = (qty: number) => {
            dispatch(addProductToCart({
                id: productItem.id,
                name: productItem.name,
                price: productItem.price * qty,
                quantity: qty

            }))
            
        }

        return <>
            <div className="flex flex-row justify-between">
                <div><p className=" text-[#36231C] text-base p-4">{item.name}</p></div>
                <div><p className=" text-[#36231C] text-base p-4">{restaurant.currency} {item.price.toFixed(2)}</p></div>
            </div>
            <div className="w-1/5 flex flex-row p-4">
                <div onClick={() => _addProductToCart(-1)} style={{backgroundColor: restaurant.webSettings.navBackgroundColour}} className='rounded-full p-0 bg-white  cursor-pointer'><RemoveIcon  className="text-white" /></div>
                <p className="mx-4">{item.quantity}</p>
                <div onClick={() => _addProductToCart(1)} style={{backgroundColor: restaurant.webSettings.navBackgroundColour}} className='rounded-full p-0 bg-white  cursor-pointer'><AddIcon  className="text-white" /></div>
            </div>
        </>
    }

    return <div>
        <div><p className="bg-[#F8F9FA] text-[#36231C] p-4 font-medium font text-2xl">Basket</p></div>
        {cart.items.map(i => cartItemLine(i))}
        {!cart.items.length && <div><p className="p-4 text-base">Your cart is empty</p></div>} 

    </div>
}