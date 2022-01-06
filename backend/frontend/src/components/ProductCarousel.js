import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <section className="bgi">
                    <div className="container">

                        <div className="col-lg-12 gambar">
                            <img src="https://misfitstore.herokuapp.com/store-bg.png" alt="img" width="100%"></img>
                        </div>

                        <div className="col-sm-12 position-relative p-4">
                            <div className="position-absolute top-0 end-0">
                                <img src="https://misfitstore.herokuapp.com/store-bg.png" alt="img" className="img"></img>
                            </div>

                            <h3 className="display-6 text-truncate tebel-sedang mt-5 text-abu">
                                Misfit
                            </h3>
                            <h5 className="display-1 text-truncate tebel-sedang text-abu">
                                Online Shop
                            </h5>

                            <div className="desc mt-4">
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>

                            <div className="mt-5">
                                <a className="button rounded-pill shadow tebel-sedang">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </section>
            )

    )
}

export default ProductCarousel