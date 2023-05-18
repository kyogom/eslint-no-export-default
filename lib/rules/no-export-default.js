module.exports = {
  rules: {
    "no-export-default": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow the use of export default",
          category: "Best Practices",
          recommended: true,
        },
        fixable: "code",
      },
      create: function (context) {
        return {
          ExportDefaultDeclaration(node) {
            context.report({
              node,
              message: 'Using "export default" is not allowed',
            });
          },
        };
      },
    },
  },
};
