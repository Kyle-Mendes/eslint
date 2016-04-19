/**
 * @fileoverview Tests for new-parens rule.
 * @author Ilya Volodin
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/new-parens"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("new-parens", rule, {
    valid: [
        "var a = new Date();",
        "var a = new Date(function() {});"
    ],
    invalid: [
        { code: "var a = new Date;", errors: [{ message: "Missing '()' invoking a constructor", type: "NewExpression"}] }
    ]
});
