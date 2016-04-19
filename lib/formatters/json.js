/**
 * @fileoverview JSON reporter
 * @author Burak Yigit Kaya aka BYK
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * MIT License
 */
"use strict";

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function(results) {
    return JSON.stringify(results);
};
