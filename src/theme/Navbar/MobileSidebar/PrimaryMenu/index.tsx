import React, { useMemo } from "react";
import {
  useNavbarMobileSidebar,
  useThemeConfig,
} from "@docusaurus/theme-common";
import type { Props as NavbarItemConfig } from "@theme/NavbarItem";
import NavbarItem from "@theme/NavbarItem";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

const isLeftItem = (item: NavbarItemConfig) => item.position === "left";
const isRightItem = (item: NavbarItemConfig) => item.position === "right";
const hasIdItem = (item: NavbarItemConfig) => !!item.id;
const hasNotIdItem = (item: NavbarItemConfig) => !item.id;

// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();

  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();
  const leftItems = useMemo(() => items.filter(isLeftItem), [items]);
  const rightItems = useMemo(() => items.filter(isRightItem), [items]);
  const rightWithIdsItems = useMemo(
    () => rightItems.filter(hasIdItem),
    [rightItems]
  );
  const rightWithoutIdsItems = useMemo(
    () => rightItems.filter(hasNotIdItem),
    [rightItems]
  );

  return (
    <>
      <ul className="menu__list">
        {leftItems.map((item, i) => (
          <NavbarItem
            mobile
            {...item}
            onClick={() => mobileSidebar.toggle()}
            key={i}
          />
        ))}
      </ul>
      <ul className="menu__list menu__list-inline">
        {rightWithIdsItems.map((item, i) => (
          <NavbarItem
            mobile
            {...item}
            onClick={() => mobileSidebar.toggle()}
            key={i}
          />
        ))}
      </ul>
      <ul className="menu__list">
        {rightWithoutIdsItems.map((item, i) => (
          <NavbarItem
            mobile
            {...item}
            onClick={() => mobileSidebar.toggle()}
            key={i}
          />
        ))}
      </ul>
    </>
  );
}
