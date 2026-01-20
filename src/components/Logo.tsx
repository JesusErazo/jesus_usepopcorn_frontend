import { type ReactNode } from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  children: ReactNode;
}

export default function Logo({ children }: LogoProps) {
  return <h3 className={styles.logo}>{children}</h3>;
}
