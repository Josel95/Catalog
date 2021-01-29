import { useState } from 'react'

import axios from 'axios'

import { Product } from '../entities/Product'
import { Response } from '../entities/Response'

// TODO: Move to a better place
const URL = 'https://localhost:44336/api/product'

export const useDeleteProduct = () => {
    const [ product, setProduct ] = useState<Product>();

    const [ loading, setLoading ] = useState<boolean>(false);

    const deleteProduct = (id: number) => {
        setLoading(true)

        axios.delete(`${URL}/${id}`)
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


    return { deleteProduct, product, loading }
}