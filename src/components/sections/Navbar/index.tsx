import styles from "./Navbar.module.css";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
	return (
		<nav className={styles.navbar} aria-label="Main">
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
				<div className={styles.navbarActions}>
					<div className={styles.navbarDividerEnd} aria-hidden="true"/>
					<ThemeToggle />
					<a className={styles.navbarContact} href="#contact">CONTACT</a>
				</div>
			</div>
			<MobileMenu />
		</nav>
	);
}
