export type Example = {
  name: string;
  description?: JSX.Element;
  playroom?: boolean;
  Example: () => JSX.Element;
};

export type Docs = {
  name?: string;
  category: 'Color' | 'Content' | 'Layout' | 'Typography';
  description?: JSX.Element | JSX.Element[];
  examples?: Example[];
};
