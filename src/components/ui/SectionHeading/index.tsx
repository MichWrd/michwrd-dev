import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
    index:  string;
    label:  string;
    title?:  string;
    id?:     string;
};

export default function SectionHeading({index, label, title, id}: SectionHeadingProps) {
	if (!title) {
		return (
			<div className={styles.heading}>
				<span className={styles.headingLable}><span className={styles.headingIndex}>{index}</span> - {label}</span>
			</div>
		);
	}
	return (
		<div className={styles.heading}>
            <span className={styles.headingLable}><span className={styles.headingIndex}>{index}</span> - {label}</span>
			<h2 id={id} className={styles.headingTitle}>{title}</h2>
		</div>
	);
}
