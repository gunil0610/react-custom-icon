/* eslint-disable import/no-extraneous-dependencies */
import base64SVG from "@repo/build-icons/utils/base64SVG.mjs";

export default ({
  componentName,
  iconName,
  children,
  getSvg,
  deprecated,
  deprecationReason,
}) => {
  const svgContents = getSvg();
  const svgBase64 = base64SVG(svgContents);

  return `
import createLucideIcon from '../createLucideIcon';

/**
 * @component @name ${componentName}
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,${svgBase64}) - https://lucide.dev/icons/${iconName}
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 * ${deprecated ? `@deprecated ${deprecationReason}` : ""}
 */
const ${componentName} = createLucideIcon('${componentName}', ${JSON.stringify(children)});

export default ${componentName};
`;
};