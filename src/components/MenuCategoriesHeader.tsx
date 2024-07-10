import { IState } from "@/store"
import { IFilterState, setSectionID } from "@/store/filters/slice"
import { IMenu, ISection } from "@/store/menu/interfaces"
import { IRestaurantState } from "@/store/restaurant/slice"
import { CSSProperties } from "react"
import { useDispatch, useSelector } from "react-redux"

export const MenuCategoriesHeader = () => {

    const restaurant = useSelector<IState, IRestaurantState>(state => state.restaurant)
    const menu = useSelector<IState, IMenu>(state => state.menu)
    const filter = useSelector<IState, IFilterState>(state => state.filter)
    
    const dispatch = useDispatch()

    const menuHeaderItem = (section: ISection) => {

        const activeStyleBorder: CSSProperties = {
            borderColor: restaurant.webSettings.primaryColour.toUpperCase()
        }

        const active = filter.sectionID == section.id.toString()

        return <div key={section.id} onClick={e => dispatch(setSectionID(section.id.toString()))} style={active ? activeStyleBorder : {} } className={`mr-5 md:mr-7  ${active ? 'border-b-4 border-['+ restaurant.webSettings.primaryColour.toUpperCase()+']' : null }`}>
                <div style={active ? activeStyleBorder : {} } className={`p-0.5 rounded-full  ${active ? 'border-['+ restaurant.webSettings.primaryColour.toUpperCase()+'] border-2' : null }`}>
                    <div className="w-[4em] h-[4em] md:w-[6em] md:h-[6em] rounded-full bg-center bg-cover cursor-pointer" style={{
                        backgroundImage: `url(${section.images[0].image})`,
                    }}></div>
                </div>
                <p className="text-center mt-5 text-base font-semibold">{section.name}</p>
            </div>

    }

    return <div className="flex flex-row"> { menu.sections.map(section => menuHeaderItem(section))}</div> 

}