"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

var _react = _interopRequireDefault(require("react"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _antd = _interopRequireDefault(require("react-awesome-query-builder/lib/config/antd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const InitialConfig = _antd.default; //const InitialConfig = BasicConfig;
//////////////////////////////////////////////////////////////////////

const fields = {
  user: {
    label: "User",
    tooltip: "Group of fields",
    type: "!struct",
    subfields: {
      firstName: {
        label2: "Username",
        //only for menu's toggler
        type: "text",
        excludeOperators: ["proximity"],
        mainWidgetProps: {
          valueLabel: "Name",
          valuePlaceholder: "Enter name"
        },
        fieldSettings: {
          validateValue: (val, fieldSettings) => {
            return val.length < 10;
          }
        }
      },
      login: {
        type: "text",
        excludeOperators: ["proximity"],
        fieldSettings: {
          validateValue: (val, fieldSettings) => {
            return val.length < 10 && (val === "" || val.match(/^[A-Za-z0-9_-]+$/) !== null);
          }
        },
        mainWidgetProps: {
          valueLabel: "Login",
          valuePlaceholder: "Enter login"
        }
      }
    }
  },
  num: {
    label: "Number",
    type: "number",
    preferWidgets: ["number"],
    fieldSettings: {
      min: -1,
      max: 5
    }
  },
  slider: {
    label: "Slider",
    type: "number",
    preferWidgets: ["slider", "rangeslider"],
    valueSources: ["value", "field"],
    fieldSettings: {
      min: 0,
      max: 100,
      step: 1,
      marks: {
        0: /*#__PURE__*/_react.default.createElement("strong", null, "0%"),
        100: /*#__PURE__*/_react.default.createElement("strong", null, "100%")
      }
    },
    //overrides
    widgets: {
      slider: {
        widgetProps: {
          valuePlaceholder: "..Slider"
        }
      }
    }
  },
  date: {
    label: "Date",
    type: "date",
    valueSources: ["value"]
  },
  time: {
    label: "Time",
    type: "time",
    valueSources: ["value"],
    operators: ["greater_or_equal", "less_or_equal", "between"],
    defaultOperator: "between"
  },
  datetime: {
    label: "DateTime",
    type: "datetime",
    valueSources: ["value"]
  },
  datetime2: {
    label: "DateTime2",
    type: "datetime",
    valueSources: ["field"]
  },
  color: {
    label: "Color",
    type: "select",
    valueSources: ["value"],
    fieldSettings: {
      listValues: [{
        value: "yellow",
        title: "Yellow"
      }, {
        value: "green",
        title: "Green"
      }, {
        value: "orange",
        title: "Orange"
      }]
    }
  },
  color2: {
    label: "Color2",
    type: "select",
    fieldSettings: {
      listValues: {
        yellow: "Yellow",
        green: "Green",
        orange: "Orange",
        purple: "Purple"
      }
    }
  },
  multicolor: {
    label: "Colors",
    type: "multiselect",
    fieldSettings: {
      listValues: {
        yellow: "Yellow",
        green: "Green",
        orange: "Orange"
      },
      allowCustomValues: true
    }
  },
  selecttree: {
    label: "Color (tree)",
    type: "treeselect",
    fieldSettings: {
      treeExpandAll: true,
      listValues: [{
        value: "1",
        title: "Warm colors",
        children: [{
          value: "2",
          title: "Red"
        }, {
          value: "3",
          title: "Orange"
        }]
      }, {
        value: "4",
        title: "Cool colors",
        children: [{
          value: "5",
          title: "Green"
        }, {
          value: "6",
          title: "Blue",
          children: [{
            value: "7",
            title: "Sub blue",
            children: [{
              value: "8",
              title: "Sub sub blue and a long text"
            }]
          }]
        }]
      }]
    }
  },
  multiselecttree: {
    label: "Colors (tree)",
    type: "treemultiselect",
    fieldSettings: {
      treeExpandAll: true,
      listValues: [{
        value: "1",
        title: "Warm colors",
        children: [{
          value: "2",
          title: "Red"
        }, {
          value: "3",
          title: "Orange"
        }]
      }, {
        value: "4",
        title: "Cool colors",
        children: [{
          value: "5",
          title: "Green"
        }, {
          value: "6",
          title: "Blue",
          children: [{
            value: "7",
            title: "Sub blue",
            children: [{
              value: "8",
              title: "Sub sub blue and a long text"
            }]
          }]
        }]
      }]
    }
  },
  stock: {
    label: "In stock",
    type: "boolean",
    defaultValue: true,
    mainWidgetProps: {
      labelYes: "+",
      labelNo: "-"
    }
  }
}; //////////////////////////////////////////////////////////////////////

const conjunctions = {
  AND: InitialConfig.conjunctions.AND,
  OR: InitialConfig.conjunctions.OR
};

const operators = _objectSpread(_objectSpread({}, InitialConfig.operators), {}, {
  // examples of  overriding
  between: _objectSpread(_objectSpread({}, InitialConfig.operators.between), {}, {
    textSeparators: ["from", "to"]
  })
});

const widgets = _objectSpread(_objectSpread({}, InitialConfig.widgets), {}, {
  // examples of  overriding
  slider: _objectSpread(_objectSpread({}, InitialConfig.widgets.slider), {}, {
    customProps: {
      width: "300px"
    }
  }),
  rangeslider: _objectSpread(_objectSpread({}, InitialConfig.widgets.rangeslider), {}, {
    customProps: {
      width: "300px"
    }
  }),
  date: _objectSpread(_objectSpread({}, InitialConfig.widgets.date), {}, {
    dateFormat: "DD.MM.YYYY",
    valueFormat: "YYYY-MM-DD"
  }),
  time: _objectSpread(_objectSpread({}, InitialConfig.widgets.time), {}, {
    timeFormat: "HH:mm",
    valueFormat: "HH:mm:ss"
  }),
  datetime: _objectSpread(_objectSpread({}, InitialConfig.widgets.datetime), {}, {
    timeFormat: "HH:mm",
    dateFormat: "DD.MM.YYYY",
    valueFormat: "YYYY-MM-DD HH:mm:ss"
  }),
  treeselect: _objectSpread(_objectSpread({}, InitialConfig.widgets.treeselect), {}, {
    customProps: {
      showSearch: true
    }
  })
});

const types = _objectSpread(_objectSpread({}, InitialConfig.types), {}, {
  // examples of  overriding
  boolean: (0, _merge.default)(InitialConfig.types.boolean, {
    widgets: {
      boolean: {
        widgetProps: {
          hideOperator: true,
          operatorInlineLabel: "is"
        }
      }
    }
  })
});

const localeSettings = {
  locale: {
    moment: "kr"
  },
  valueLabel: "Value",
  valuePlaceholder: "Value",
  fieldLabel: "Field",
  operatorLabel: "Operator",
  fieldPlaceholder: "Select field",
  operatorPlaceholder: "Select operator",
  deleteLabel: null,
  addGroupLabel: "Add group",
  addRuleLabel: "Add rule",
  delGroupLabel: null,
  notLabel: "Not",
  valueSourcesPopupTitle: "Select value source",
  removeRuleConfirmOptions: {
    title: "Are you sure delete this rule?",
    okText: "Yes",
    okType: "danger"
  },
  removeGroupConfirmOptions: {
    title: "Are you sure delete this group?",
    okText: "Yes",
    okType: "danger"
  }
};

const settings = _objectSpread(_objectSpread(_objectSpread({}, InitialConfig.settings), localeSettings), {}, {
  valueSourcesInfo: {
    value: {
      label: "Value"
    },
    field: {
      label: "Field",
      widget: "field"
    },
    func: {
      label: "Function",
      widget: "func"
    }
  },
  // canReorder: false,
  // canRegroup: false,
  // showNot: false,
  // showLabels: true,
  maxNesting: 3,
  canLeaveEmptyGroup: true //after deletion
  // renderField: (props) => <FieldCascader {...props} />,
  // renderOperator: (props) => <FieldDropdown {...props} />,
  // renderFunc: (props) => <FieldSelect {...props} />,

});

const funcs = {};
const config = {
  conjunctions,
  operators,
  widgets,
  types,
  settings,
  fields,
  funcs
};
var _default = config;
exports.default = _default;