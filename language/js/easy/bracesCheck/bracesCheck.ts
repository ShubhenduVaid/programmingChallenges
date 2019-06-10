export const bracesCheck =
    `
Check for braces [,{,( and ],},) in an expression.

let expression = '{789+={]}';

console.log(checkExpression(expression));

function checkExpression(expression) {
    let openBraces = { '(': 0, '{': 0, '[': 0 };
    let closeBraces = { ')': 0, '}': 0, ']': 0 };
    let relationObj = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    let bracesStack = [];
    const EMPTY = 'Expression is empty.';
    const WRONG = 'Expression is wrong.';
    const CORRECT = 'Expression is correct.';
    if (expression.length === 0) {
        return EMPTY;
    }
    for (let index = 0; index < expression.length; index++) {
        const element = expression[index];
        if (openBraces[element] !== undefined) {
            bracesStack.push(element);
        }
        else if (closeBraces[element] !== undefined) {
            if (relationObj[element] !== bracesStack.pop()) {
                return WRONG;
            }
        }
    }
    if (bracesStack.length === 0) {
        return CORRECT;
    }
    else {
        return WRONG;
    }
}
`;
