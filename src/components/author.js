import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/dummy.png'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p data-aos="fade-up" data-aos-duration="2000">
                            Stacey Johnston was raised in Perth, Western Australia. She is a wife and mum to four children.

                        </p>

                        <h1 className="author-name-tag" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <span>Stacey</span>
                            <span>Johnston</span>
                        </h1>

                        <span className="author-tagline">Author & Writer</span>

                        <button className="buttonLayouts" data-aos="fade-up" data-aos-duration="3000" >
                            <Link to="/about-the-author">Read More</Link>
                        </button>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} data-aos="fade-up" data-aos-duration="3000" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;