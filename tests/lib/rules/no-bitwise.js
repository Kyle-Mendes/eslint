/**
 * @fileoverview Tests for no-bitwise rule.
 * @author Nicholas C. Zakas
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-bitwise"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("no-bitwise", rule, {
    valid: [
        "a + b",
        "!a",
        "a += b",
        { code: "~[1, 2, 3].indexOf(1)", options: [{ allow: ["~"] }]},
        { code: "~1<<2 === -8", options: [{ allow: ["~", "<<"] }]},
        { code: "~1<<2 === -8", options: [{ allow: ["~", "<<"] }]},
        { code: "a|0", options: [{ int32Hint: true }]},
        { code: "a|0", options: [{ allow: ["|"], int32Hint: false }]}
    ],
    invalid: [
        { code: "a ^ b", errors: [{ message: "Unexpected use of '^'.", type: "BinaryExpression"}] },
        { code: "a | b", errors: [{ message: "Unexpected use of '|'.", type: "BinaryExpression"}] },
        { code: "a & b", errors: [{ message: "Unexpected use of '&'.", type: "BinaryExpression"}] },
        { code: "a << b", errors: [{ message: "Unexpected use of '<<'.", type: "BinaryExpression"}] },
        { code: "a >> b", errors: [{ message: "Unexpected use of '>>'.", type: "BinaryExpression"}] },
        { code: "a >>> b", errors: [{ message: "Unexpected use of '>>>'.", type: "BinaryExpression"}] },
        { code: "~a", errors: [{ message: "Unexpected use of '~'.", type: "UnaryExpression"}] },
        { code: "a ^= b", errors: [{ message: "Unexpected use of '^='.", type: "AssignmentExpression" }] },
        { code: "a |= b", errors: [{ message: "Unexpected use of '|='.", type: "AssignmentExpression" }] },
        { code: "a &= b", errors: [{ message: "Unexpected use of '&='.", type: "AssignmentExpression" }] },
        { code: "a <<= b", errors: [{ message: "Unexpected use of '<<='.", type: "AssignmentExpression" }] },
        { code: "a >>= b", errors: [{ message: "Unexpected use of '>>='.", type: "AssignmentExpression" }] },
        { code: "a >>>= b", errors: [{ message: "Unexpected use of '>>>='.", type: "AssignmentExpression" }] }
    ]
});
