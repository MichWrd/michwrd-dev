import styles from "./Hero.module.css";
import Button from "@/components/ui/Button";

export default function Hero() {
	return (
		<section id="hero" aria-labelledby="hero-title" className={styles.hero}>
			<div className={styles.heroContent}>
				<div className={styles.heroEyebrow}>
					<span
						className={styles.heroEyebrowDot}
						aria-hidden="true"
					/>
					<span className={styles.heroEyebrowText}>
						Full-stack developer · Spain
					</span>
				</div>

				<h1 id="hero-title" className={styles.heroTitle}>
					Welcome to my corner of the{" "}
					<span className={styles.heroTitleAccent}>internet</span>.
				</h1>

				<p className={styles.heroIntro}>
					I'm <span className={styles.heroName}>Mitchel Rosado</span>, a
					developer who loves building things.<br />
					Here you'll find what I've made, what I'm learning, and what I think about it.
				</p>

				<div className={styles.heroActions}>
					<Button variant="primary" size="lg" className={styles.heroPrimaryButton} href="#work">
						See my work
					</Button>

					<Button variant="secondary" size="lg" className={styles.heroSecondaryButton} href="/">
						Get my resume
					</Button>
				</div>
			</div>

			<div className={styles.heroVisual}>
				<div className={styles.heroRing} aria-hidden="true" />
				<div className={styles.heroRing2} aria-hidden="true" />
				<div className={styles.heroAsto} aria-hidden="true"><span aria-hidden="true"/></div>
				<div className={styles.heroAsto2} aria-hidden="true"><span aria-hidden="true"/></div>
				<div className={styles.heroPortrait}>
					<img
						className={styles.heroPortraitImage}
						src="/Portrait.png"
						alt="Portrait of me"
					/>
				</div>
			</div>

			<div className={styles.heroScroll}>
				<span className={styles.heroScrollLabel}>Scroll</span>
				<div className={styles.heroScrollLine} aria-hidden="true" />
			</div>
		</section>
	);
}
