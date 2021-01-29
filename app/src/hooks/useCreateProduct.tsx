import { useState } from 'react'

import axios from 'axios'

import { Product } from '../entities/Product'
import { Response } from '../entities/Response'

// TODO: Move to a better place
const URL = 'https://localhost:44336/api/product'

export const useCreateProduct = () => {
    const [ product, setProduct ] = useState<Product>();

    const [ loading, setLoading ] = useState<boolean>(false);

    const createProduct = (product: Product) => {
        setLoading(true)

        axios.post(`${URL}`, product)
        .then(({data : response} : { data: Response }) => {
            if(response.data instanceof Array){
                return
            }
            setProduct(response.data)
        })
        .finally(() => {
            setLoading(false)
        })
    }


    return { createProduct, product, loading }
}