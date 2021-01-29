import { useState } from 'react'

import axios from 'axios'

import { Product } from '../entities/Product'
import { Response } from '../entities/Response'

// TODO: Move to a better place
const URL = 'https://localhost:44336/api/product'

export const useProducts = () => {
    const [ products, setProducts ] = useState<Product[]>();

    const [ loading, setLoading ] = useState<boolean>(false);

    const getProducts = () => {
        setLoading(true)
        axios.get(URL)
        .then(({data : response} : { data: Response }) => {
            if(response.data instanceof Array){
                setProducts(response.data)
            }
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return {getProducts, products, loading }
}