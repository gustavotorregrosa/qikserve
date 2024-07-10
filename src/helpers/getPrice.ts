import { Item } from "@/store/menu/interfaces"

export const price = (item: Item) => {

    if(item.price){
        return item.price.toFixed(2)
    }

    if(item.modifiers && item.modifiers[0].items && item.modifiers[0].items[0].price) {
        return item.modifiers[0].items[0].price.toFixed(2)
    }

    return Number(0).toFixed(2)


}
