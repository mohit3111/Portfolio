import React from "react";
import "./card.css";
import "./new.css";
const Projects = () => {
  return (
    <div className="projects">
      <div className="Leftpro">
        <div className="work">
          <h2  data-aos="slide-right" data-aos-duration="1000" >
            <img src="https://img.icons8.com/wired/50/64feda/sort-right.png" alt="#"/>{" "}
            My Work <p className="line"></p>
          </h2>
        </div>
        <div className="cards" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">


        <div class="card2" >
       <div class="content2">
           <div class="front">
               <h3 class="title"> <img
                  src="imgs/epage.jpg"
                  alt="#"
                  style={{ width: "17rem", marginTop: "15px", borderRadius:"6px" }}
                ></img></h3>
               <p class="title" style={{textShadow:"1px 2px 2px black"}} >E-commerce website</p>
           </div>

           <div class="back">
               <p class="description">
                <h3> Created With HTML,CSS,Js and Reactjs.</h3>
              
                
               Having struggled with understanding how React and React-router-dom flow works.
               Also using custom API to render product's and details.
               <a href="https://mohiteshop.netlify.app/" target="_blank" rel="noreferrer" className="button">
                  {" "}
                  Visit now{" "}
                  <img
                    src="https://img.icons8.com/windows/21/70e6d2/open-in-popup.png"
                    alt="#"
                    className="popup"
                    style={{ paddingLeft: "3px" }}
                  />
                </a>
               </p>
           </div>
       </div>
   </div>

   <div class="card2"  data-aos="slide-right" data-aos-duration="1000" data-aos-delay="2200">
       <div class="content2">
           <div class="front">
               <h3 class="title"> <img
                  src="imgs/weatherapp.jpg"
                  alt="#"
                  style={{ width: "17rem", marginTop: "15px", borderRadius:"6px" }}
                ></img></h3>
               <p class="title" style={{textShadow:"1px 2px 2px black"}} > Live Weathe App</p>
           </div>

           <div class="back">
               <p class="description">
                <h3>Created With HTML,CSS and Js.</h3>
                
                <br/>
              Learnd How to fetch data from real API. Getting the user request and display the live data.

               <a href="https://mohiteshop.netlify.app/" target="_blank" rel="noreferrer" className="button">
                  {" "}
                  Visit now{" "}
                  <img
                    src="https://img.icons8.com/windows/21/70e6d2/open-in-popup.png"
                    alt="#"
                    className="popup"
                    style={{ paddingLeft: "3px" }}
                  />
                </a>
               </p>
           </div>
       </div>
   </div>

   <div class="card2" data-aos="slide-down" data-aos-duration="1000" data-aos-delay="2200">
       <div class="content2">
           <div class="front">
               <h3 class="title"> <img
                  src="imgs/musicplayer.jpg"
                  alt="#"
                  style={{ width: "17rem", marginTop: "15px", borderRadius:"6px" }}
                ></img></h3>
               <p class="title" style={{textShadow:"1px 2px 2px black"}} >Online Music Player</p>
           </div> 

           <div class="back">
               <p class="description">
             <h3>Created With HTML,CSS and JS.</h3> <br/>
             Understanding of how to play play audio files, such as MP3 files, using earphones or speakers.
               <a href="https://mohiteshop.netlify.app/" target="_blank" rel="noreferrer" className="button">
                  {" "}
                  Visit now{" "}
                  <img
                    src="https://img.icons8.com/windows/21/70e6d2/open-in-popup.png"
                    alt="#"
                    className="popup"
                    style={{ paddingLeft: "3px" }}
                  />
                </a>
               </p>
           </div>
       </div>
   </div>

   <div class="card2" data-aos="fade-down-right" data-aos-duration="1000" data-aos-delay="2200">
       <div class="content2">
           <div class="front">
               <h3 class="title"> <img
                  src="imgs/figma.jpg"
                  alt="#"
                  style={{ width: "17rem", marginTop: "15px", borderRadius:"6px" }}
                ></img></h3>
               <p class="title" style={{textShadow:"1px 2px 2px black"}} >Website design in figma</p>
           </div>
           <div class="back">
               <p class="description">
              <h3>Created in Figma.</h3> <br/>
               Have a understanding of how to create website design in figma.
               <a href="https://mohiteshop.netlify.app/" target="_blank" rel="noreferrer" className="button">
                  {" "}
                  Visit now{" "}
                  <img
                    src="https://img.icons8.com/windows/21/70e6d2/open-in-popup.png"
                    alt="#"
                    className="popup"
                    style={{ paddingLeft: "3px" }}
                  />
                </a>
               </p>
           </div>
       </div>
   </div>


        </div>

      </div>

      <div className="rightpro"  data-aos="slide-left" data-aos-duration="1000">
        <img src="imgs/mohit2.0.png" alt="#" />
      </div>
      <div className="icons">
          <div className="icon" data-aos="slide-up" data-aos-duration="1000" data-aos-delay="1500">

         <a  href='https://www.linkedin.com/in/mohit-kansal-29b19b211/' target="_blank" rel="noreferrer" > <img src="https://img.icons8.com/ios/30/c8d4f5/linkedin-2--v1.png" alt='#'/></a>
         <a  href=' https://github.com/mohit3111' target="_blank" > <img src="https://img.icons8.com/ios/30/c8d4f5/git.png" alt='#'/></a>
         <a href='https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSKhcBwnqSVgkfGjwxFHDzNVJZgfFVDPQbQbWWvVTHjfgvZxLWbhwhDgqJnTpnxTkqGTvGCL' target="_blank" rel="noreferrer" > <img src="https://img.icons8.com/ios/30/c8d4f5/gmail--v1.png" alt='#'/></a>
         <a  href='https://www.instagram.com/mohit_kansal_01/' target="_blank" rel="noreferrer" > <img src="https://img.icons8.com/ios/30/c8d4f5/instagram-new--v1.png" alt='#'/></a>
         
         
          <div className="iconline"></div>
          </div>
        </div>
    
    </div>
  );
};

export default Projects;
