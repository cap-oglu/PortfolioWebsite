import profileImg from '../assets/profilePicture.jpeg';
import NavBar from './Navbar';
import Footer from './Footer';
import React, { useState } from 'react';
export default class HomePage extends React.Component {
    render() {

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
                                <img src={profileImg} alt="Profile" class="img-fluid" />
                            </div>
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="d-flex flex-column p-2">
                                <div className="p-2"> <p>Hi visitor, I am Ahmet Ramazan.</p></div>
                                <div className="p-2">
                                    <p>
                                        I am a single dot in the universe dealing with life, its difficulties, unknowns and its unprecented hooks.
                                        This life is a journey that we all pass through. We live through, learn from it, sometimes fall and get up.
                                        From my teenage times, I associate life with zigzaz, a frequency that beats in us and outside. This life is in
                                        the moment of a heart beat and clock tick and we think, seek and this website will include The Me.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </section>


                    <section id="about">
                        <h2>Preface</h2>
                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="d-flex flex-column  flex-sm-row  p-2">
                            <div className="p-2">
                                <img src={profileImg} alt="Profile" class="img-fluid" />
                            </div>
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="d-flex flex-column p-2">
                                <div className="p-2"> <p>Hi visitor, I am Ahmet Ramazan.</p></div>
                                <div className="p-2">
                                    <p>
                                        I am a single dot in the universe dealing with life, its difficulties, unknowns and its unprecented hooks.
                                        This life is a journey that we all pass through. We live through, learn from it, sometimes fall and get up.
                                        From my teenage times, I associate life with zigzaz, a frequency that beats in us and outside. This life is in
                                        the moment of a heart beat and clock tick and we think, seek and this website will include The Me.
                                    </p>
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