import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer class="text-center text-white bgss">
            <Container>
                <Row>
                        <div class="container pt-4">
                            
                            <section class="mb-4">
                        
                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                    ><i class="fab fa-facebook-f"></i
                                ></a>

                            
                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                    ><i class="fab fa-twitter"></i
                                ></a>

                            

                                
                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                    ><i class="fab fa-instagram"></i
                                ></a>

                                
                                <a
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                    ><i class="fab fa-linkedin"></i
                                ></a>
                                <div class="container p-4 pb-0">
                                        <form action="">
                                        
                                            <div class="row d-flex justify-content-center">
                                            
                                            <div class="col-auto">
                                                <p class="pt-2">
                                                <strong>Sign up for our newsletter</strong>
                                                </p>
                                            </div>
                                            

                                            
                                            <div class="col-md-5 col-12">
                                        
                                                <div class="form-outline mb-4">
                                                <input type="email" id="form5Example27" class="form-control" placeholder="enter email" />
                                                </div>
                                            </div>
                                            
                                            <div class="col-auto">
                                                
                                                <button type="submit" class="btn btn-outline-secondary mb-4">
                                                Subscribe
                                                </button>
                                            </div>
                                            
                                            </div>
                                            
                                        </form>
                    
                                    
                                </div>
                            </section>
                        </div>
                    <Col className="text-center py-3"><div class="text-center text-light p-3 bg-secondary ">
                            ©Copyright 
                            Misfit
                        </div></Col>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer
