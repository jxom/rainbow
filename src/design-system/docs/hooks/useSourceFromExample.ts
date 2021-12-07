import babel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import reactElementToJsxString from 'react-element-to-jsx-string';
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

    if ('value' in result) {
      jsxString = result.code.replace(/id={id}/g, '');
      element = result.value;
    } else {
      element = result;
      jsxString = reactElementToJsxString(element, {
        filterProps: ['onChange', 'onBlur', 'onFocus'],
        showDefaultProps: false,
        showFunctions: false,
        useBooleanShorthandSyntax: false,
      });
    }

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
