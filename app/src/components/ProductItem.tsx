import React, { FC } from 'react'

import { MdCheck, MdCancel } from 'react-icons/md'

import Button from 'react-bootstrap/Button'

import { Product } from '../entities/Product'

interface Props {
    product: Product
}

export const ProductItem: FC<Props> = ({
    product
}) => {

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
                <Button variant="danger">Eliminar</Button>
            </th>
        </tr>
    )
}