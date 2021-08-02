import { Button } from "components/Button";
import { PageFrame } from "components/PageFrame";
import { Routes } from "navigation/Routes";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { selectAllScores } from "redux/scoresSlice";
import { selectLastScore, selectNickname } from "redux/userSlice";
import styled from "styled-components";

export const Score = () => {
  const history = useHistory();
  let scores = [...useAppSelector(selectAllScores)]
    .sort((a, b) => (a.score > b.score ? -1 : a.score < b.score ? 1 : 0))
    .slice(0, 10);

  const lastScore = useAppSelector(selectLastScore);
  const nickname = useAppSelector(selectNickname);

  return (
    <PageFrame>
      <div>
        <Button onClick={() => history.push(Routes.Start)}>
          Back to Start Page
        </Button>
        {nickname && (
          <Button onClick={() => history.push(Routes.Game)}>Try Again</Button>
        )}
        {lastScore !== undefined && (
          <div>
            {nickname}, your last score: {lastScore}
          </div>
        )}
        <DivWithMargin>Top 10 scores:</DivWithMargin>
        <TableWrapper>
          <Tabel>
            <thead>
              <tr>
                <th>Position</th>
                <th>Nickname</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((s, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{s.nickname}</td>
                  <td>{s.score}</td>
                </tr>
              ))}
            </tbody>
          </Tabel>
        </TableWrapper>
      </div>
    </PageFrame>
  );
};

const DivWithMargin = styled.div`
  margin-top: 1rem;
`;

const TableWrapper = styled.div`
  width: "100%";
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Tabel = styled.table`
  width: 70%;
`;
