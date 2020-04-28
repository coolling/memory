import React, { Component, Fragment } from "react";
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
import url from "url";
import "../css/start.css";
import music1 from '../music/music1.mp3'
export default class Start extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "1",
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
      time: 0,
      visible: false,
      visible2: false
    };
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
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  handleCancel2 = () => {
    this.setState(
      {
        visible2: false
      },
      () => {
        if (this.state.type ==='0') {
          if (localStorage.getItem("easy")) {
            var result = JSON.parse(localStorage.getItem("easy"));
          } else {
            var result = { result: [] };
          }
         console.log(result)
          result.result.push(this.state.time);
          localStorage.setItem("easy", JSON.stringify(result));
        } else if (this.state.type === '1') {
          if (localStorage.getItem("medium")) {
            var result = JSON.parse(localStorage.getItem("medium"));
          } else {
            var result = { result: [] };
          }

          result.result.push(this.state.time);
          localStorage.setItem("medium", JSON.stringify(result));
        } else if (this.state.type === '2') {
          if (localStorage.getItem("hard")) {
            var result = JSON.parse(localStorage.getItem("hard"));
          } else {
            var result = { result: [] };
          }

          result.result.push(this.state.time);
          localStorage.setItem("hard", JSON.stringify(result));
        }
        window.location.href = "#/play"
      }
    );
  };
  tick() {
    this.setState(
      {
        time: this.state.time + 1
      },
      () => {
        if (this.state.time === 0) {
          clearInterval(this.timerID);
          this.setState({
            visible: true
          });
        }
      }
    );
  }
  componentDidMount() {
    document.getElementById("autoplay4").play()
    this.timerID = setInterval(() => this.tick(), 1000);

    var types = url.parse(this.props.location.search, true).query.type;
    console.log(types);
    this.setState(
      {
        type: types
      },
      () => {
        const cards = document.querySelectorAll(".memory-card");
        cards.forEach(card => {
          let randomPos = Math.floor(Math.random() * 12);
          card.style.order = randomPos;
        });
      }
    );

    var flip = [];
    if (types === "0") {
      for (let i = 0; i < 12; i++) {
        flip.push(this.state.imgs[i]);
      }
    } else if (types === "1") {
      //alert(1);
      for (let i = 0; i < 20; i++) {
        flip.push(this.state.imgs[i]);
      }
    } else if (types === "2") {
      for (let i = 0; i < 24; i++) {
        flip.push(this.state.imgs[i]);
      }
    }
    this.setState(
      {
        flip: flip
      },
      () => {
        console.log(flip);
      }
    );
  }
  flipCard = index => {
   
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
      if (this.state.flip[i].flipped !== true) {
        all = false;
        break;
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
      <div className="start">
        <audio
              src={music1}
              id="autoplay4"
              loop="loop"
            ></audio>
        {this.state.visible ? this.tanwindow1("You failed") : null}
        {this.state.visible2 ? this.tanwindow2("You win") : null}
        <div className="start_head">
          <div className="start_time">Time：{this.state.time}s</div>

          <a href="#/play">
            <div className="back">back</div>
          </a>
        </div>
        <div className="start_body">
          {" "}
          <div
            className={
              this.state.type === "0"
                ? "easy_type"
                : this.state.type === "1"
                ? "medium_type"
                : "hard_type"
            }
          >
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
