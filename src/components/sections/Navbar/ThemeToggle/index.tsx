"use client";
import { useSyncExternalStore } from "react";
import styles from "./ThemeToggle.module.css";

function observerThemeChanges(callback: () => void) {
	const observer = new MutationObserver(callback);

	observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
	return () => observer.disconnect();
}
const getCurrentTheme = () => (document.documentElement.dataset.theme);
const getDefaultTheme = () => ("dark");


export default function ThemeToggle() {
	const isDark = useSyncExternalStore(observerThemeChanges, getCurrentTheme, getDefaultTheme) === "dark";
	return (
		<button
			type="button"
			className={styles.themeToggle}
			role="checkbox"
			aria-checked={isDark}
			aria-label={
				isDark ? "Switch to light theme" : "Switch to dark theme"
			}
			onClick={() => {document.documentElement.dataset.theme = isDark ? "light" : "dark"}}
		>
			<svg
				className={styles.toggleIcon}
				aria-hidden="true"
				focusable="false"
				viewBox="0 0 20 20"
				fill="currentColor"
				stroke="none"
			>
				<circle className={styles.sunMoon} cx="10" cy="10" r="8" />
				<g className={styles.sunRay}>
					<circle cx="3" cy="10" r="1.5" />
					<circle cx="6.5" cy="3.938" r="1.5" />
					<circle cx="13.5" cy="3.938" r="1.5" />
					<circle cx="17" cy="10" r="1.5" />
					<circle cx="13.5" cy="16.062" r="1.5" />
					<circle cx="6.5" cy="16.062" r="1.5" />
				</g>
			</svg>
		</button>
	);
}
