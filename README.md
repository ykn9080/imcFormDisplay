<h1 align="center">Welcome to Form Builder 👋</h1>

> Make ant design base styled form with ease, by just adding json files for form styling and form items. Form Builder provides editing function, such as adding, removing items, change look and feels like number of columes, vertical, horizontal title layout etc. It can edit existing form, also create new form from scratch.

### 🏠 [Homepage](http://imcmaster.iptime.org:3080)

### ✨ <a href="http://imcmaster.iptime.org:4009/form/edit?target=_blank" >Demo</a>

[go](http://stackoverflow.com){:target="\_blank" rel="noopener"}

## Install

```sh
npm install formbuilder
```

## Usage

While you develop, showedit={true} will show you edit button.
Upon complete development, change showedit to false to hide button.

```sh
<AntFormDisplay showedit={true} formArray={...jsondata}/>
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

## Run tests

```sh
  },
```

## Author

👤 **Youngki Nam**

- Website: http://imcmaster.iptime.org
- Github: [@ykn9080](https://github.com/ykn9080)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
