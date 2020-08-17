import React from "react";

import NavButton from "./navigation-button";
import TitleBold from "../components/text-bold";
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More,
} from "./icons";

import styles from "./navigation.module.css";

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavButton>
        <Twitter />
      </NavButton>
      <NavButton selected={selectedKey === "home"}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === "explore"}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavButton>
      <NavButton notify={13} selected={selectedKey === "notification"}>
        <Notification />
        <TitleBold>Notifications</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === "messages"}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === "bookmarks"}>
        <Bookmark />
        <TitleBold>Bookmarks</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === "lists"}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === "profile"}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavButton>
      <NavButton selected={selectedKey === "more"}>
        <More />
        <TitleBold>More</TitleBold>
      </NavButton>
    </nav>
  );
}

export default Navigation;
