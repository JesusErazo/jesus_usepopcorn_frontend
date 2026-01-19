import { type ReactNode } from "react";

interface NavBarProps {
  children: ReactNode;
}
export default function NavBar({ children }: NavBarProps) {
  return <nav className="main-header">{children}</nav>;
}
