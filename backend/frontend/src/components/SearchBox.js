import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline className="d-flex">
          <Form.Control
            type="search"
            name='q'
            placeholder="Search Product"
            onChange={(e) => setKeyword(e.target.value)}
            className="me-2"
          ></Form.Control>
          <Button variant="outline-dark">Search</Button>
        </Form>
    )
}

export default SearchBox