import React from "react";
import Navbar from "../common/Navbar";
import "../../assets/css/home.scss"

const Home = () => (
    <div>
      <Navbar />
      <div class="col s12 m6" >
          <div class="card brown darken-1"  id="card">
            <div class="card-content white-text">
            <p>by,</p>
              <span class="card-title">Osborne Macharia</span>
              <p>
              
Osborne Macharia is a self-taught commercial and advertising photographer born and bred in Nairobi, Kenya and with a bachelors in architecture.<br></br>
              Kenyan photographer Osborne Macharia has an ability to bring stories to life from behind his camera lens. In his work, be it commercial or personal, he has a knack for animating his characters so that they always seem to be jumping out at you with something to say. His narrative style of photography is not only entertaining but it also makes for a powerful platform to convey an important message on topics like gender abuse, ivory poaching and victims of war-torn regions in Africa.
              </p>
            </div>
            <div class="card-action">
              <a href="/">Home</a>
            </div>
          </div>
        </div>
    
    </div>
  );                         
export default Home;