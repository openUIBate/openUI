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
var Tag = function Tag(props) {
  var _props = props;
  return _react2.default.createElement(
    'div',
    { className: 'tag' },
    _react2.default.createElement(
      'span',
      null,
      _props.text || 'Tag'
    )
  );
};

exports.default = Tag;
//# sourceMappingURL=index.js.map