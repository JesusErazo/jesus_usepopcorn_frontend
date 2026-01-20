import { type ReactNode } from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {
  children: ReactNode;
}
export default function NavBar({ children }: NavBarProps) {
  return <nav className={styles.navBar}>{children}</nav>;
}
