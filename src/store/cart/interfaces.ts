export interface ICartItem {
    id: string | number
    name: string
    description?: string
    price: number
    quantity: number
}

export interface ICart {
    items: ICartItem[]
    total: number
}