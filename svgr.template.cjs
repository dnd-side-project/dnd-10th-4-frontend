const template = (
  { imports, interfaces, componentName, jsx, exports },
  { tpl },
) => {
  return tpl`
${imports};

${interfaces};

const ${componentName} = ({ ...props }: SVGProps<SVGSVGElement>) => (
  ${jsx}
);

${exports};
`;
};

module.exports = template;
