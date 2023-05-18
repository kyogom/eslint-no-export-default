module.exports = {
  rules: {
    'no-export-default': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow the use of export default',
          category: 'Best Practices',
          recommended: true,
        },
        fixable: 'code',
      },
      create(context) {
        return {
          ExportDefaultDeclaration(node) {
            context.report({
              node,
              message: 'Unexpected use of export default',
              fix: fixer => {
                const declaration = node.declaration;
                if (declaration.type === 'FunctionDeclaration') {
                  const name = declaration.id.name;
                  const sourceCode = context.getSourceCode();
                  const text = sourceCode.getText(node);
                  return fixer.replaceText(node, `function ${name}${text.slice(text.indexOf('('))}`);
                } else {
                  return fixer.replaceText(node, `const ${declaration.name} = ${context.getSourceCode().getText(node.declaration)};`);
                }
              }
            });
          }
        }
      }
    }
  }
}
