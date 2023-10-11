import React, { useState } from "react";
import Wheel from "./Wheel";
import Board from "./Board";
import Slider from "react-slick";
import { List, Button, Progress } from "@mantine/core";
import { FaArrowLeft, FaArrowCircleLeft, FaInfoCircle } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import CustomSlider from "./carousal";

const RouletteWrapper = () => {
  const [chipNum, setChipNum] = useState(undefined);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const onChipClick = (chipNum) => {
    setChipNum(chipNum);
    alert(`You have added ${chipNum}`);
  };

  const dummyData = {
    rouletteData: {
      numbers: [
        0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
        5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
      ],
    },
    number: {
      next: 10,
    },
    winners: [
      { username: "User1", sum: 100 },
      { username: "User2", sum: 50 },
      { username: "User3", sum: 75 },
    ],
    history: [19, 20, 21],
    stage: "WINNERS",
    time_remaining: 10,
  };

  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-1 col-sm-1 ">
              <div className="fs-2 text-white topicon">
                <FaArrowCircleLeft />
              </div>
            </div>
            <div className="col-xl-10 col-xs-10">
              <div className="row topbar">
                <div className="col-xl-7 col-sm-5">
                  <button className="btn">
                    USER ID :- <span className="text-success">1234</span>
                  </button>
                  <button className="btn">
                    POINT :- <span className="text-primary">1234</span>
                  </button>
                  <button className="btn">
                    WIN :- <span className="text-success">1234</span>
                  </button>
                </div>
                <div className="col-xl-5 col-xs-5">
                  <button className="btn">
                    DATE :- <span className="text-primary">1/3/23</span>
                  </button>
                  <button className="btn">
                    TIME :- <span className="text-primary">02:00</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-sm-1">
              <div className="fs-2 text-white topicon">
                <FaInfoCircle />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row topbar secondsection ">
            <div className="col-4 leftbar">
              <div>
                <button className="btn">
                  <span> 01 : 00</span>
                </button>
              </div>
              <CustomSlider />

              <div className="d-flex">
                <button className="btn btn2">
                  <span>SPECIFIC CANCEL</span>
                </button>

                <button className="btn btn2">
                  <span>CENCEL BET</span>
                </button>
              </div>
            </div>
            <div className="col-4">
              <Wheel
                rouletteData={dummyData.rouletteData}
                number={dummyData.number}
              />
            </div>
            <div className="col-4 rightbar text-end">
              <div>
                <button className="btn  w-75 text-start">
                  {dummyData.history &&
                    dummyData.history.map((entry, index) => (
                      <span
                        style={{ padding: "0px 10px" }}
                        key={index}
                        className={
                          entry === 0
                            ? "green"
                            : dummyData.rouletteData.numbers.includes(entry)
                            ? "black"
                            : "red"
                        }
                      >
                        {entry} |
                      </span>
                    ))}
                </button>
              </div>
              <div>
                <button className="btn btn2">
                  <span>TAKE</span>
                </button>
              </div>
              <div className="d-flex">
                <button className="btn btn2">
                  <span>PREVIOUS BET</span>
                </button>

                <button className="btn btn2">
                  <span>BET OK</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Board
          chipsData={{ selectedChip: null, placedChips: new Map() }}
          rouletteData={dummyData.rouletteData}
        />
      </div>
    </div>
  );
};

export default RouletteWrapper;
