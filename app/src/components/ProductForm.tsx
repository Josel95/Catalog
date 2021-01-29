import React, { FC, useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import { Product } from '../entities/Product'

import { ProductFormInput } from './ProductFormInput'

interface Props {
    submitButtonText: string
    product?: Product | undefined
    errors?: object
    loading: boolean
    onSubmit: (product: Product) => void
}

export const ProductForm: FC<Props> = ({
    submitButtonText = "Enviar",
    product,
    errors,
    loading = false,
    onSubmit
}) => {
    const [name, setName] = useState(product?.name)
    const [description, setDescription] = useState(product?.description)
    const [price, setPrice] = useState(product?.price)
    const [image, setImage] = useState(product?.image)
    const [releaseDate, setReleaseDate] = useState(product?.releaseDate)

    const handleSubmit = (event: any) => {
        event.preventDefault()

        if(!name || !description || !price || !image || !releaseDate) {
            return;
        }

        const product: Product = {
            id: 0,
            name,
            description,
            price,
            image,
            releaseDate,
            isActive: true
        }

        onSubmit(product)
    }

    return (
        <Form onSubmit={handleSubmit} className="w-50">
            <ProductFormInput
                type="text"
                name="name"
                value={name}
                onChange={(event: any) => setName(event.target.value)}
                label="Nombre del producto"
                error="Campo erroneo" // Handle error mesage
            />

            <ProductFormInput
                type="text"
                name="description"
                value={description}
                onChange={(event: any) => setDescription(event.target.value)}
                label="Descripción"
                error="Campo erroneo" // Handle error mesage
                textarea
            />

            <ProductFormInput
                type="number"
                name="price"
                value={price?.toString()}
                onChange={(event: any) => setPrice(event.target.value)}
                label="Precio"
                error="Campo erroneo" // Handle error mesage
            />

            <ProductFormInput
                type="url"
                name="image"
                value={image}
                onChange={(event: any) => setImage(event.target.value)}
                label="Imagen"
                error="Campo erroneo" // Handle error mesage
            />

            <ProductFormInput
                type="datetime-local"
                name="releaseDate"
                value={releaseDate?.toString()}
                onChange={(event: any) => setReleaseDate(event.target.value)}
                label="Fecha lanzamiento"
                error="Campo erroneo" // Handle error mesage
            />

            <Button type="submit">
                {
                    loading
                    ? <Spinner as="span" animation="border" size="sm"/>
                    : <span>{ submitButtonText }</span>
                }
            </Button>
        </Form>
    )
}