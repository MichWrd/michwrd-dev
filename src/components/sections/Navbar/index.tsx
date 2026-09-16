import styles from "./Navbar.module.css";
import Logo from "./Logo";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarLinks}>
				<div className={styles.navbarMain}>
					<Logo />
					<div className={styles.navbarDivider} aria-hidden="true" />
					<ul className={styles.navbarPrimaryLinks}>
						<li>
							<a href="/">HOME</a>
						</li>
						<li>
							<a href="#about">ABOUT</a>
						</li>
						<li>
							<a href="#skills">SKILLS</a>
						</li>
						<li>
							<a href="#work">WORK</a>
						</li>
						{/* <li><a href="#blog">BLOG</a></li> */}
					</ul>
				</div>
				<a className={styles.navbarContact} href="#contact">CONTACT</a>
			</div>
		</nav>
	);
}
