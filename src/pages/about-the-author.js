import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="Stacey Johnston"/>
                            </div>

                            <div className="heading-quote">
                                <h4>

                                </h4>
                                <span className="ata-span-fx">
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Stacey Johnston was raised in Perth, Western Australia. She is a wife and mum to four children.
                            </p>
                            <p>Having been an avid reader most of her life, Stacey finds herself most at ease when she can lose herself in stories of romance and mystery.</p>
                            <p>Stacey has a creative way of bringing suspense into her stories which keeps her reader hanging onto every word to find out how it ends.</p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Stacey Johnston</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;