import React from "react";

import cn from "classnames";
import styles from "./stack.module.css";

function Stack({ gap = 10, children, column = false }) {
  return (
    <div
      className={cn([styles.stack, column && styles.column])}
      style={{ "--gap": `${gap}px` }}
    >
      {children}
    </div>
  );
}

export default Stack;
