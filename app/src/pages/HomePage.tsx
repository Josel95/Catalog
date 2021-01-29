import React, { FC } from 'react'

import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { ProductList } from '../components/ProductList'

export const HomePage: FC = () => {
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
                <Col sm={12}>
                    <ProductList />
                </Col>
            </Row>
        </div>
    )
}