import React, { useEffect } from "react";
import EASY_VIDEO from "./assets/easy_web.m4v";
import MIC_CONTROLLER from "./components/mic_controller";
import "./styles/karaoke.css";

export default function Karaoke_page() {
  useEffect(() => {
    // Get the <video> element with id="myVideo"
    var vid = document.getElementById("karaoke_video");

    // Assign an ontimeupdate event to the <video> element, and execute a function if the current playback position has changed
    vid.ontimeupdate = function () {
      console.log("ASD");
    };
  }, []);
  return (
    <div className="karaoke_container">
      <MIC_CONTROLLER></MIC_CONTROLLER>
      <video id="karaoke_video" className="karaoke_video" controls>
        <source src={EASY_VIDEO} type="video/mp4" />
      </video>
    </div>
  );
}
