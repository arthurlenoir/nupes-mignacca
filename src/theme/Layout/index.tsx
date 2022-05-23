import React, { ComponentProps } from "react";
import type LayoutType from "@theme/Layout";
import Layout from "@theme-original/Layout";
import { ThemeProvider, NupesColors } from "nupes-ui";
import tinycolor, { Instance } from "tinycolor2";
import { createGlobalStyle, css } from "styled-components";

interface GlobalStyleProps {
  primary: Instance;
}
const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({ primary }: GlobalStyleProps) => css`
    :root {
      --ifm-color-primary: ${primary.toString()};
      --ifm-color-primary-dark: ${primary.darken(5).toString()};
      --ifm-color-primary-darker: ${primary.darken(10).toString()};
      --ifm-color-primary-darkest: ${primary.darken(15).toString()};
      --ifm-color-primary-light: ${primary.lighten(5).toString()};
      --ifm-color-primary-lighter: ${primary.lighten(10).toString()};
      --ifm-color-primary-lightest: ${primary.lighten(15).toString()};
      --ifm-code-font-size: 95%;
      --ifm-list-paragraph-margin: 0;
      --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
      --ifm-font-family-base: "Acumin Pro", system-ui, -apple-system, Segoe UI,
        Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont,
        "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol";
    }
  `}
`;

type Props = ComponentProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  const primary = tinycolor(NupesColors.GREEN);
  return (
    <ThemeProvider primary={NupesColors.GREEN} secondary={NupesColors.PURPLE}>
      <Layout {...props} />
      <GlobalStyle primary={primary} />
    </ThemeProvider>
  );
}
