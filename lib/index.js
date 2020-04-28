/**
 * @fileoverview test case should include code owner
 * @author pangwa
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = {
  'case-owner-required': {
    create: function(context) {
      return {
        CallExpression(node) {
          if (node.callee.name !== 'it') {
            return
          }
          const name = node.arguments[0]
          //
          // skip invalid calls
          if (!name || name.type !== 'Literal') {
            return
          }
          const caseName = name.value

          const atReg = '@\\S+'
          if (!caseName.match(atReg)) {
            context.report(node, '测试用例需要指定负责人');
          }
        }
      }
    }
  }
}



