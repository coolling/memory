import React from "react";
//下载url 用于解析传递的参数 在需要的页面引用 用法： url.parse(this.props.location.search, true).query
import url from "url";
import "../css/index.css";
import paihang from "../img/paihang.png";
import music1 from '../music/music1.mp3'
export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      rushResult: [],
      easyResult: [],
      mediumResult: [],
      hardResult: []
    };
  }
  componentDidMount = () => {
    const playPromise = document.getElementById("autoplay1").play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // console.log("audio played auto");
        })
        .catch(() => {
          // console.log("playback prevented");
        });
    }
  
    if(localStorage.getItem("easy")){
      var a = JSON.parse(localStorage.getItem("easy")).result;
      a=a.sort(function (x, y) {
        return x-y;
    })
    }
    
    if(localStorage.getItem("medium")){
      var b = JSON.parse(localStorage.getItem("medium")).result;
      b=b.sort(function (x, y) {
        return x-y;
    })
    }
    
    if(localStorage.getItem("hard")){
      var c = JSON.parse(localStorage.getItem("hard")).result;
      c=c.sort(function (x, y) {
        return x-y;
    })
    }
    
    if(localStorage.getItem("rush")){
      var d = JSON.parse(localStorage.getItem("rush")).result;
      d=d.sort(function (x, y) {
        return y-x;
    })
    }
   
    this.setState({
      easyResult: a,
      mediumResult: b,
      hardResult: c,
      rushResult: d
    });
  };
  handleClick = () => {
    this.setState({
      visible: true
    });
  };
  win = () => {
    return (
      <div onClick={this.handleCancel} className="tanwindow1">
        <div className="tanwindow1text"></div>
        <div className="tanwindow">
          <div className="tan_head">历史成绩排行</div>
          <div className="tan_type">
            <div className="tan_atype">
              <div className="tan_title">闯关</div>
              <div className="tan_result">
                {
                 (this.state.rushResult||[]).map((result,index)=>{
                   return(
                     <div className='aresult' key={index}><a href={'#/rush/?result='+result}>{index+1}.第{result}关</a></div>
                   )
                 })
                }
              </div>
            </div>
            <div className="tan_atype">
              <div className="tan_title">简单</div>
              <div className="tan_result">
              {
                 (this.state.easyResult||[]).map((result,index)=>{
                   return(
                     <div className='aresult' key={index}>{result}s</div>
                   )
                 })
                }
              </div>
            </div>
            <div className="tan_atype">
              <div className="tan_title">中等</div>
              <div className="tan_result">
              {
                 (this.state.mediumResult||[]).map((result,index)=>{
                   return(
                     <div className='aresult' key={index}>{result}s</div>
                   )
                 })
                }
              </div>
            </div>
            <div className="tan_atype">
              <div className="tan_title">难</div>
              <div className="tan_result">
              {
                ( this.state.hardResult||[]).map((result,index)=>{
                   return(
                     <div className='aresult' key={index}>{result}s</div>
                   )
                 })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div className="index">
         <audio
              src={music1}
              id="autoplay1"
              loop="loop"
            ></audio>
        {this.state.visible ? this.win() : null}
        <h1 className="index_title">Memory of game</h1>
        <div className="index_button">
          <a href="#/rush">
            <button className="index_rush">闯关模式</button>
          </a>

          <a href="#/play">
            <button className="index_play">娱乐模式</button>
          </a>
          <img
            src={paihang}
            onClick={this.handleClick}
            className="pai"
            width="110px"
          ></img>
        </div>
      </div>
    );
  }
}
