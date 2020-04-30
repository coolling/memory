import React, { Component, Fragment } from "react";
import url from "url";
import "../css/rush.css";
import back from "../img/qu.png";
import data1 from "../img/data1.jpg";
import data2 from "../img/data2.jpg";
import data3 from "../img/data3.jpg";
import data4 from "../img/data4.jpg";
import data5 from "../img/data5.jpg";
import data6 from "../img/data6.jpg";
import data7 from "../img/data7.jpg";
import data8 from "../img/data8.jpg";
import data9 from "../img/data9.jpg";
import data10 from "../img/data10.jpg";
import data11 from "../img/data11.jpg";
import data12 from "../img/data12.jpg";
import bome from "../img/bome.jpg";
import medicine from "../img/medicine.jpg";
import music2 from '../music/music2.mp3'
export default class Rush extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [
        { img: data1, flipped: false, listen: true },
        { img: data1, flipped: false, listen: true },
        { img: data2, flipped: false, listen: true },
        { img: data2, flipped: false, listen: true },
        { img: data3, flipped: false, listen: true },
        { img: data3, flipped: false, listen: true },
        { img: data4, flipped: false, listen: true },
        { img: data4, flipped: false, listen: true },
        { img: data5, flipped: false, listen: true },
        { img: data5, flipped: false, listen: true },
        { img: data6, flipped: false, listen: true },
        { img: data6, flipped: false, listen: true },
        { img: bome, flipped: false, listen: true },
        { img: medicine, flipped: false, listen: true },
        { img: data7, flipped: false, listen: true },
        { img: data7, flipped: false, listen: true },
        { img: data8, flipped: false, listen: true },
        { img: data8, flipped: false, listen: true },
        { img: data9, flipped: false, listen: true },
        { img: data9, flipped: false, listen: true },
        { img: data10, flipped: false, listen: true },
        { img: data10, flipped: false, listen: true },
        { img: data11, flipped: false, listen: true },
        { img: data11, flipped: false, listen: true },
        { img: data12, flipped: false, listen: true },
        { img: data12, flipped: false, listen: true }
      ],
      flip: [],
      hasFlippedCard: false,
      lockBoard: false,
      firstCard: null,
      secondCard: null,
      time: 60,
      visible: false,
      visible2: false,
      visible3: false,
      counts: 1,
      bometime: 0,
      answer: null,
      a: null,
      b: null
    };
  }

  componentDidMount=()=> {
   document.getElementById("autoplay2").play()
    if(url.parse(this.props.location.search, true).query.result){
      var re =parseInt(url.parse(this.props.location.search, true).query.result) 
      this.setState({
        counts:re+1
      },()=>{
        this.timerID = setInterval(() => this.tick(), 1000);

    var flip = [];

    if (this.state.counts <= 5) {
      for (let i = 0; i < 12; i++) {
        flip.push(this.state.imgs[i]);
      }
      this.setState({
        time: this.state.time - 5 * (this.state.counts - 1)
      });
    } else if (this.state.counts <= 10) {
      for (let i = 0; i < 20; i++) {
        flip.push(this.state.imgs[i]);
      }
      this.setState({
        time: this.state.time - 3 * (this.state.counts - 6)
      });
    } else if (this.state.counts <= 15) {
      for (let i = 0; i < 24; i++) {
        flip.push(this.state.imgs[i]);
      }
      this.setState({
        time: this.state.time - 3 * (this.state.counts - 11)
      });
    }
    console.log(flip);
    this.setState(
      {
        flip: flip
      },
      () => {
        const cards = document.querySelectorAll(".memory-card");
        cards.forEach(card => {
          let randomPos = Math.floor(Math.random() * 12);
          card.style.order = randomPos;
        });
      }
    )
  
      })

    }else{
      this.timerID = setInterval(() => this.tick(), 1000);

      var flip = [];
  
      if (this.state.counts <= 5) {
        for (let i = 0; i < 12; i++) {
          flip.push(this.state.imgs[i]);
        }
        this.setState({
          time: this.state.time - 5 * (this.state.counts - 1)
        });
      } else if (this.state.counts <= 10) {
        for (let i = 0; i < 20; i++) {
          flip.push(this.state.imgs[i]);
        }
        this.setState({
          time: this.state.time - 3 * (this.state.counts - 6)
        });
      } else if (this.state.counts <= 15) {
        for (let i = 0; i < 24; i++) {
          flip.push(this.state.imgs[i]);
        }
        this.setState({
          time: this.state.time - 3 * (this.state.counts - 11)
        });
      }
      console.log(flip);
      this.setState(
        {
          flip: flip
        },
        () => {
          const cards = document.querySelectorAll(".memory-card");
          cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
          });
        }
      );
    }
    
  }
  tanwindow1 = text => {
    return (
      <div onClick={this.handleCancel} className="tanwindow1">
        <div className="tanwindow1text"></div>
        <div className="tanwindow1text2">
          <p>{text}</p>
        </div>
      </div>
    );
  };
  tanwindow2 = text => {
    return (
      <div onClick={this.handleCancel2} className="tanwindow1">
        <div className="tanwindow1text"></div>
        <div className="tanwindow1text2">
          <p>{text}</p>
        </div>
      </div>
    );
  };
  tanwindow3 = () => {
    return (
      <div className="tanwindow1">
         <audio
              src={music2}
              id="autoplay2"
              loop="loop"
            ></audio>
        <div className="tanwindow1text"></div>
        <div className="tanwindow1count">
          <div className="tanqua">
            请算出{this.state.a}+{this.state.b}的值
          </div>
          <div>
            <input type="text" className="tanan" onChange={this.answer}></input>
            <button className="tansend" onClick={this.send}>
              send
            </button>
          </div>
        </div>
      </div>
    );
  };
  send = () => {
    if (this.state.a + this.state.b + "" === this.state.answer) {
      this.setState(
        {
          visible3: false
        },
        () => {
          this.timerID = setInterval(() => this.tick(), 1000);
        }
      );
    }
  };
  answer = e => {
    this.setState({
      answer: e.target.value
    });
  };
  handleCancel = () => {
    this.setState(
      {
        visible: false
      },
      () => {
        if (this.state.counts !== 1) {
          if (localStorage.getItem("rush")) {
            var result = JSON.parse(localStorage.getItem("rush"));
          } else {
            var result = { result: [] };
          }

          result.result.push(this.state.counts - 1);
          localStorage.setItem("rush", JSON.stringify(result));
        }
        window.location.href = "#/";
      }
    );
  };
  handleCancel2 = () => {
    this.setState(
      {
        visible2: false
      },
      () => {
        this.setState(
          {
            counts: this.state.counts + 1,
            time: 60
          },
          () => {
            for (let i = 0; i < this.state.flip.length; i++) {
              this.state.flip[i].flipped = false;
              this.state.flip[i].listen = true;
            }
            this.componentDidMount();
          }
        );
      }
    );
  };
  tick() {
    this.setState(
      {
        time: this.state.time - 1
      },
      () => {
        if (this.state.time === 0) {
          clearInterval(this.timerID);
          this.setState({
            visible: true
          });
        }
        if(this.state.counts>10){
          if (this.state.time % 11 === 0) {
            let a = Math.round(Math.random() * 10);
            let b = Math.round(Math.random() * 10);
  
            this.setState(
              {
                visible3: true,
                a: a,
                b: b
              },
              () => {
                clearInterval(this.timerID);
              }
            );
          }
        }
        
      }
    );
  }
  tick2() {
    this.setState(
      {
        bometime: this.state.bometime - 1
      },
      () => {
        if (this.state.bometime === 0) {
          clearInterval(this.timerID2);
          clearInterval(this.timerID);
          this.setState({
            visible: true
          });
        }
      }
    );
  }

  flipCard = index => {
    console.log(index);
    if (this.state.flip[index].img === bome) {
      let flips = this.state.flip;
      flips[index].listen = false;
      flips[index].flipped = true;
      this.setState(
        {
          bometime: 25,
          flip: flips
        },
        () => {
          this.timerID2 = setInterval(() => this.tick2(), 1000);
        }
      );
      return;
    }
    if (this.state.flip[index].img === medicine) {
      let flips = this.state.flip;
      flips[index].listen = false;
      flips[index].flipped = true;
      if (this.state.bometime === 0) {
        this.setState({
          time: this.state.time + 10,

          flip: flips
        });
      } else {
        this.setState({
          bometime: this.state.bometime + 10,

          flip: flips
        });
      }

      return;
    }
    if (this.state.lockBoard) return;
    if (index === this.state.firstCard) return;

    let flip = this.state.flip;

    flip[index].flipped = true;
    this.setState({
      flip: flip
    });

    if (!this.state.hasFlippedCard) {
      // first click
      this.setState({
        hasFlippedCard: true,
        firstCard: index
      });

      return;
    }
    this.setState(
      {
        secondCard: index
      },
      () => {
        this.checkForMatch();
      }
    );
    // second click
  };
  checkForMatch = () => {
    var all = true;
    for (var i = 0; i < this.state.flip.length; i++) {
      if(i!==12&&i!==13){
        if (this.state.flip[i].flipped !== true) {
          all = false;
          break;
        }
      }
      
    }
    if (all) {
      clearInterval(this.timerID);
      this.setState({
        visible2: true
      });
    }
    let isMatch =
      this.state.imgs[this.state.firstCard].img ===
      this.state.imgs[this.state.secondCard].img;
    isMatch ? this.disableCards() : this.unflipCards();
  };
  disableCards = () => {
    var imgs = this.state.flip;
    imgs[this.state.firstCard].listen = false;
    imgs[this.state.secondCard].listen = false;
    this.setState({
      flip: imgs
    });

    this.resetBoard();
  };

  unflipCards = () => {
    this.setState({
      lockBoard: true
    });

    setTimeout(() => {
      var imgs = this.state.flip;
      imgs[this.state.firstCard].flipped = false;
      imgs[this.state.secondCard].flipped = false;

      this.resetBoard();
    }, 500);
  };

  resetBoard = () => {
    this.setState({
      hasFlippedCard: false,
      lockBoard: false,
      firstCard: null,
      secondCard: null
    });
  };
  render() {
    return (
      <div className="rush">
         <audio
              src={music2}
              id="autoplay2"
              loop="loop"
            ></audio>
        {this.state.visible ? this.tanwindow1("You failed") : null}
        {this.state.visible2 ? this.tanwindow2("进入下一关") : null}
        {this.state.visible3 ? this.tanwindow3() : null}
        <div className="rush_head">
          <div className="rush_counts">当前关卡：第{this.state.counts}关</div>
          <div className="rush_time">Time：{this.state.time}s</div>
          <div className="rush_bome">爆炸时间：{this.state.bometime}s</div>
          <a href="#/">
            <div className="back">back</div>
          </a>
        </div>
        <div className="start_body">
          {" "}
          <div
            className={
              this.state.counts <= 5
                ? "easy_type"
                : this.state.counts <= 10
                ? "medium_type"
                : "hard_type"
            }
          >
            {" "}
            {this.state.flip.map((aimg, index) => {
              return (
                <Fragment key={index}>
                  <div
                    className={[
                      "memory-card",
                      aimg.flipped ? "flip" : null
                    ].join(" ")}
                    data-framework={index + "data"}
                    onClick={
                      aimg.listen ? this.flipCard.bind(this, index) : null
                    }
                  >
                    <img className="front-face" src={aimg.img} alt="正面" />
                    <img className="back-face" src={back} alt="反面" />
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
