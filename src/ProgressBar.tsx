import { LinearProgress } from "@mui/material";
import React from "react";
import anime from "animejs";

import { useEffect } from "react";
import { GameStages } from "./Global";

const ProgressBarRound = (props: { stage: GameStages, maxDuration: number, currentDuration: number }): JSX.Element => {
  useEffect(() => {
  useEffect(() => {
    console.log("stage : " + props.stage)
    console.log("maxDuration : " + props.maxDuration)
    console.log("currentDuration : " + props.currentDuration)
    var duration = (props.maxDuration-props.currentDuration)*1000
    console.log(duration);
    anime({
      targets: 'progress',
      value: [0,100],
      easing: 'linear',
      autoplay: true,
      duration: duration
    })
    
  }, [props.stage, props.maxDuration, props.currentDuration]);
  }, [props.stage, props.maxDuration, props.currentDuration]);

  return (
    <div className="progressRound">
      <div className="progressRoundTitle">
        {
          (props.stage === GameStages.PLACE_BET) ? "PLACE BET"
            : (props.stage === GameStages.WINNERS) ? "WINNERS"
              : "NO MORE BETS"
        }
      </div>
      <LinearProgress className="linearProgressRounds" value={0} />
    </div>
  );
};

export default ProgressBarRound;
