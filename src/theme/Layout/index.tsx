import React, { ComponentProps } from "react";
import type LayoutType from "@theme/Layout";
import Layout from "@theme-original/Layout";
import { ThemeProvider, NupesColors, OtherColors, Title } from "nupes-ui";

type Props = ComponentProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <ThemeProvider primary={NupesColors.GREEN} secondary={NupesColors.PURPLE}>
      <Layout {...props} />
    </ThemeProvider>
  );
}
