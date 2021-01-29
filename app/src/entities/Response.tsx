import { Product } from './Product'

export interface Response {
    message: string,
    errors: object,
    data: Product | Product[]
}