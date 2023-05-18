module.exports = {
  rules: {
    "no-export-default": {
      meta: {
        type: "problem",
        docs: {
          description: "disallow the use of `export default`",
          category: "Best Practices",
          recommended: true,
        },
        fixable: "code",
      },
      create(context) {
        return {
          ExportDefaultDeclaration(node) {
            context.report({
              node,
              message: "Using `export default` is not allowed.",
              fix(fixer) {
                return fixer.replaceText(node, `/* ${node.type} */`);
              },
            });
          },
        };
      },
    },
  },
};
