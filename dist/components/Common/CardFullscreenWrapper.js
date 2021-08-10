"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

require("components/Common/Antd.css");

var _FullScreenWrap = _interopRequireWildcard(require("components/SKD/FullScreenWrap"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    flexGrow: 1,
    paddingRight: 10
  }
}));

const CardFullscreenWrapper = props => {
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    className: classes.root,
    spacing: 2
  }, props.content.map((k, i) => {
    return /*#__PURE__*/_react.default.createElement(_Grid.default, {
      item: true,
      xs: props.size,
      key: i
    }, /*#__PURE__*/_react.default.createElement(_FullScreenWrap.ConditionalWrap, {
      wrap: children => /*#__PURE__*/_react.default.createElement(_FullScreenWrap.default, null, children),
      index: props.index
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, k)));
  })));
};

var _default = CardFullscreenWrapper;
exports.default = _default;