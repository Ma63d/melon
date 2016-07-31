/*! 2016 Baidu Inc. All Rights Reserved */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './Mask', 'melon-core/classname/cxBuilder', './common/util/dom', "./babelHelpers"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./Mask'), require('melon-core/classname/cxBuilder'), require('./common/util/dom'), require("./babelHelpers"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.Mask, global.cxBuilder, global.dom, global.babelHelpers);
        global.Drawer = mod.exports;
    }
})(this, function (exports, _react, _Mask, _cxBuilder, _dom, babelHelpers) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _Mask2 = babelHelpers.interopRequireDefault(_Mask);

    var _dom2 = babelHelpers.interopRequireDefault(_dom);

    /**
     * @file Drawer
     * @author leon(ludafa@outlook.com)
     */

    var cx = (0, _cxBuilder.create)('Drawer');

    var REVERT_POSITION = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
    };

    var Drawer = function (_Component) {
        babelHelpers.inherits(Drawer, _Component);

        function Drawer() {
            babelHelpers.classCallCheck(this, Drawer);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Drawer.prototype.render = function render() {
            var _props = this.props;
            var children = _props.children;
            var open = _props.open;
            var position = _props.position;
            var size = _props.size;
            var mask = _props.mask;
            var onHide = _props.onHide;
            var maskClickClose = _props.maskClickClose;


            var posValue = open ? 0 : -size;

            if (size <= 0) {
                var clientSize = position === 'bottom' || position === 'top' ? _dom2['default'].getClientHeight() : _dom2['default'].getClientWidth();
                posValue = open ? -size : clientSize;
            }

            var style = size > 0 ? {
                top: position === 'bottom' ? null : posValue,
                bottom: position === 'top' ? null : posValue,
                left: position === 'right' ? null : posValue,
                right: position === 'left' ? null : posValue,
                height: position === 'bottom' || position === 'top' ? size : null,
                width: position === 'left' || position === 'right' ? size : null
            } : {
                top: position === 'bottom' ? posValue : 0,
                bottom: position === 'top' ? posValue : 0,
                left: position === 'right' ? posValue : 0,
                right: position === 'left' ? posValue : 0,
                height: null,
                width: null
            };

            var visibilityTransitionDelay = open ? '0ms' : '400ms';
            var transitionStyle = size > 0 ? position : REVERT_POSITION[position];

            var transition = '' + transitionStyle + ' 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, ' + 'opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, ' + 'visibility 0ms cubic-bezier(0.23, 1, 0.32, 1) ' + visibilityTransitionDelay;

            var masker = mask ? _react2['default'].createElement(_Mask2['default'], {
                show: open,
                onClick: maskClickClose && onHide ? onHide : null }) : null;

            return _react2['default'].createElement(
                'div',
                { className: cx(this.props).build() },
                _react2['default'].createElement(
                    'div',
                    {
                        className: cx().part('window').build(),
                        style: babelHelpers['extends']({}, style, {
                            opacity: open ? 1 : 0,
                            visibility: open ? 'visible' : 'hidden',
                            transition: transition,
                            WebkitTransition: transition,
                            MozTransition: transition,
                            msTransition: transition,
                            overflow: 'auto'
                        }) },
                    children
                ),
                masker
            );
        };

        return Drawer;
    }(_react.Component);

    exports['default'] = Drawer;


    Drawer.displayName = 'Drawer';

    Drawer.propTypes = {
        position: _react.PropTypes.oneOf(Object.keys(REVERT_POSITION)).isRequired,
        open: _react.PropTypes.bool.isRequired,
        size: _react.PropTypes.number.isRequired,
        mask: _react.PropTypes.bool,
        maskClickClose: _react.PropTypes.bool,
        onHide: _react.PropTypes.func.isRequired
    };

    Drawer.defaultProps = {
        position: 'left',
        open: false,
        size: 300,
        mask: true,
        maskClickClose: true
    };
});