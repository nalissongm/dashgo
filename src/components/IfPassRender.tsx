import { ReactNode } from "react";
interface IfPassRender {
  check: boolean;
  children: ReactNode;
}

export default function IfPassRender({
  check,
  children,
}: IfPassRender): JSX.Element {
  return check ? <>{children}</> : null;
}
