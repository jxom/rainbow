export type Docs = {
  name: string;
  category: 'Content' | 'Layout' | 'Typography';
  description?: JSX.Element | JSX.Element[];
  examples: {
    name: string;
    description?: JSX.Element;
    Example: () => JSX.Element;
  }[];
};
