import React from "react";
import url from "url";
import "../css/play.css";
import music1 from '../music/music1.mp3'
export default class Play extends React.Component {
  componentDidMount(){
    document.getElementById("autoplay3").play()
  }
  render() {
    return (
      <div className="play">
         <audio
              src={music1}
              id="autoplay3"
              loop="loop"
            ></audio>
        <a href="#/">
          <div className="back">back</div>
        </a>
        <div className="play_choose">
          <a href="#/start?type=0">
            <button className="choose_easy">Easy</button>
          </a>
          <a href="#/start?type=1">
            {" "}
            <button className="choose_medium">Medium</button>
          </a>
          <a href="#/start?type=2">
            <button className="choose_hard">Hard</button>
          </a>
        </div>
      </div>
    );
  }
}
