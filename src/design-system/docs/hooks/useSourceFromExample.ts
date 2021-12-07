import babel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import { DocsExample } from '../types';

export const useSourceFromExample = ({
  Example,
}: {
  Example: DocsExample['Example'];
}) => {
  let jsxString;
  let element;

  if (Example) {
    const result = Example();
    element = result.value;
    jsxString = result.code.replace(/id={id}/g, '');
    jsxString = prettier
      .format(jsxString, {
        parser: 'babel',
        plugins: [babel],
        printWidth: 60,
      })
      .replace(/;\s$/, '');
  }

  return {
    element,
    jsxString,
  };
};
