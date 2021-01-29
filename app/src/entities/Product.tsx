import { ServerStreamFileResponseOptionsWithError } from "http2";

export interface Product {
    id: number
    name: string
    price: number
    description: string
    image: string
    releaseDate: Date
    isActive: boolean
}