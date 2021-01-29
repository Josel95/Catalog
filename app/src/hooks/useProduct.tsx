import { useState } from 'react'

import axios from 'axios'

import { Product } from '../entities/Product'
import { Response } from '../entities/Response'

// TODO: Move to a better place
const URL = 'https://localhost:44336/api/product'

export const useProduct = () => {
    const [ product, setProduct ] = useState<Product>();

    const [ loading, setLoading ] = useState<boolean>(false);

    const getProduct = (id: number) => {
        setLoading(true)

        axios.get(`${URL}/${id}`)
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

    return {getProduct, product, loading }
}