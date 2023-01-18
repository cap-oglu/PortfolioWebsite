import profileImg from '../assets/profilePicture.jpeg';
import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
export default class Stats extends React.Component {

    render() {

        const imdb = (function (d, s, id) {
            var js, stags = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js";
            stags.parentNode.insertBefore(js, stags);
        }
        )(document, "script", "imdb-rating-api");
        return (






            <>
                <header className="App-header">

                    <NavBar />

                </header>
                <main class="main">
                    <section id="about">
                        <h2>Preface</h2>
                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="d-flex flex-column  flex-sm-row  p-2">
                            <div className="p-2">
                                <img src={profileImg} alt="Profile picture" class="img-fluid" />
                            </div>
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="d-flex flex-column p-2">
                                <div className="p-2"> <p>Hi visitor, I am Ahmet Ramazan.</p></div>
                                <div className="p-2">
                                    <span class="imdbRatingPlugin" data-user="ur84057902" data-title="tt1016150" data-style="p4">
                                        <a href="https://www.imdb.com/title/tt1016150/?ref_=plg_rt_1">
                                            <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_31x14.png" alt="All Quiet on the Western Front (2022) on IMDb" />
                                        </a></span>
                                    <script>
                                        {imdb}
                                    </script>
                                </div>
                            </div>

                        </div>

                    </section>



                </main>
                <Footer />
            </>
        );

        
    }
}