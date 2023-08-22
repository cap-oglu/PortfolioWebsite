import profileImg from '../assets/profilePicture.jpeg';
import NavBar from './Navbar';
import Footer from './Footer';
import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import ExcelToVCFConverter from './ExcelToVCFConverter';

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
                        <div  className="d-flex flex-column  flex-sm-row   my-2 square border border-dark">
                            <div className="p-2" style={{ backgroundColor: 'rgba(76, 152, 105, 0.1)' }}>
                                <img src={profileImg} alt="Profile" class="img-fluid" />
                            </div>
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="d-flex flex-column p-2">
                                <div className="p-2"> <p>Hi visitor, I am Ahmet Ramazan.</p></div>
                                <div className="p-2">
                                    <p>
                                        I am a single dot in the universe dealing with life, its difficulties, unknowns and its unprecented hooks.
                                        This life is a journey that we all pass through. We live through, learn from it, sometimes fall and get up.
                                        From my teenage times, I associate life with zigzag, a frequency that beats in us and outside. This life is in
                                        the moment of a heart beat and clock tick and we think, seek and try to find meaning.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </section>


                    <section id="about">



                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="d-flex flex-column flex-md-row p-2">
                            <MDBCard  background='dark' border='light' alignment='center' className='text-white mx-1 rounded-0' >
                                <MDBCardBody>
                                    <MDBCardTitle>Projects</MDBCardTitle>
                                    <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                                    
                                    <Button href='#' color='inherit' variant="outlined" >Outlined</Button>
                                </MDBCardBody>
                            </MDBCard>
                            <br />
                            
                            <MDBCard border='dark' background='white' alignment='center' className='mx-1 rounded-0'>
                                <MDBCardBody>
                                    <MDBCardTitle>Read Books</MDBCardTitle>
                                    <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                                    
                                    <Button href='#' color='inherit' variant="outlined" size='medium' >GO</Button>  
                                </MDBCardBody>
                            </MDBCard>

                            <br />

                            <MDBCard border='dark' background='white' alignment='center' className='mx-1 rounded-0'>
                                <MDBCardBody>
                                    <MDBCardTitle>Read Articles</MDBCardTitle>
                                    <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                                    <Button href='#' color='inherit' variant="outlined" size='medium' >GO</Button>
                                </MDBCardBody>
                            </MDBCard>

                            <br />

                            <MDBCard  border='dark' background='white' alignment='center' className='mx-1 rounded-0'>
                                <MDBCardBody>
                                    <MDBCardTitle>Watched Movies</MDBCardTitle>
                                    <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                                    <Button href='#' color='inherit' variant="outlined" size='medium' >GO</Button>
                                </MDBCardBody>
                            </MDBCard>




                        </div>

                    </section>
                    <section id="about">
                        <div  className="d-flex flex-column  flex-sm-row justify-content-center align-items-center p-2 ">
                        <ExcelToVCFConverter />
                        </div>
                    </section>
                </main>

                <Footer />
            </>
        );
    }
}