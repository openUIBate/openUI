'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('style-loader!css-loader?modules!less-loader!autoprefixer-loader?{browsers:["last 2 version","Firefox 15"]}!./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by wcl on 17-8-16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// const Tag = props => {
//   const _props = props;
//   return (
//     <div className="tag">
//       <span>{_props.text || 'Tag'}</span>
//     </div>
//   )
// };

var Tag = function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag(props) {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));
  }

  _createClass(Tag, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'tag' },
        _react2.default.createElement(
          'span',
          null,
          this.props.text || 'Tag'
        )
      );
    }
  }]);

  return Tag;
}(_react2.default.Component);

exports.default = Tag;
;
//# sourceMappingURL=index.js.map