export type Example = {
  name: string;
  description?: JSX.Element;
  playroom?: boolean;
  Example: () => JSX.Element;
};

export type Docs = {
  name?: string;
  category: 'Color' | 'Layout' | 'Typography';
  description?: JSX.Element | JSX.Element[];
  examples?: Example[];
};
