import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    href?: undefined;
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: Variant;
    href: string;
};

// Used for every CTA in the design (Ver proyectos, Descargar CV, Ver demo,
// Código, Ping me, Send, the navbar Contact pill). Renders a <a> when href
// is passed, otherwise a <button>.
export default function Button({
    variant = "primary",
    className,
    ...props
}: ButtonProps | LinkProps) {
    const classes = [styles.button, styles[variant], className]
        .filter(Boolean)
        .join(" ");

    if ("href" in props && props.href) {
        return (
            <a
                className={classes}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
            />
        );
    }

    return (
        <button
            className={classes}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        />
    );
}
