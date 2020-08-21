import React from "react";

import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import Photo from "../photo";
import styles from "./tweet.module.css";
import IconButton from "../icon";
import * as Icon from "../icons";

function Tweet({ name, slug, datetime, children, text }) {
  return (
    <article className={styles.tweet}>
      <div className={styles.avatar}>
        <Photo />
      </div>

      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> ·
          <span>{formatDistanceToNowStrict(datetime)}</span>
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            <span>12</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Like />
            </IconButton>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default Tweet;
