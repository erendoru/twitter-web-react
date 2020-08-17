import React from "react";

import Button from "../components/button";
import NavButton from "../components/navigation-button";
import Navigation from "../components/navigation";

import { Home } from "../components/icons";
import TitleBold from "./../components/title-bold";

export default {
  title: "Buttons",
};

export const Normal = () => <Button>save</Button>;

export const NavigationButton = () => (
  <NavButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavButton>
);

export const Nav = () => <Navigation selectedKey="home" />;
