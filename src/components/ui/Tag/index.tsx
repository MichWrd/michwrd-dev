import type { ReactNode } from "react";
import styles from "./Tag.module.css";

type TagProps = {
    children: ReactNode;
    dashed?: boolean;
};

// Small mono-font pill. Covers the skill grid chips, the tech tags on a
// project card, and the dashed "next skills" chips.
export default function Tag({ children, dashed = false }: TagProps) {
    const classes = [styles.tag, dashed && styles.dashed]
        .filter(Boolean)
        .join(" ");

    return <span className={classes}>{children}</span>;
}
