import React from "react";
import Wheel from "./Wheel";
import Board from "./Board";
import { Col, Progress } from "@mantine/core";
import Swal from "sweetalert2";

const RouletteWrapper = () => {
  const dummyData = {
    rouletteData: {
      numbers: [
        0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
        5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
      ],
    },
    number: {
      next: 25,
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
        <table className={"rouletteWheelWrapper"}>
          <tr className="topbar">
            <td className="fs-2"> ⬅ </td>
            <td>
              <button className="btn btn-primary">
                USER ID :- <span className="text-success">1234</span>
              </button>
            </td>
            <td>
              <button className="btn btn-primary">
                POINT :- <span className="text-primary">1234</span>
              </button>
            </td>
            <td>
              <button className="btn btn-primary">
                WIN :- <span className="text-success">1234</span>
              </button>
            </td>
            <td>
              <button className="btn btn-primary">
                DATE :- <span>1/3/23</span>
              </button>
            </td>
            <td>
              <button className="btn btn-primary">
                TIME :- <span>02:00</span>
              </button>
            </td>
            <td className="fs-2"> ℹ️ </td>
          </tr>
          <tr className="topbar">
            <td colSpan={3}>
              <div className="mb-3">
                <button className="btn btn-primary">
                  <span> 01 : 00</span>
                </button>
              </div>

              <div>
                <button className="btn btn-primary">
                  <span>SPECIFIC CANCEL</span>
                </button>

                <button className="btn btn-primary">
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
                <button className="btn btn-primary w-75">
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

              <div className="text-end">
                <button className="btn btn-primary">
                  <span>PREVIOUS BET</span>
                </button>

                <button className="btn btn-primary">
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
