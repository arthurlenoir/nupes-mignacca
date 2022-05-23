import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import type { Props } from "@theme/NavbarItem/NavbarNavLink";
import IconExternalLink from "@theme/IconExternalLink";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { isRegexpStringMatch } from "@docusaurus/theme-common";
import { Icons } from "nupes-ui";

const dropdownLinkActiveClass = "dropdown__link--active";

const IconPerId: Record<string, React.FC | undefined> = {
  facebook: Icons.FacebookIcon,
  instagram: Icons.InstagramIcon,
  telegram: Icons.TelegramIcon,
  tiktok: Icons.TiktokIcon,
  twitter: Icons.TwitterIcon,
};

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
  activeClassName = "",
  prependBaseUrlToHref,
  id,
  ...props
}: Props): JSX.Element {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const isExternalLink = label && href && !isInternalUrl(href);
  const isDropdownLink = activeClassName === dropdownLinkActiveClass;

  // Link content is set through html XOR label
  const linkContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {
        children: (
          <>
            {label}
            {isExternalLink && (
              <IconExternalLink
                {...(isDropdownLink && { width: 12, height: 12 })}
              />
            )}
          </>
        ),
      };

  if (id) {
    const Icon = IconPerId[id];
    if (Icon) {
      return (
        <Link
          href={prependBaseUrlToHref ? normalizedHref : href}
          {...props}
          {...linkContentProps}
        >
          <Icon />
        </Link>
      );
    }
  }
  
  if (href) {
    return (
      <Link
        href={prependBaseUrlToHref ? normalizedHref : href}
        {...props}
        {...linkContentProps}
      />
    );
  }

  return (
    <Link
      to={toUrl}
      isNavLink
      activeClassName={
        !props.className?.includes(activeClassName) ? activeClassName : ""
      }
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl),
      })}
      {...props}
      {...linkContentProps}
    />
  );
}
