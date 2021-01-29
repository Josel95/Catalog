import React, { FC } from 'react'

import Table from 'react-bootstrap/Table'

import { Product } from '../entities/Product'

import { ProductItem } from './ProductItem'

interface Props {
    products: Product[]
}

export const ProductList: FC<Props> = ({
    products
}) => {

    return (
        <Table bordered hover>
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Descripción
                    </th>
                    <th>
                        Precio
                    </th>
                    <th>
                        Fecha de lanzamiento
                    </th>
                    <th>
                        Activo
                    </th>
                    <th colSpan={2}>
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product: Product) => <ProductItem key={product.id} product={product}/>)
                }
            </tbody>
        </Table>
    )
}