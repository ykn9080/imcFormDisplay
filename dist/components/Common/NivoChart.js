"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _nivo = require("nivo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const NivoBar = props => {
  let data = [{
    country: "AD",
    "hot dog": 140,
    "hot dogColor": "hsl(68, 70%, 50%)",
    burger: 48,
    burgerColor: "hsl(288, 70%, 50%)",
    sandwich: 173,
    sandwichColor: "hsl(277, 70%, 50%)",
    kebab: 121,
    kebabColor: "hsl(247, 70%, 50%)",
    fries: 99,
    friesColor: "hsl(217, 70%, 50%)",
    donut: 106,
    donutColor: "hsl(193, 70%, 50%)"
  }, {
    country: "AE",
    "hot dog": 187,
    "hot dogColor": "hsl(302, 70%, 50%)",
    burger: 134,
    burgerColor: "hsl(65, 70%, 50%)",
    sandwich: 132,
    sandwichColor: "hsl(314, 70%, 50%)",
    kebab: 98,
    kebabColor: "hsl(356, 70%, 50%)",
    fries: 182,
    friesColor: "hsl(138, 70%, 50%)",
    donut: 144,
    donutColor: "hsl(254, 70%, 50%)"
  }, {
    country: "AF",
    "hot dog": 173,
    "hot dogColor": "hsl(211, 70%, 50%)",
    burger: 81,
    burgerColor: "hsl(250, 70%, 50%)",
    sandwich: 90,
    sandwichColor: "hsl(264, 70%, 50%)",
    kebab: 133,
    kebabColor: "hsl(326, 70%, 50%)",
    fries: 21,
    friesColor: "hsl(157, 70%, 50%)",
    donut: 125,
    donutColor: "hsl(12, 70%, 50%)"
  }, {
    country: "AG",
    "hot dog": 48,
    "hot dogColor": "hsl(226, 70%, 50%)",
    burger: 144,
    burgerColor: "hsl(104, 70%, 50%)",
    sandwich: 175,
    sandwichColor: "hsl(42, 70%, 50%)",
    kebab: 149,
    kebabColor: "hsl(217, 70%, 50%)",
    fries: 69,
    friesColor: "hsl(207, 70%, 50%)",
    donut: 34,
    donutColor: "hsl(124, 70%, 50%)"
  }, {
    country: "AI",
    "hot dog": 2,
    "hot dogColor": "hsl(318, 70%, 50%)",
    burger: 158,
    burgerColor: "hsl(250, 70%, 50%)",
    sandwich: 67,
    sandwichColor: "hsl(154, 70%, 50%)",
    kebab: 198,
    kebabColor: "hsl(59, 70%, 50%)",
    fries: 138,
    friesColor: "hsl(133, 70%, 50%)",
    donut: 38,
    donutColor: "hsl(357, 70%, 50%)"
  }, {
    country: "AL",
    "hot dog": 92,
    "hot dogColor": "hsl(50, 70%, 50%)",
    burger: 6,
    burgerColor: "hsl(232, 70%, 50%)",
    sandwich: 26,
    sandwichColor: "hsl(241, 70%, 50%)",
    kebab: 172,
    kebabColor: "hsl(86, 70%, 50%)",
    fries: 129,
    friesColor: "hsl(230, 70%, 50%)",
    donut: 72,
    donutColor: "hsl(66, 70%, 50%)"
  }, {
    country: "AM",
    "hot dog": 194,
    "hot dogColor": "hsl(277, 70%, 50%)",
    burger: 70,
    burgerColor: "hsl(234, 70%, 50%)",
    sandwich: 80,
    sandwichColor: "hsl(328, 70%, 50%)",
    kebab: 109,
    kebabColor: "hsl(134, 70%, 50%)",
    fries: 96,
    friesColor: "hsl(332, 70%, 50%)",
    donut: 26,
    donutColor: "hsl(164, 70%, 50%)"
  }];
  const keys = ["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"];
  const commonProps = {
    width: "100%",
    height: "100%",
    // margin: { top: 60, right: 80, bottom: 60, left: 80 },
    data: data,
    indexBy: "country",
    keys,
    padding: 0.2,
    labelTextColor: "inherit:darker(1.4)",
    labelSkipWidth: 16,
    labelSkipHeight: 16
  };
  return /*#__PURE__*/_react.default.createElement(_nivo.Bar, commonProps);
};

var _default = NivoBar;
exports.default = _default;