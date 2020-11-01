import React from "react";
import EASY_VIDEO from "./assets/easy_web.m4v";
import MIC_CONTROLLER from "./components/mic_controller";
import "./styles/karaoke.css";


export default function Karaoke_page() {
  return (
    <div className="karaoke_container">
      <MIC_CONTROLLER></MIC_CONTROLLER>

      
      <video
          
          class="video-js"
          id="karaoke_video"
          height="100vh"
          width="100vw"
          controls
          preload="auto"
          data-setup='{}'>
        <source src={EASY_VIDEO} type="video/mp4"></source>
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
        </p>
      </video>

    </div>
  );
}
