import NavBar from './Navbar';
import Footer from './Footer';
import React, { useState } from 'react';
import Sketch from "react-p5";
export default class ArtPage extends React.Component {

    render() {
        const setup = (p5, canvasParentRef) => {
            if(p5.windowWidth < 500){
            p5.createCanvas(300, 300).parent(canvasParentRef)
        }else{
            p5.createCanvas(500, 400).parent(canvasParentRef)
        }
          }
          
          const draw = p5 => {
            if (p5.mouseIsPressed) {
                p5.fill(0);
              } else {
                p5.fill(255);
              }
              p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
          }
        return (
            






            <>
                <header className="App-header">

                    <NavBar />

                </header>
                <main class="main">
                <h2 className="text-center">Experimental</h2>
                <section id="art">
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} className="d-flex flex-column justify-content-center flex-sm-row  p-2">
                    <Sketch setup={setup} draw={draw} />
                </div>

                </section>
                </main>

                <Footer />
            </>
        );
    }
}