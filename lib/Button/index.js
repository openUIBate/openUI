'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('style-loader!css-loader?modules!less-loader!autoprefixer-loader?{browsers:["last 2 version","Firefox 15"]}!./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Created by wcl on 17-8-16.
 */
var Button = function Button(props) {
  var _props = props;
  return _react2.default.createElement(
    'div',
    { className: 'button' },
    _react2.default.createElement(
      'span',
      null,
      _props.text || 'Button'
    )
  );
};

exports.default = Button;
//# sourceMappingURL=index.js.map