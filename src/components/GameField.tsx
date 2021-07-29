import { colors } from "palette/colors";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";

interface GameFieldProps {
  size: number;
  onActiveCellClick: () => void;
  timeoutMs: number;
}

export const GameField = memo(
  (props: GameFieldProps) => {
    let timeoutId: any;
    const { size, onActiveCellClick, timeoutMs } = props;

    const [activeCell, setActiveCell] = useState<number>(
      getRandomCellNumber(size, -1)
    );

    const cellArray = Array<boolean>(size);
    for (let i = 0; i < cellArray.length; i++) {
      cellArray[i] = false;
    }

    cellArray[activeCell] = true;

    const handleCellClick = () => {
      clearTimeout(timeoutId);
      onActiveCellClick();
      setActiveCell(getRandomCellNumber(size, activeCell));
    };

    const getVisibleCell = (visible: boolean, id: number) => (
      <Cell key={id}
        style={{
          visibility: visible ? "visible" : "hidden",
        }}
        onClick={() => (visible ? handleCellClick() : null)}
      ></Cell>
    );

    useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeoutId = setTimeout(
        () => setActiveCell(getRandomCellNumber(size, activeCell)),
        timeoutMs
      );

      return () => clearTimeout(timeoutId);
    });

    return (
        <Field>
          {cellArray.map((c, id) => getVisibleCell(c, id))}
        </Field>
    );
  },
  () => true
);

function getRandomCellNumber(arraySize: number, current: number) {
  let result = current;
  while (result === current) {
    result = Math.floor(Math.random() * arraySize);
  }
  return result;
}

const Field = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(4, 1fr);
  background: white;
  border-radius: 1rem;
  height: 100%;
`;

const Cell = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: ${() => colors.secondary};
`;
