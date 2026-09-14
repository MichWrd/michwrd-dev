import type { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
    children: ReactNode;
};

// Shared max-width + side padding wrapper every section uses so the page
// content lines up consistently.
export default function Container({ children }: ContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
