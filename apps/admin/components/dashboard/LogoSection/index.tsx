import NextLink from "next/link";

// project imports
import { DASHBOARD_PATH } from "config";
import Logo from "@/components/Logo";

const LogoSection = () => (
  <NextLink
    href={DASHBOARD_PATH}
    aria-label="theme logo"
    style={{ textDecoration: "none" }}
  >
    <Logo />
  </NextLink>
);

export default LogoSection;
