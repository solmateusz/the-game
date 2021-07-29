import { Game } from "pages/Game";
import { Score } from "pages/Score";
import { Start } from "pages/Start";
import { Routes } from "./Routes";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const RouterConfig = () => {
  let location = useLocation();
  return (
    <TransitionGroup className="page-transition-group">
      <CSSTransition key={location.key} classNames="page-frame" timeout={800} >
        <Switch location={location}>
          <Route exact path={Routes.Start} component={Start} />
          <Route exact path={Routes.Game} component={Game} />
          <Route exact path={Routes.Score} component={Score} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
