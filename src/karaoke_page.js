import React from "react";
import EASY_VIDEO from "./assets/easy_web.m4v";
import MIC_CONTROLLER from "./components/mic_controller";
import "./styles/karaoke.css";

export default function Karaoke_page() {
  return (
    <div className="karaoke_container">
      <MIC_CONTROLLER></MIC_CONTROLLER>
      <video id="karaoke_video" className="karaoke_video" controls>
        <source src={EASY_VIDEO} type="video/mp4" />
      </video>
    </div>
  );
}
