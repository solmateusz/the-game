import { Button } from "components/Button";
import { Input } from "components/Input";
import { PageFrame } from "components/PageFrame";
import { Routes } from "navigation/Routes";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectNickname, setNickname } from "redux/userSlice";

interface FormElements extends HTMLFormControlsCollection {
  nickname: HTMLInputElement;
}

interface FormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const Start = () => {
  const nicknameField = "nickname";
  const dispatch = useAppDispatch();
  const nickname = useAppSelector(selectNickname);
  const [error, setError] = useState<string>();

  const history = useHistory();

  const onStartGameClick = (e: React.FormEvent<FormElement>) => {
    e.preventDefault();
    const nickname = e.currentTarget.elements.nickname.value;

    if (!nickname) {
      setError("Please enter nickname here!");
      return;
    }

    dispatch(setNickname(nickname));
    history.push(Routes.Game);
  };

  return (
    <PageFrame>
      <label><h1>Welcome to The Game</h1></label>
      <form onSubmit={onStartGameClick}>
        <label htmlFor={nicknameField}>Please enter nickname:</label>
        <Input id={nicknameField} defaultValue={nickname} placeholder={error} />
        <Button type="submit">Start Game</Button>
        <Button type="button" onClick={() => history.push(Routes.Score)}>
          Show High Scores
        </Button>
      </form>
    </PageFrame>
  );
};
