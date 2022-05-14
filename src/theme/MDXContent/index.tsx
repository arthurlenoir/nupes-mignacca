import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import type { Props } from "@theme/MDXContent";
import { SubTitle, Text, Title } from "nupes-ui";

export default function MDXContent({ children }: Props): JSX.Element {
  return (
    <MDXProvider
      components={{
        ...MDXComponents,
        h1: ({ children }) => <Title variant="primary">{children}</Title>,
        h2: ({ children }) => <SubTitle>{children}</SubTitle>,
        h3: ({ children }) => <SubTitle>{children}</SubTitle>,
        p: Text,
      }}
    >
      {children}
    </MDXProvider>
  );
}
