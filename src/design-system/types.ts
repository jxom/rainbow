export type Example = {
  name: string;
  description?: JSX.Element | JSX.Element[];
  Example?: () => JSX.Element;
  enablePlayroom?: boolean;
  enableCodeSnippet?: boolean;
  showFrame?: boolean;
};

export type Docs = {
  name?: string;
  category: 'Color' | 'Content' | 'Layout' | 'Typography';
  description?: JSX.Element | JSX.Element[];
  examples?: Example[];
};
