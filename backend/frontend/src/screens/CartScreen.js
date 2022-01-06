import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'


function CartScreen({match, location,  history}) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h5>Shopping Cart</h5>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ): (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2} className="mb-3">
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3} className="mb-3">
                                            <Link className="text-warning nounderline" to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>

                                        <Col md={2} className="mb-3">
                                            N{item.price}
                                        </Col>
                                        <Col md={3} className="mb-3">
                                            <Form.Control
                                                    as="select"
                                                    value={item.qty}
                                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                >
                                                    {

                                                        [...Array(item.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))
                                                    }

                                            </Form.Control>
                                        </Col>

                                        <Col md={1}>
                                            <Button
                                                type='button'
                                                variant='warning'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h5>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h5>
                            N{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                            <h6>Please shipping price not included, proceed to <strong>checkout page</strong></h6>
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item className="d-grid gap-2">
                        <Button
                            type='button'
                            className='btn-block'
                            variant="warning"
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen
