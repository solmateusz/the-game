import { GameField } from "components/GameField";
import { PageFrame } from "components/PageFrame";
import { Routes } from "navigation/Routes";
import { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addScore } from "redux/scoresSlice";
import { selectNickname, setLastScore } from "redux/userSlice";
import styled from "styled-components";

export const Game = memo(
  () => {
    const gameDurationSec = 30;
    const cellChangeIntervalMs = 700;
    const fieldSize = 16;

    const [score, setScore] = useState<number>(0);
    const [remainingTime, setRemainingTime] = useState<number>(gameDurationSec);

    const history = useHistory();
    const dispatch = useAppDispatch();
    const nickname = useAppSelector(selectNickname);

    useEffect(() => {
      if (!nickname) {
        history.push(Routes.Start);
      }

      const intervalId = setInterval(
        () => setRemainingTime((prevValue) => prevValue - 1),
        1000
      );

      return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (remainingTime === 0) {
        dispatch(addScore({ nickname, score }));
        dispatch(setLastScore(score));
        history.push(Routes.Score);
      }
    });

    return (
      <PageFrame>
        <Wrapper>
          <Header>Hit as many rectangles as possible!</Header>
          <GameField
            size={fieldSize}
            onActiveCellClick={() => {
              setScore((preScore) => preScore + 1);
            }}
            timeoutMs={cellChangeIntervalMs}
          />
          <Score>Score: {score}</Score>
          <Time>Time remaining: {remainingTime}</Time>
        </Wrapper>
      </PageFrame>
    );
  },
  () => true
);

const Header = styled.div`
  position: absolute;
  top: -1.5rem;
  text-align: center;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;

const Score = styled.div`
  float: left;
  margin-top: 0.3rem;
`;

const Time = styled.div`
  float: right;
  margin-top: 0.3rem;
`;
