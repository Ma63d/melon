/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["module","../../babelHelpers"],t);else if("undefined"!=typeof exports)t(module,require("../../babelHelpers"));else{var r={exports:{}};t(r,e.babelHelpers),e.camelize=r.exports}}(this,function(module,e){"use strict";module.exports=function(e){if(!e)return"";else return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}});