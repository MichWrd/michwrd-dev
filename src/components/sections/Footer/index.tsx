import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<nav className={styles.footerLinks}>
				<a href="/">HOME</a>
				<a href="#about">ABOUT</a>
				<a href="#skills">SKILLS</a>
				<a href="#work">WORK</a>
				{/* <a href="#blog">BLOG</a> */}
				<a href="#contact">CONTACT</a>
			</nav>
			<div className={styles.footerMeta}>© 2026 | Mitchel R.</div>
		</footer>
	);
}
