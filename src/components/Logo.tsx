import { type ReactNode } from "react";

interface LogoProps {
  children: ReactNode;
}

export default function Logo({ children }: LogoProps) {
  return <h3 className="brand">{children}</h3>;
}
