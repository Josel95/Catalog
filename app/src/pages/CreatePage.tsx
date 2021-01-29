import React, { FC, useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Product } from '../entities/Product'

import { useCreateProduct } from '../hooks/useCreateProduct'

import { ProductForm } from '../components/ProductForm'

export const CreatePage: FC = () => {
    const history = useHistory()

    const { createProduct, loading, product } = useCreateProduct()

    const handleSubmit = (product: Product) => {
        createProduct(product)
    }

    useEffect(() => {
        if(product){
            history.push("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product])

    return (
        <div>
            <h1 className="mb-4">Crear un producto</h1>

            <Row>
                <Col sm={12} className="d-flex justify-content-center align-items-center">
                    <ProductForm submitButtonText="Crear producto" onSubmit={handleSubmit} loading={loading}/>
                </Col>
            </Row>
        </div>
    )
}