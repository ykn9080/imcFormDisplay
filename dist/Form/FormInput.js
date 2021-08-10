"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("actions");

var _AntFormBuild = _interopRequireDefault(require("Form/AntFormBuild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FormInput = props => {
  const dispatch = (0, _reactRedux.useDispatch)();
  let formdt = props.formdt; // useSelector((state) => state.global.currentData);

  console.log(formdt);

  const onFinish = val => {
    console.log(val);
    if (props.onFinish) props.onFinish(val);
  };

  const formdt1 = {
    data: {
      setting: {
        formItemLayout: {
          labelCol: {
            span: 2
          },
          wrapperCol: {
            span: 22
          }
        },
        layout: "horizontal",
        formColumn: 1,
        size: "middle",
        onFinish: {
          onFinish
        }
      },
      list: []
    }
  };
  (0, _react.useEffect)(() => {
    if (!formdt | formdt === "") {
      formdt = formdt1;
      dispatch((0, _actions.globalVariable)({
        currentData: formdt
      }));
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_AntFormBuild.default, {
    formdt: formdt
  }));
};

var _default = FormInput;
exports.default = _default;