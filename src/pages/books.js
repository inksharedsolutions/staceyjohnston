import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book1.png'
import Book2 from '../../static/books/book2.png'
import Book3 from '../../static/books/book3.png'
import Book4 from '../../static/books/book4.png'

const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'stacey-johnston',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={``}
                    contextHeading={`Books`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `HEROES AND VILLAINS`,
                                spanFirst: `California Dreaming, Book I`,
                                imgSrc: Book3,
                                id: 'the_gifted_one',
                                content:
                                    `
                                        <p>
                                            Two lives entwined in secrets, secrets that threaten to tear them apart before they even begin…
                                        </p> 
                                        <p>
                                            Sophie Valentine was a girl living a privileged life in the tranquility of Solana Beach until she was forced to move to Brooklyn under questionable conditions. In a quiet Brooklyn neighborhood, Benjamin Sinclair was a troubled boy leading a secret life. When he met Sophie on the steps of his apartment building the day she moved in, he never envisioned how chaotic and turbulent his life would become. A battle between the forces of good and evil awaits, one that could leave a devastating effect or be the start of new beginnings. How will it end?
                                        </p>
                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/heroes-and-villains-stacey-johnston/1133203358?ean=9781643456751',
                                    amazon: 'https://www.amazon.com/Heroes-Villains-Stacey-Johnston-ebook/dp/B07X1TZ1FG/ref=sr_1_1?keywords=9781643456751&qid=1567010583&s=gateway&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Heroes-Villains-Stacey-Johnston/dp/1643454234/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1567638186&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/heroes-and-villains-stacey-johnston/1133203358?ean=9781643454238',
                                    booksamillion: 'https://www.booksamillion.com/p/Heroes-Villains/Stacey-Johnston/9781643454238?id=8009965417365&_ga=2.197604463.1116250214.1602566023-1770015116.1600996550',
                                }
                            }}
                        />
                        <BookInfo
                            data={{
                                title: `SINS OF THE FATHER`,
                                spanFirst: `California Dreaming, Book II`,
                                imgSrc: Book4,
                                id: 'the_gifted_one',
                                content:
                                    `
                                    <p>
                                    Sherlyn 
                                    </p> 
                                    <p>
                                    If there is anything Sherlyn has learned, it’s that the past is a cruel reminder of a life that can no longer be lived.  
                                    </p>
                                    <p>
                                    After the death of her father, eighteen-year-old Sherlyn uncovers hidden truths about his life and the horrific deeds he committed that could have a lasting impact on her life. As she struggles with the reality of her haunted past, she realizes that these unexpected truths may not be so easy to bury. 
                                    </p>
                                    <p>
                                    When her mother dies under tragic circumstances, Sherlyn leans on her best friend, Sophie Valentine, and her family, but even their love and support can’t erase her heartache. When she attracts the attention of one of her father’s former associates, she can’t help but wonder if everything she ever knew was a lie. 
                                    </p>
                                    <p>
                                    Stephen  
                                    </p>
                                    <p>
                                    With the threat of a menacing hit man now eliminated, Stephen is finally free from the prison that was his life for the past four years. When he is forced to move back to California, he is torn away from the one person who brings light into his world of darkness. Sherlyn’s absence sends Stephen into a vortex of chaos and self-doubt, which begins to affect his every action. Even the best of intentions can’t stop Stephen from pushing away the light to continue his journey through the darkness alone. It’s everything he can do just to keep the remnants of his life intact—until tragedy strikes.   
                                    </p>
                                    <p>
                                    A girl struggling to find her way. 
                                    </p>
                                    <p>
                                    A boy trying to control his demons from the past.  
                                    </p>
                                    <p>
                                    Can a shy girl curb the controlling nature of the boy she loves, and will either of them survive the sins of the father?    
                                    </p>
                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/sins-of-the-father-california-dreaming-book-2/',
                                    barnes: 'https://www.barnesandnoble.com/w/sins-of-the-father-stacey-johnston/1135279909?ean=9781643457918',
                                    amazon: 'https://www.amazon.com/Sins-Father-California-Dreaming-Book-ebook/dp/B08232TF5D/ref=sr_1_1?keywords=9781643457918&qid=1575297924&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/dp/1643455540/ref=sr_1_1?keywords=9781643455549&qid=1575391943&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/sins-of-the-father-stacey-johnston/1135279909?ean=9781643455549',
                                    booksamillion: 'https://www.booksamillion.com/p/Sins-Father/Stacey-Johnston/9781643455549?id=8009965417365',
                                }
                            }}
                        />
                        <div className="columns book-container-ft">
                            <div className="column">
                                <div className="bookImgContainer">
                                    <img alt="main-book" src={Book1} />
                                </div>
                            </div>

                            <div className="column">
                                <section className="contentBook">

                                    <h1>AFTER THE DUST SETTLES</h1>
                                    <p className="sub-heading">
                                        California Dreaming, Book III
                                    </p>
                                    
                                    <span></span>

                        
                                    <div className="content-body" 
                                        >
                                            <p>He was supposed to be a job. A target that needed to be eliminated. A message that we weren't a family to mess with, buth when my chance came, I couldn't do it.</p>
                                            <p>There was a presence about him that drew me in and I went from wanting to kill him .... to wanting him in my arms, Fromt that moment on he became my obsession.</p>
                                            <p>I'm no good for him, because I'm broken, a girl wit a dark past - the daughter of an Italian mobster. ou rfamily is one of the largest in Brooklyn which is why I need to excape from my father, and this life.</p>
                                            <p>I need someone to swoop in and save me, but I'm scared because bad things happen to me - and the people I love.</p>
                                        </div>
                                </section>


                                <section className="fullSection">
                                    <nav className="comming-soon">
                                        <span>
                                            Comming Soon...
                                        </span>
                                    </nav>
                                </section>


                            </div>	
                        </div>
                        <div className="columns book-container-ft">
                            <div className="column">
                                <div className="bookImgContainer">
                                    <img alt="main-book" src={Book2} />
                                </div>
                            </div>

                            <div className="column">
                                <section className="contentBook">

                                    <h1>COMMING HOME</h1>
                                    <p className="sub-heading">
                                        California Dreaming, Book IV
                                    </p>
                                    
                                    <span></span>

                        
                                    <div className="content-body" 
                                        >
                                            <p>
                                            The The day Peyton Jessop walked into my life, I was six years old. I'd spent that whole summer wondering if anyone would ever move into the creepy old Barkley house next door to me. Just before school started, I watched as a van pulled up and a brown-haired little girl clutching a stuffed bear climbed out. Peyton was feisty and fun to be around, but her life at home was troubled. That brown-haired girl weaved her way into my heart. She was supposed to be my ever after. Well, that was the plan until her mother died and her father ripped her away from me. 
                                            </p>
                                        </div>
                                </section>


                                <section className="fullSection">
                                    <nav className="booklinkBlocks">
                                        <span>Ebooks :</span>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Coming-Home-California-Dreaming-Book-ebook/dp/B08KWMDQF6/ref=sr_1_1?dchild=1&keywords=9781648952074&qid=1602270615&sr=8-1">Amazon</a></li>
                                        {/* <li><a rel="noopener noreferrer" target="_blank" href="">Stratton Press</a></li> */}
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/coming-home-stacey-johnston/1137881709?ean=9781648952074">Barnes & Noble</a></li>
                                    </nav>

                                    <nav className="booklinkBlocks">
                                        <span>Purchase Paperback :</span>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/dp/1643455567/ref=sr_1_1?dchild=1&keywords=9781643455563&qid=1602271001&sr=8-1">Amazon</a></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/coming-home-stacey-johnston/1137881709?ean=9781643455563">Barnes & Noble </a></li>
                                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Coming-Home/Stacey-Johnston/9781643455563?id=8009965417365&_ga=2.61108911.2077251330.1602668715-1770015116.1600996550">Books A Million</a></li>
                                    </nav>
                                </section>


                            </div>	
                        </div>

                        <div className="commentSection" >
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;