import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import type { Props } from "@theme/MDXContent";
import BlockQuote from "@site/src/components/BlockQuote";
import ListItem from "@site/src/components/ListItem";
import Text from "@site/src/components/Text";
import { SubTitle, Title } from "nupes-ui";

export default function MDXContent({ children }: Props): JSX.Element {
  return (
    <MDXProvider
      components={{
        ...MDXComponents,
        h1: ({ children }) => <Title variant="primary">{children}</Title>,
        h2: ({ children }) => <Title variant="light-primary">{children}</Title>,
        h3: ({ children }) => (
          <Title variant="light-secondary">{children}</Title>
        ),
        h4: ({ children }) => <SubTitle variant="primary">{children}</SubTitle>,
        h5: ({ children }) => (
          <SubTitle variant="secondary">{children}</SubTitle>
        ),
        p: Text,
        blockquote: BlockQuote,
        li: ListItem,
      }}
    >
      {children}
    </MDXProvider>
  );
}
