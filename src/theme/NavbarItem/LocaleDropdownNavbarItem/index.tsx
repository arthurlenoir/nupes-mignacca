import React from "react";
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem";
import IconLanguage from "@theme/IconLanguage";
import type { Props } from "@theme/NavbarItem/LocaleDropdownNavbarItem";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common";
import { translate } from "@docusaurus/Translate";
import type { LinkLikeNavbarItemProps } from "@theme/NavbarItem";

import styles from "./styles.module.css";
import { Icons } from "nupes-ui";

const IconStyle = {
  verticalAlign: "middle",
};

const FlagPerLanguage = {
  fr: <Icons.FrenchFlag height={20} style={IconStyle} />,
  oc: <Icons.OccitaniaFlag height={20} style={IconStyle} />,
};

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}: Props): JSX.Element {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();

  const localeItems = locales.map((locale): LinkLikeNavbarItemProps => {
    const to = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`;
    return {
      isNavLink: true,
      label: localeConfigs[locale]!.label,
      to,
      target: "_self",
      autoAddBaseUrl: false,
      className: locale === currentLocale ? "dropdown__link--active" : "",
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? translate({
        message: "Languages",
        id: "theme.navbar.mobileLanguageDropdown.label",
        description: "The label for the mobile language switcher dropdown",
      })
    : localeConfigs[currentLocale]!.label;
  const localFlag = FlagPerLanguage[currentLocale];
  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        !mobile && localFlag ? (
          localFlag
        ) : (
          <>
            <IconLanguage className={styles.iconLanguage} />
            {dropdownLabel}
          </>
        )
      }
      items={items}
    />
  );
}
