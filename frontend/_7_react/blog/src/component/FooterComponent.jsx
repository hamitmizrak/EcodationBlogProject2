import React from 'react'

export default function FooterComponent() {
    return (
        <>
            <footer className="text-center text-white" 
            style={{
                'backgroundColor': 'black',
                }}>
                <div className="container pt-4">
                    <section className="mb-4">
                        <a
                            className="btn btn-link btn-floating btn-lg text-warning m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i
                        ></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-warning m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-warning m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-warning m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-primary m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i
                        ></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-warning m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>

                <div className="text-center p-3">
                    © 2022 Copyright:
                    <a className="text-dark" href="https:///">Hamit Mızrak</a>
                </div>
            </footer>
        </>
    )
}
