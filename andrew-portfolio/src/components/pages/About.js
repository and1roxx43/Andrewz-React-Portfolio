import React from "react";

export default function About() {
    return (
        <div className="about-me-container container">
            
            <div className="aboutme-img">
            <h1>About me</h1>
                

                <div className="about-me-para">
                    <p>Hello! I'm Andrew</p> 
                    <p>I am a Junior Web Developer &amp; Designer based in Melbourne, Victoria, Australia.</p>
                    <p>
                        I'm specialised in front-end and  back-end web development using HTML, CSS, JavaScript, React Js.
                    </p>
                    <p>When away from my computer screen, I spend my time either walking, exercising of all types, cooking, reading stuff about technology, watching TV, mainly documentaries and marvels.</p>
                    <p>Lately I've started practicing yoga.</p>
                </div>

                <img src="../images/Andy.png" alt="Andrew Quenette picture" className="about-me-pic" />
            </div>
          
        </div>
    )
}