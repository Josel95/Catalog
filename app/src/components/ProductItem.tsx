import React, { FC, useEffect } from 'react'

import { MdCheck, MdCancel } from 'react-icons/md'

import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import { Product } from '../entities/Product'

import { useDeleteProduct } from '../hooks/useDeleteProduct'

interface Props {
    product: Product,
    onDeleted: () => void
}

export const ProductItem: FC<Props> = ({
    product,
    onDeleted
}) => {
    const { deleteProduct, loading, product: deletedProduct } = useDeleteProduct()

    const handleDeleteClick = () => {
        deleteProduct(product.id)
    }

    useEffect(() => {
        if(deletedProduct){
            onDeleted()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deletedProduct])

    return (
        <tr>
            <th>{ product.id }</th>
            <th>{ product.name }</th>
            <th>{ product.description }</th>
            <th>{ product.price }</th>
            <th>{ new Date(product.releaseDate).toDateString() }</th>
            <th>
                {
                    product.isActive
                    ? <MdCheck />
                    : <MdCancel />
                }
            </th>
            <th>
                <Button>Editar</Button>
            </th>
            <th>
                <Button variant="danger" onClick={handleDeleteClick}>
                    {
                        loading && <Spinner as="span" animation="border" size="sm"/>
                    }
                    <span>{loading ? 'Eliminando' : 'Eliminar'}</span>
                </Button>
            </th>
        </tr>
    )
}