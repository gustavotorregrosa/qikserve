import NavBar from "@/components/NavBar"
import { Container } from "@mui/material";
import { Banner } from "@/components/Banner";
import { SearchBar } from "@/components/SearchBar";
import { MenuCategoriesHeader } from "@/components/MenuCategoriesHeader";
import { ProductsList } from "@/components/ProductList";
import { AllergyButton } from "@/components/AllergyButton";
import { Basket } from "@/components/Basket";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store";
import { IRestaurantState, setRestaurant } from "@/store/restaurant/slice";
import { IMenuState, setMenu } from "@/store/menu/slice";
import { ShowProductModal } from "@/components/ShowProductModal";
import { BasketButton } from "@/components/BasketButton";
import { BasketModal } from "@/components/BasketModal";

interface IHomeProps {
    restaurantData: IRestaurantState
    menuData: IMenuState
}

const Home = ({restaurantData, menuData}: IHomeProps) => {

    const dispatch = useDispatch()
    dispatch(setRestaurant(restaurantData))
    dispatch(setMenu(menuData))

    const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)

    return <>
        <Head>
            <title>{restaurant.name}</title>
        </Head>
        <NavBar />
        <Banner />
        <div className=" bg-white md:bg-[#EEEEEE]">
            <Container className="p-2 ">
                <SearchBar />
                <div id="content-panel" className="flex flex-col md:flex-row p-2 md:p-10 my-4 bg-white md:bg-[#F8F9FA]">
                    <div className="w-full md:w-2/3 bg-white md:p-10 md:mx-4 md:shadow ">
                        <MenuCategoriesHeader />
                        <br/><br/>
                        <ProductsList />
                    </div>
                    <div className="w-1/3">
                        <div className="w-full bg-white md:mx-4 md:shadow hidden md:flex md:flex-col">
                            <Basket />
                        </div>
                    </div>
                </div>
            </Container>
            <ShowProductModal />
            <BasketModal />
            <AllergyButton />
            <BasketButton />
        </div>
        
    </>
} 

export async function getStaticProps() {
    const restaurantResult =  await fetch('https://corsproxy.io/?' + encodeURIComponent(process.env.NEXT_PUBLIC_RESTAURANT_DATA_API as string))
    const restaurantData: IRestaurantState = await restaurantResult.json()

    const menuResult =  await fetch('https://corsproxy.io/?' + encodeURIComponent(process.env.NEXT_PUBLIC_MENU_DATA_API as string))
    const menuData: IRestaurantState = await menuResult.json()



    return {
        props: {
            restaurantData,
            menuData
        }
    }

}

export default Home