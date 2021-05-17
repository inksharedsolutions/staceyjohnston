import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="Author | Stacey Johnston" />
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
                                    If I were normal ... life would be boring
                                </h4>
                                <span className="ata-span-fx">
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Stacey become a writer, so she could share the stories her vivid imagination creates with readers who are willing to give a seemingly unknown author a chance.
                            </p>
                            <p>
                                Currently Stacey resides in an extremely dry and hot mining town located in northern Western Australia. With her husband alongside her, she spends her days tinting paint and serving customers in a paint store.
                            </p>
                            <p>
                                Story telling has always been a big part of who Stacey is and it was her love of telling stories that saw her transfer the visions she sees in her mind onto paper. Disappearing into another world and imagining she is there whilst reading or writing excites her and is something she adores sharing with others.
                            </p>
                            <p>
                                If it’s a particular genre you’re seeking, Stacey may have something that will catch your eye.
                            </p>
                            <p>
                                After publishing her debut novel in 2016 – a romantic suspense story full of intrigue and mystery, which developed into a series; she went on to also publish a romantic comedy based on an Aussie author attending her first author signing in the United States.
                            </p>
                            <p>
                                So not to limit herself, and to aid in coping with a family member who was struggling with Depression and Anxiety, Stacey has also created a beautiful story called After the Rain.
                            </p>
                            <p>
                                Out of all the books Stacey has written this one is her favourite as it tells the story of a man struggling with his mental health issues and the impact it was having on his family.
                            </p>
                            <p>
                                The important addition of surprise, mystery and intrigue she adds to each of her books leaves her readers hanging on to every word, wanting more. 
                            </p>
                            <p>
                                The moto ‘If I were normal, life would be boring’ is not only something Stacey lives by in her everyday life, but also something she brings to her books. Creativity, and a vivid imagination, has helped her shaped many stories that she hopes you love as much as she does. 
                            </p>

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