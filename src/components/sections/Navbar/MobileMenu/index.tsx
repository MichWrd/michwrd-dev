"use client";

import styles from "./MobileMenu.module.css";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";
import { useState } from "react";

// Hamburger toggle + dropdown panel for small screens. Desktop vs. mobile
// this component only owns the open/closed state.
export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.mobileMenu}>
			<div className={styles.mobileBar}>
				<Logo />
				<button
					type="button"
					className={styles.mobileButtonToggle}
					aria-expanded={isOpen}
					aria-controls="mobile-menu-panel"
					aria-label={isOpen ? "Close Menu" : "Open Menu"}
					onClick={() => setIsOpen((open) => !open)}
				>
					{isOpen ? (
						<svg
							className={styles.mobileButtonIcon}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							aria-hidden="true"
						>
							<line x1="6" y1="6" x2="18" y2="18" />
							<line x1="18" y1="6" x2="6" y2="18" />
						</svg>
					) : (
						<svg
							className={styles.mobileButtonIcon}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							aria-hidden="true"
						>
							<line x1="4" y1="7" x2="20" y2="7" />
							<line x1="4" y1="12" x2="20" y2="12" />
							<line x1="4" y1="17" x2="20" y2="17" />
						</svg>
					)}
				</button>
			</div>
			<div
				id="mobile-menu-panel"
				className={styles.mobilePanel}
				data-open={isOpen}
				aria-hidden={!isOpen}
			>
				<ul
					className={styles.mobilePrimaryLinks}
					onClick={(e) => {
						if ((e.target as HTMLElement).closest("a")) {
							setIsOpen(false);
						}
					}}
				>
					<li>
						<span aria-hidden="true" className={styles.mobileLinkIndex}>00</span>
						<a href="/">HOME</a>
					</li>
					<li>
						<span aria-hidden="true" className={styles.mobileLinkIndex}>01</span>
						<a href="#about">ABOUT</a>
					</li>
					<li>
						<span aria-hidden="true" className={styles.mobileLinkIndex}>02</span>
						<a href="#skills">SKILLS</a>
					</li>
					<li>
						<span aria-hidden="true" className={styles.mobileLinkIndex}>03</span>
						<a href="#work">WORK</a>
					</li>
					{/* <li>
						<span aria-hidden="true" className={styles.mobileLinkIndex}>04</span>
						<a href="#blog">BLOG</a>
					</li> */}
				</ul>
				<div className={styles.mobileFooter}>
					<a href="/" download target="_blank" aria-label="Download resume (PDF)" className={styles.mobileResumeButton}>
						Resume
					</a>
					<hr aria-hidden="true"/>
					<div className={styles.mobileSocialLinks}>
						<div className={styles.mobileSocialLinksGroup}>
							<a href="https://github.com/MichWrd" target="_blank">GITHUB</a>
							<a href="https://www.linkedin.com/in/mitchelwrosado/" target="_blank">LINKEDIN</a>
						</div>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</div>
	);
}
