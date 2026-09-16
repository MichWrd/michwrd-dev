import Link from "next/link";
import styles from "./Logo.module.css";

// Wordmark link — kept as its own component
export default function Logo() {
	return (
		<Link href="/" aria-label="Mitchel Rosado — Home" className={styles.logo}>
			<span className={styles.hash} aria-hidden="true">
				#
			</span>
			<span className={styles.wordmark}>michwrd</span>
		</Link>
	);
}
