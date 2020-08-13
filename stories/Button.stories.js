import React from "react";

import Button from "../components/button";
import NavButton from "../components/navigation-button";
import Navigation from "../components/navigation";

export default {
  title: "Buttons",
};

export const Normal = () => <Button>save</Button>;

export const NavigationButton = () => <NavButton>save me</NavButton>;

export const Nav = () => <Navigation />;
