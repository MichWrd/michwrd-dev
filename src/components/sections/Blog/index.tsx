import styles from "./Blog.module.css";

// Not rendered on the page yet — see the SHOW_BLOG flag in src/app/page.tsx.
export default function Blog() {
    return (
        <section id="blog" className={styles.blog}>
            <span>Blog</span>
        </section>
    );
}
