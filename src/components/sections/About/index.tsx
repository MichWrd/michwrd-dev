import styles from "./About.module.css";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
	return (
		<section
			id="about"
			aria-labelledby="about-title"
			className={styles.about}
		>
			<SectionHeading
				index="01"
				label="About me"
				title="Who's behind the code"
				id="about-title"
			/>
			<div className={styles.sheet}>
				<div className={styles.visual}>
					<div className={styles.ring} aria-hidden="true" />
					<div className={styles.ring2} aria-hidden="true" />
					<div className={styles.orbit} aria-hidden="true">
						<span/>
					</div>
					<div className={styles.portrait}>
						<img
							className={styles.portraitImage}
							src="/Portrait.png"
							alt="Portrait of me"
						/>
					</div>
				</div>

				<p className={styles.lead}>
					I&apos;ve always liked{" "}
					<span className={styles.mark}>taking things apart</span> to
					see how they work. It started with toys, moved on to Arduino
					and now it&apos;s code.
				</p>

				<div className={styles.bodyBlock}>
					<span className={styles.noteLabel}>
						<span className={styles.slashes}>//</span> mindset
					</span>
					<p className={styles.body}>
						I take things apart, experiment with the results and put
						them back together, and I assure you, this time the
						projects do work. I apply that same mindset to code, and
						it&apos;s why I enjoy full-stack work. That process
						really helps me understand code proyects, and
						I enjoy thinking how people could break it, so I can
						fix it{" "}
						<span className={styles.aside}>
							(yes, I might overthink it)
						</span>
						.
					</p>
				</div>

				<div className={styles.notes}>
					<div className={styles.note}>
						<span className={styles.noteLabel}>
							<span className={styles.slashes}>//</span> a11y
						</span>
						<p className={styles.noteText}>
							I volunteered at Apsocecat, a deafblindness
							association, where accessibility wasn&apos;t a
							checklist, it was &quot;the rule&quot; because a bad
							choice meant fewer target users. Now every interface
							I build has to pass the Apsocecat test{" "}
							<span className={styles.aside}>
								(yes, I&apos;ll zoom in way too far just to
								check)
							</span>
							.
						</p>
					</div>
					<div className={styles.note}>
						<span className={styles.noteLabel}>
							<span className={styles.slashes}>//</span> offline
						</span>
						<p className={styles.noteText}>
							Away from the screen, I&apos;m usually listening to
							music and lately thinking about taking up fishing,
							with my dog as a{" "}
							<span className={styles.aside}>
								(very enthusiastic)
							</span>{" "}
							assistant. Right now I&apos;m looking for a team to
							keep growing with. Chocolate milk is a plus.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
