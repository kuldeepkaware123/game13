import React, { useState } from "react";
import Wheel from "./Wheel";
import Board from "./Board";
import Slider from "react-slick";
import { List, Button, Progress } from "@mantine/core";
import { FaArrowLeft, FaArrowCircleLeft, FaInfoCircle } from "react-icons/fa";

const RouletteWrapper = () => {
  const [chipNum, setChipNum] = useState<number | undefined>(undefined); // Specify the type as number | undefined

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const onChipClick = (chipNum: number) => {
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
        <table className="rouletteWheelWrapper table-responsive">
          <tr className="topbar">
            <td className="fs-2 align-middle text-white topicon">
              <FaArrowCircleLeft />
            </td>
            <td>
              <button className="btn ">
                USER ID :- <span className="text-success">1234</span>
              </button>
            </td>
            <td>
              <button className="btn ">
                POINT :- <span className="text-primary">1234</span>
              </button>
            </td>
            <td>
              <button className="btn ">
                WIN :- <span className="text-success">1234</span>
              </button>
            </td>
            <td>
              <button className="btn ">
                DATE :- <span>1/3/23</span>
              </button>
            </td>
            <td>
              <button className="btn ">
                TIME :- <span>02:00</span>
              </button>
            </td>
            <td className="fs-2 text-white topicon">
              <FaInfoCircle />
            </td>
          </tr>
          <tr className="topbar">
            <td colSpan={3}>
              <div className="mb-3">
                <button className="btn ">
                  <span> 01 : 00</span>
                </button>
              </div>

              <Slider {...settings}>
                <div className="roulette-actions">
                  <ul>
                    <li className={"board-chip"}>
                      <div
                        className="chip-100"
                        onClick={() => onChipClick(100)}
                      >
                        100
                      </div>
                    </li>
                    <li className={"board-chip"}>
                      <span>
                        <div
                          className="chip-20"
                          onClick={() => onChipClick(20)}
                        >
                          20
                        </div>
                      </span>
                    </li>
                    <li className={"board-chip"}>
                      <span>
                        <div
                          className="chip-10"
                          onClick={() => onChipClick(10)}
                        >
                          10
                        </div>
                      </span>
                    </li>
                    <li className={"board-chip"}>
                      <span>
                        <div className="chip-5" onClick={() => onChipClick(5)}>
                          5
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
              </Slider>

              <div>
                <button className="btn btn2">
                  <span>SPECIFIC CANCEL</span>
                </button>

                <button className="btn btn2">
                  <span>CENCEL BET</span>
                </button>
              </div>
            </td>
            <td>
              <Wheel
                rouletteData={dummyData.rouletteData}
                number={dummyData.number}
              />
            </td>
            <td colSpan={3}>
              <div className="mb-3 text-end">
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
              <div className="mb-3 text-end">
                <button className="btn btn2">
                  <span>TAKE</span>
                </button>
              </div>

              <div className="text-end">
                <button className="btn btn2">
                  <span>PREVIOUS BET</span>
                </button>

                <button className="btn btn2">
                  <span>BET OK</span>
                </button>
              </div>
            </td>
          </tr>
        </table>
        <Board
          chipsData={{ selectedChip: null, placedChips: new Map() }}
          rouletteData={dummyData.rouletteData}
        />
      </div>
    </div>
  );
};

export default RouletteWrapper;
