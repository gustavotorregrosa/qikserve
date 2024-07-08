import NavBar from "@/components/NavBar"
import { Container } from "@mui/material";
import { Banner } from "@/components/Banner";
import { SearchBar } from "@/components/SearchBar";
import { MenuCategories } from "@/components/MenuCategories";
import { ProductsList } from "@/components/ProductList";
import { AllergyButton } from "@/components/AllergyButton";
import { Basket } from "@/components/Basket";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store";
import { IRestaurantState, setRestaurant } from "@/store/restaurant/slice";
import { useEffect } from "react";

const Home = () => {

    const dispatch = useDispatch()
    const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)

    useEffect(() => {
        loadRestaurantData()
    }, [])

    const loadRestaurantData = async () => {
       const result =  await fetch('https://corsproxy.io/?' + encodeURIComponent(process.env.NEXT_PUBLIC_RESTAURANT_DATA_API as string))
       const data: IRestaurantState = await result.json()
       dispatch(setRestaurant(data))
    } 

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
                        <MenuCategories />
                        <br/><br/>
                        <ProductsList />
                    </div>
                    <div className="w-1/3 bg-white md:mx-4 md:shadow hidden md:flex md:flex-col h-[120px]">
                        <Basket />
                    </div>
                </div>
               
            </Container>
            <AllergyButton />
        </div>
        
    </>
} 

export default Home