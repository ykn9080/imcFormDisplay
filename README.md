<h1 align="center">Welcome to Form Builder 👋</h1>

> Make ant design base styled form with ease. It enable to use form by just adding json files of style and list. Form Builder provides editing function, such as adding, removing items, change look and feels like number of columes, vertical, horizontal title layout etc. It can edit existing form, also create new form from scratch.

### 🏠 [Homepage](http://imcmaster.iptime.org:3080)

### ✨ [Demo](http://imcmaster.iptime.org:4009/form/edit)

## Install

```sh
npm install formbuilder
```

## Usage basic

While you develop, showedit={true} will show you edit button.
Upon complete development, change showedit to false to hide button.

```sh
 <AntFormDisplay
      showedit={true}
      formArray={formArray}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
    />
```

## EventHandler

1. onFinish: By clicking submit button, onFinish function returns a value as object.
   With this you can proceed other action, such as save to server or change state.
   Return data is key value object for example: {collection:"abc",querystring:"123",.....}
2. onValuesChange: returns two parameters, changedValues, allValues.
   First value return just changed key value object, last value returns all key value object.
   e.g.
   a. changedValues: {collection:"abc"},
   b. allValues:{collection:"abc",querystring:undefined.....}

```sh
 const onFinish = (val) => {
    console.log(val);
  };
  const onValuesChange = (changedValues, allValues) => {
    console.log(changedValues, allValues);
  };
```

## Sample data(formArray)

formArray is composed of two parts:

1. list: items in the form
2. setting: look and feel of the form

```sh
{
  "list": [
    {
      "label": "Collection",
      "name": "collection",
      "type": "input",
      "seq": 0,
      "placeholder": "database table",
      "rules": [
        {
          "required": false
        }
      ],
      "requiredmsg": "you must insert"
    },
    {
      "label": "QueryString",
      "name": "querystring",
      "type": "input",
      "seq": 1,
      "placeholder": "pid=xxxx or _id=yyyy",
      "msgright": "라이트 메시지"
    },
    {
      "label": "Submit",
      "name": "",
      "type": "button",
      "seq": 7,
      "action": "submit",
      "btnStyle": "primary",
      "btnColor": "primary",
      "align": "right"
    }
  ],
 "setting": {
    "editable": false,
    "name": "antform",
    "layout": "horizontal",
    "formColumn": 1,
    "formItemLayout": {
      "labelCol": {
        "span": 4
      },
      "wrapperCol": {
        "span": 20
      }
    },
    "tailLayout": {},
    "initial": {},
    "size": "middle",
    "onFinish": "{values => {console.log(values);};}",
    "initialValues": {}
  },
 }
```

## Edit Form

If you provide pros as showedit={true} and click edit button, it redirect edit page.

[![Display Mode](http://imcmaster.iptime.org:9010/images/imcformedit.PNG?Content-Disposition=attachment%3B%20filename%3D%22imcformedit.PNG%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yknam%2F20210906%2F%2Fs3%2Faws4_request&X-Amz-Date=20210906T093552Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=7dcfc4683906dff1a1831fd5f9d6fc8ce4278c74814707ce7a82bd8c73927fd4)]

[![Edit Mode](http://imcmaster.iptime.org:9010/images/imcformedit.PNG?Content-Disposition=attachment%3B%20filename%3D%22imcformedit.PNG%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=yknam%2F20210906%2F%2Fs3%2Faws4_request&X-Amz-Date=20210906T083204Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=34d0bff62c25fc57531c6c1108b82fe83823ac88a4d8dd8a9965cd966b238cd5)]

[![Antd](https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*Yl83RJhUE7kAAAAAAAAAAABkARQnAQ)](https://ant.design)

## Author

👤 **Youngki Nam**

- Website: http://imcmaster.iptime.org
- Github: [@ykn9080](https://github.com/ykn9080)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
