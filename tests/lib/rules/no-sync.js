/**
 * @fileoverview Tests for no-sync.
 * @author Matt DuVall <http://www.mattduvall.com>
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-sync"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("no-sync", rule, {
    valid: [
        "var foo = fs.foo.foo();"
    ],
    invalid: [
        { code: "var foo = fs.fooSync();", errors: [{ message: "Unexpected sync method: 'fooSync'.", type: "MemberExpression"}] },
        { code: "var foo = fs.fooSync;", errors: [{ message: "Unexpected sync method: 'fooSync'.", type: "MemberExpression"}] }
    ]
});
