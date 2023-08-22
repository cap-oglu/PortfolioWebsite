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

                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="d-flex flex-column  flex-sm-row  p-2">

                            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="d-flex flex-column p-2">
                                <div className="p-2"><a href='https://www.imdb.com/user/ur84057902/ratings' > My ratings</a> </div>
                                <div className="p-2"><a href='https://www.imdb.com/user/ur84057902/watchlist' > My watchlist</a> </div>
                                <span id='cv-header'>Software Stack</span>
                                <div className="py-2">
                                    A software stack is a collection of independent components that work together to support the execution of an application. 
                                    The components, which may include an operating system, architectural layers, protocols, runtime environments, 
                                    databases and function calls, are stacked one on top of each other in a hierarchy.
                                    <a target='_blank' href='https://www.techtarget.com/searchapparchitecture/definition/software-stack#:~:text=A%20software%20stack%20is%20a,each%20other%20in%20a%20hierarchy.' > Resource</a>
                                
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