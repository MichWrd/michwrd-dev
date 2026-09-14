import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
    title: string;
};

// The "# Section title ──────" pattern repeated at the top of About, Work,
// Blog and Contact: a muted "#", the heading, then a rule filling the rest
// of the row.
export default function SectionHeading({ title }: SectionHeadingProps) {
    return (
        <div className={styles.heading}>
            <h3>
                <span className={styles.hash}>#</span> {title}
            </h3>
            <div className={styles.rule} />
        </div>
    );
}
