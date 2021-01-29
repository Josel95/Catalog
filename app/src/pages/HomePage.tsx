import React, { FC, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import { useProducts } from '../hooks/useProducts'

import { ProductList } from '../components/ProductList'

export const HomePage: FC = () => {
    const { getProducts, products, loading } = useProducts()

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1 className="mb-4">Catálogo</h1>

            <Row className="mb-4">
                <Col sm={12} className="d-flex justify-content-end">
                    <Link to="/create">
                        <Button variant="success">Crear producto</Button>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col sm={12} className="d-flex justify-content-center align-items-center">
                    {
                        !loading && products
                        ? <ProductList products={products}/>
                        : <Spinner animation="border" variant="primary"/>
                    }
                </Col>
            </Row>
        </div>
    )
}