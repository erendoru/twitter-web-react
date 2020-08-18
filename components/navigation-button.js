import React from "react";

import Button from "./button";
import cn from "classnames";
import styles from "./navigation-button.module.css";

function NavButton({ href, notify, selected, children, className, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      href={href}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  );
}

export default NavButton;
