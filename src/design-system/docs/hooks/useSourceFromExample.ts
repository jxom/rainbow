import { DocsExample } from '../types';

export const useSourceFromExample = ({
  Example,
}: {
  Example: DocsExample['Example'];
}) => {
  let element;

  if (Example) {
    element = Example();
  }

  return {
    element,
    jsxString: '',
  };
};
