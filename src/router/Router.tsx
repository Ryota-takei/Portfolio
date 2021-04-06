import { VFC } from "react";
import { Switch, Route } from "react-router";
import { Contact } from "../components/pages/contact/Contact";
import { MainVisual } from "../components/pages/mainVisual/MainVisual";
import { Profile } from "../components/pages/profile/Profile";
import { Works } from "../components/pages/works/Works";
import { HeaderFooter } from "../components/templates/HeaderFooter";

export const Router: VFC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HeaderFooter>
          <MainVisual />
        </HeaderFooter>
      </Route>
      <Route exact path="/profile">
        <HeaderFooter>
          <Profile />
        </HeaderFooter>
      </Route>
      <Route exact path="/works">
        <HeaderFooter>
          <Works />
        </HeaderFooter>
      </Route>
      <Route exact path="/contact">
        <HeaderFooter>
          <Contact />
        </HeaderFooter>
      </Route>
    </Switch>
  );
};
