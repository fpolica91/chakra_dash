import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";
interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExact?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExact = false,
  ...rest
}: ActiveLinkProps) {
  let isActive = false;
  const { asPath } = useRouter();
  if (shouldMatchExact && (asPath === rest.href || asPath === rest.as)) {
    isActive = false;
  }
  const conditionToRenderRelatedPaths =
    asPath.startsWith(String(rest.as)) || asPath.startsWith(String(rest.href));

  if (!shouldMatchExact && conditionToRenderRelatedPaths) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
