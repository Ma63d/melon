/*! 2016 Baidu Inc. All Rights Reserved */
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","react","./InputComponent","./common/util/cxBuilder","./Icon","./Confirm","./calendar/Panel","./common/util/date","./Validity","./babelHelpers"],t);else if("undefined"!=typeof exports)t(exports,require("react"),require("./InputComponent"),require("./common/util/cxBuilder"),require("./Icon"),require("./Confirm"),require("./calendar/Panel"),require("./common/util/date"),require("./Validity"),require("./babelHelpers"));else{var r={exports:{}};t(r.exports,e.react,e.InputComponent,e.cxBuilder,e.Icon,e.Confirm,e.Panel,e.date,e.Validity,e.babelHelpers),e.Calendar=r.exports}}(this,function(exports,e,t,r,i,n,o,a,s,l){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var u=l.interopRequireDefault(e),p=l.interopRequireDefault(t),d=l.interopRequireDefault(i),c=l.interopRequireDefault(n),f=l.interopRequireDefault(o),h=l.interopRequireWildcard(a),m=l.interopRequireDefault(s),y=r.create("Calendar"),b=function(e){function t(r,i){l.classCallCheck(this,t);var n=l.possibleConstructorReturn(this,e.call(this,r,i)),o=n.state.value;return n.onLabelClick=n.onLabelClick.bind(n),n.onConfirm=n.onConfirm.bind(n),n.onLabelClick=n.onLabelClick.bind(n),n.onCancel=n.onCancel.bind(n),n.onDateChange=n.onDateChange.bind(n),n.state=l["extends"]({},n.state,{date:o?n.parseDate(o):new Date,open:!1}),n}return l.inherits(t,e),t.prototype.componentWillReceiveProps=function(e){var t=e.value,r=e.customValidity;if(t!==this.state.value||r!==this.props.customValidity){var i=t?this.parseValue(t):null;i=!i||isNaN(i.getTime())?new Date:i;var n=r?this.validator.createCustomValidity(r):this.checkValidity(t);this.setState({date:i,validity:n,value:this.stringifyValue(i)})}},t.prototype.parseValue=function(e){return this.parseDate(e)},t.prototype.stringifyValue=function(e){if(!h.isDate(e))return e;var t=this.props,r=t.dateFormat,i=t.lang;return h.format(e,r.toLowerCase(),i)},t.prototype.parseDate=function(e){if("string"!=typeof e)return e;var t=this.props.dateFormat.toLowerCase();return h.parse(e,t)},t.prototype.getValue=function(){return this.stringifyValue(this.state.value)},t.prototype.onLabelClick=function(){var e=this.props,t=e.disabled,r=e.readOnly;if(!t&&!r)this.setState({open:!0})},t.prototype.onConfirm=function(){var t=this,r=this.state,i=r.value,n=r.date;if(i=this.parseDate(i),h.isEqualDate(n,this.parseDate(i)))return void this.setState({open:!1});else return void this.setState({open:!1},function(){e.prototype.onChange.call(t,{type:"change",target:t,value:t.stringifyValue(n)})})},t.prototype.onCancel=function(){this.setState({open:!1})},t.prototype.onDateChange=function(e){var t=this,r=e.value,i=this.props.autoConfirm;this.setState({date:this.parseDate(r)},i?function(){return t.onConfirm()}:null)},t.prototype.render=function(){var e=this.state,t=this.props,r=t.lang,i=t.disabled,n=t.size,o=t.name,a=t.dateFormat,s=t.placeholder,p=l.objectWithoutProperties(t,["lang","disabled","size","name","dateFormat","placeholder"]),b=e.value,v=e.validity,x=t.begin,g=t.end;x=x?this.parseDate(x):null,g=g?this.parseDate(g):null;var C=e.open,q=e.date,P=y(t).addStates({focus:C}).addStates(this.getStyleStates()).build();return u["default"].createElement("div",l["extends"]({},p,{className:P}),u["default"].createElement("input",{name:o,ref:"input",type:"hidden",value:b,disabled:i,size:n}),u["default"].createElement("label",{onClick:this.onLabelClick},b?h.format(this.parseDate(b),a.toLowerCase(),r):u["default"].createElement("span",{className:y().part("label-placeholder").build()},s),u["default"].createElement(d["default"],{icon:"expand-more"})),u["default"].createElement(m["default"],{validity:v}),u["default"].createElement(c["default"],{open:C,variants:["calendar"],onConfirm:this.onConfirm,onCancel:this.onCancel,size:n,buttonVariants:["secondery","calendar"]},u["default"].createElement(f["default"],{date:q,begin:x,end:g,lang:r,onChange:this.onDateChange})))},t}(p["default"]);exports["default"]=b,b.displayName="Calendar",b.LANG={week:"周",days:"日,一,二,三,四,五,六"},b.defaultProps=l["extends"]({},p["default"].defaultProps,{defaultValue:"",dateFormat:"yyyy-MM-dd",lang:b.LANG,placeholder:"请选择"}),b.propTypes=l["extends"]({},p["default"].propTypes,{value:e.PropTypes.string,autoConfirm:e.PropTypes.bool,dateFormat:e.PropTypes.string,end:e.PropTypes.oneOfType([e.PropTypes.object,e.PropTypes.string]),begin:e.PropTypes.oneOfType([e.PropTypes.object,e.PropTypes.string]),lang:e.PropTypes.shape({week:e.PropTypes.string,days:e.PropTypes.string})})});