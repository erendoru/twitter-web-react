import React from "react";

import { withKnobs, boolean } from "@storybook/addon-knobs";

import Button from "../components/button";
import NavButton from "../components/navigation-button";
import Navigation from "../components/navigation";
import ThemeButton from "../components/theme-button";

import Stack from "../components/stack";
import { Home } from "../components/icons";
import TextBold from "./../components/text-bold";

export default {
  title: "Buttons",
  decorators: [withKnobs],
};

export const Normal = () => <Button>Save</Button>;
export const Theme = () => (
  <Stack column>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Big Button
    </ThemeButton>
  </Stack>
);

export const NavigationButton = () => (
  <NavButton>
    <Home />
    <TextBold>Home</TextBold>
  </NavButton>
);

export const Nav = () => {
  const flat = boolean("Flat", false);
  return <Navigation flat={flat} selectedKey="home" />;
};
