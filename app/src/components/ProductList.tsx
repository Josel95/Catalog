import React, { FC } from 'react'

import Table from 'react-bootstrap/Table'

import { Product } from '../entities/Product'

import { ProductItem } from './ProductItem'

export const ProductList: FC = () => {

    const products: Product[] = [
        {
            id: 1,
            name: "Televisión",
            description: "La mejor televisión del mercado",
            image: "https://via.placeholder.com/100x100png?text=product%2010",
            price: 200,
            releaseDate: new Date('2021-01-27T00:00:00'),
            isActive: true
        },
        {
            id: 2,
            name: "Radio",
            description: "La mejor Radio del mercado",
            image: "https://via.placeholder.com/100x100png?text=product%2010",
            price: 20,
            releaseDate: new Date('2021-01-27T00:00:00'),
            isActive: false
        }
    ]

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