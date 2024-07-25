module.exports = {
    meta: {
        type: "problem",
        messages: {
            emptyCatch: 'Empty catch should have a value.',
        },
        fixable: "code"
    },
    create(context) {
        return {
            ArrowFunctionExpression(node) {
                if (node.body.body.length === 0) {
                    context.report({ 
                        node: node.body, 
                        messageId: 'emptyCatch',
                        /*fix(fixer) {
                            return fixer.insertTextAfter(node, "console.log(error);");
                        } */
                    });
                }
            }
        }
    }
};