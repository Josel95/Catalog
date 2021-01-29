import React, { FC } from 'react'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

interface Props {
    type: string
    name: string
    value?: string
    onChange: (event: any) => void
    label: string
    error: string
    textarea?: boolean
}

export const ProductFormInput: FC<Props> = ({
    type,
    name,
    value,
    onChange,
    label,
    error,
    textarea
}) => {
    return (
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    as={textarea ? 'textarea' : 'input'}
                    type={type}
                    name={name}
                    value={value || ''}
                    onChange={onChange}
                />
                {
                    error &&
                    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                }
            </Form.Group>
        </Form.Row>
    )
}