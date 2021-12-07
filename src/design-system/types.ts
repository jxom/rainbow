export type Docs = {
  name?: string;
  category: 'Color' | 'Content' | 'Layout' | 'Typography';
  description?: JSX.Element | JSX.Element[];
  examples?: DocsExample[];
};

export type DocsExample = {
  name: string;
  description?: JSX.Element | JSX.Element[];
  Example?: () => JSX.Element;
  enablePlayroom?: boolean;
  enableCodeSnippet?: boolean;
  showFrame?: boolean;
};
