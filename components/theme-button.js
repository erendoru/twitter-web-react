import React from "react";

import Button from "./button";
import cn from "classnames";
import styles from "./navigation-button.module.css";

function ThemeButton({ className, children, ...props }) {
  return (
    <Button className={cn(styles.button, className)} {...props}>
      {children}
    </Button>
  );
}

export default ThemeButton;
