import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

type Size = "md" | "lg";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {variant?: Variant; size?: Size};

type LinkProps = ComponentPropsWithoutRef<"a"> & {variant?: Variant; size?: Size};

export default function Button({variant = "primary", size = "md", className, ...props}: ButtonProps | LinkProps) {
	const clases = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ");

	if ("href" in props && props.href)
		return (<a className={clases} {...props as ComponentPropsWithoutRef<"a">}/>);
	return (<button className={clases} {...props as ComponentPropsWithoutRef<"button">}/>);
}