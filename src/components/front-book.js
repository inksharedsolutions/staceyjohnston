import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/book3.png'
// import Accordions from '../containers/accordions'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books" >


                        <div className="content-wraps">

                            <span className="italic-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p data-aos="fade-up" data-aos-duration="2000">
                            The The day Peyton Jessop walked into my life, I was six years old. I'd spent that whole summer wondering if anyone would ever move into the creepy old Barkley house next door to me.
                            </p>

                            <button className="btn-book-featured" data-aos="fade-up" data-aos-duration="3000">
                                <Link to="/books">
                                    Read More
                                </Link>
                            </button>

                        </div>
                        <div className="book-wraps" >
                            <img src={FrontBook} data-aos="fade-up" data-aos-duration="3000" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook