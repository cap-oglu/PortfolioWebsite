import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

export default class AboutMe extends React.Component {

    render() {

        return (






            <>
                <header className="App-header">

                    <NavBar />

                </header>
                <main class="main">
                    <section id="about">
                        <span id='cv-header'>Education</span>
                        <hr />


                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="d-flex flex-column p-2">

                            <div className="p-2">
                                <div><i>Bachelor Computer Engineering GPA: 3.47/4.0</i></div>
                                <div>Istanbul Technical University, Maslak, Istanbul</div>
                                <li>Related Courses: Computer Architecture, Digital Circuits, Introduction
                                    to Electronics, Computer Organization, Digital Electronic Circuits, Microprocessor Systems,
                                    Learning From Data</li>


                            </div>
                        </div>


                        <span id='cv-header'>Skills</span>
                        <hr />


                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="d-flex flex-column p-2">

                            <div className="p-2">

                                <li>
                                    Skilled in Python, Flask, Numpy, Matplotlib, JS, CSS, HTML, SQL,
                                    MySQL, BootStrap and Resposive Web Design.
                                </li>
                                <li>
                                    Proficient in C, C++, ROS and Gazebo Simulation Environment
                                </li>
                                <li>
                                    Competent in Risc-V ISA Arm-Cortex-M0+ ISA, Verilog, iVerilog,
                                    computer architecture tools
                                </li>


                            </div>
                        </div>
                        <span id='cv-header'>Experience</span>
                        <hr />


                        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} className="d-flex flex-column p-2">

                            <div className="d-flex flex-column flex-sm-row  justify-content-between ">
                                <div><i>Team Member - Hardware Developer</i></div>
                                <div>2022 - Present</div>

                            </div>
                            <div className="p-2">
                                <div>DijitalTek</div>
                                <li>
                                    Analyzed the different Risc-V core implementations.
                                </li>
                                <li>
                                    Designed encryption and decryption unit, multiplier and differentiator.
                                </li>
                                <li>
                                    Worked on cache design and overall CPU core design
                                </li>
                            </div>
                            <hr id='inline-hr' />
                            <div className="d-flex flex-column flex-sm-row  justify-content-between ">
                                <div><i>Team Member - Software Developer</i></div>
                                <div>2021 - Present</div>

                            </div>
                            <div className="p-2">
                                <div>Gümüs Arge Team</div>
                                <li>
                                    Worked on ROS and simulation environment.
                                </li>
                                <li>
                                    Designed the path-planning algorithm.
                                </li>

                            </div>

                            <hr id='inline-hr' />
                            <div className="d-flex flex-column flex-sm-row  justify-content-between ">
                                <div><i>Intern -  Digital Design</i></div>
                                <div>2022 June - 2022 July</div>

                            </div>
                            <div className="p-2">
                                <div>Tübitak Bilgem</div>
                                <li>
                                    Designed FIFO and counter and serial adder.
                                </li>
                                <li>
                                    Designed UART and some parts of BORON encyrption system.
                                </li>

                            </div>
                            <hr id='inline-hr' />
                            <div className="d-flex flex-column flex-sm-row  justify-content-between ">
                                <div><i>Intern -  Data Analyst</i></div>
                                <div>2022 August - 2022 September</div>

                            </div>
                            <div className="p-2">
                                <div>Tusaş</div>
                                <li>
                                    Worked on Python, SQL and MSSQL.
                                </li>
                                <li>
                                    Worked on PowerBI and Report Builder.
                                </li>

                            </div>
                            <hr id='inline-hr' />
                            <div className="d-flex flex-column flex-sm-row  justify-content-between ">
                                <div><i>Researcher Intern -  Digital Design and System Programming</i></div>
                                <div>2022 October - Present</div>

                            </div>
                            <div className="p-2">
                                <div>Tubitak Bilgem</div>
                                <li>
                                    Working on OpenGL, VortexGPU, GLSL, glslang, LunarGLASS compiler.
                                </li>


                            </div>

                        </div>


                    </section>



                </main>
                <Footer />
            </>
        );
    }
}